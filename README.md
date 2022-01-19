

# Project Three - GA Overflow

A group project of three, over two weeks to create a full-stack application with CRUD operations for General Assembly students, graduates and tutors to share and exchange advice about the course and coding.  

[Click for GA Overflow Client Site](https://ga-overflow.netlify.app/)

![Homescreen](https://gcdn.pbrd.co/images/Mn6vSeePTD49.png?o=1)

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Installing](#installing)
- [Dependencies](#dependencies)
- [Process](#process)
- [Wireframe](#wireframe)
- [Challenges](#challenges)
- [Wins](#wins)
- [Future](#future)

## Technologies

Project is created with:

### Backend:
- Node.js
- MongoDb
- Mongoose
- Postman

### Frontend:
- HTML
- CSS
- SASS
- JavaScript
- React.js
- Webpack
- Framer Motion
- FontAwesome
- React Icons

### Design:
- Figma
- Pulp Fipsum
- Hipster Ipsum

## Setup

You will need to check you have [node.js](https://www.codecademy.com/articles/react-setup-i) and [Express](https://expressjs.com/en/starter/installing.html) installed before the application will run. Following the linked installation guides.

## Installing

There are two GitHub repos for the application: 

### Frontend: 
[https://github.com/neilmurcho13/GA-overflow-client](https://github.com/neilmurcho13/GA-overflow-client)

### Backend: 
[https://github.com/neilmurcho13/GA-overflow-backend](https://github.com/neilmurcho13/GA-overflow-backend)

## Dependencies

The following dependencies will be installed automatically using the following command:
```
npm install
``` 

### Frontend: 
* Bcrypt
* Cors
* Dotenv
* Express
* Jsonwebtoken
* Mongoose
* Mongoose-hidden
* Mongoose-unique-validator
* Babel-eslint 

### Backend: 
* babelcore 
* babel/plugin-transform-runtime
* babel/preset-env
* babel/preset-react 
* babel-loader 
* css-loader
* dotenv-webpack 
* file-loader 
* html-webpack-plugin
* sass
* sass-loader
* style-loader
* webpack
* webpack-cli
* webpack-dev-server

## Executing program

Both the client and the database need to be running at the same time. 
The backend runs on port 3000.  

### Back-end:

First seed the data if you are running outside of MongoDB:
```
yarn seed
```

Once the data has been seeded, you can run the server: 
```
yarn start
```

### Front-end:

Express server runs on port 8001. 

Run from inside the client folder
```
yarn start:client
```

## Process

The website was designed to provide a space for General Assembly students and alumni to share advice about coding and careers and to ask others working on the course for help. The site uses a blog style format for logged in users to publish and comment on posts. 

The application has the following features: 

* Write and publish blog with title, summary, text, images
* Display blogs in order of the most recently published
* Add comments to blogs
* Edit and delete blog posts
* Register a new user and login and logout
* Search function for blog titles, summaries and text

We developed the fullstack application using MERN stack, with the following technologies: 

* MongoDB - document database for holding the blog post and user data
* Express(.js) - web application framework for Node.js 
* React(.js) - client-side JavaScript framework
* Node(.js) - JavaScript web server

![Image of MERN stack](https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress)


## Challenges

- Implementing search component. I originally could get the search function to work within the component itself, but when I wanted it to search from the Header I was unable to get the search to work. The search needed to happen from the uppermost component rather than the search component 
- Formatting createdAt dates to be readable for aesthetic UI. Once implemented it affected the search component and created a small bug so that the search no longer worked
- As several people were working on it there were lots of little bugs that would crop up and affect each other. Merging branches became a little more difficult as it was sometimes unclear what was old or new code.

## Wins

- This was the first full-stack project we had worked on. In just two weeks we managed to build a clean and complex communication between our backend API, database and frontend and produce a well rounded site.
- The site itself is very aesthetically pleasing. It was my first time personally using SASS in a way where all the components styling is separated out and imported onto a main SASS document.
- The site has lots of functionality, it can create, edit and delete blog posts as well as comments on the posts. 

## Future

- An important feature to add to improve user experience is to allow users to edit and customise their personal profiles
- One feature is that members will be able to post their code for an open code review. The code would be able to be formatted in a readable way.
- Another feature to add would be a way for members to propose a collaborative project





