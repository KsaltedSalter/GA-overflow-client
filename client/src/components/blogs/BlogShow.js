import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { deleteBlog, getBlog } from "../../api/callerFunctions.js";
import BlogComments from "./BlogComments.js";
import { getPayLoad } from "../../api/authFunctions.js";

const BlogShow = () => {

  const history = useHistory()
  const { id } = useParams()
  const [blogInfo, setBlogInfo] = useState([])
  const [createdBy, setCreatedBy] = useState([])
  const [date, setDate] = useState('')

  useEffect(() => {
    getBlog(id).then((data) => {
      setBlogInfo(data)
      setDate(data.createdAt)
    })
  }, [])


  useEffect(() => {
    getBlog(id).then((data) => {
      setCreatedBy(data.createdBy);
    });
  }, []);


  // useEffect(() => {
  //   getBlog(id).then((data) => {
  //     setCreatedBy(data.createdBy)
  //   })
  // }, [])

  console.log('THIS BLOG DATE', date)


  const isOwner = getPayLoad().userId === createdBy._id;


  const handleDelete = async () => {
    const blogIdToDelete = id;
    try {
      await deleteBlog(blogIdToDelete);
      history.push("/");
    } catch (err) {
      console.error(`Failed to delete blog id: ${id}`, err);
    }
  };

  const d = new Date(blogInfo.createdAt);
  const date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();

  return (

    <div className='main-content'>
      <img src={blogInfo.headerImgUrl} className='blog-header-img' />
      <h1 className='blog-title'>{blogInfo.header}</h1>

      <div className='blog-show-author'>
        <span>by</span>
        <h3>{createdBy.username}</h3>
      </div>
      <div className='blog-show-date'>{blogInfo.createdAt}</div>

      <div className='social-links'>

        <a
          href={createdBy.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href={createdBy.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </div>
      <h3 className="blog-summary">{blogInfo.summary}</h3>
      <hr />
      <p className="blog-body">{blogInfo.body}</p>
      <hr />
      <div className="body-img">
        <img
          src={blogInfo.bodyImgUrl}
          style={{ width: "100%", height: "30em", margin: "3em 0" }}
        />
      </div>
      {/* <div className="blog-tags">
        {tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div> */}


      <div>Posted by: {createdBy.username}</div>
      <div>Posted on: {date}</div>


      <BlogComments />

      <Link to={"/"}>
        <button className="home-btn">Home</button>
      </Link>
      {isOwner && (
        <button className="delete-blog-btn" onClick={handleDelete}>
          Delete Blog
        </button>
      )}
    </div>
  );
};

export default BlogShow;
