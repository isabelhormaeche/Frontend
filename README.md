# Film Locations Blog App

[Film Locations FastAPI app](https://wondrous-bunny-d8bf8f.netlify.app/) helps you discover and explore amazing film locations around the Basque Country. Its mission is to provide a comprehensive database of film locations, making it easy for film production companies to work and experience the magic of this land. Registered users can participate and shared interesting filming locations for everybody to discover.

The project is built using **React as the frontend** framework and **Python with FastAPI as the backend**, and a **SQLite database** is used to store the data.

## What can you do in the website?

It is a blog page where the registered users can:

* **Read** posts.
* **Write** posts.
* **Edit** posts.
* **Delete** posts.

Users can register and then log in.

Users don't have to be logged in to read the posts, but they do have to be logged in to write, edit or delete posts.


## How the backend works

The backend is built using Python with FastAPI. The backend is hosted on Render, here:[Film Locations FastAPI app](https://filmlocationsapi.onrender.com/docs) and the database is sql language: [SQLite](https://www.sqlite.org/). The backend is connected to the frontend using axios. The frontend is hosted on Netlify, here:[Film Locations FastAPI app](https://wondrous-bunny-d8bf8f.netlify.app/).

The backend has the following endpoints:

### POST

*`/api/login` - **Login**

*`/api/blogs/` - **Create Blog**

*`/api/users/` - **Register a new user**

### GET

*`/api/blogs/` - **Get Blogs**

*`/api/blogs/{id}` - **Get a single Blog**

*`/api/users/{id}` - **Get User´s information** (get user´s blogs,etc)

### PUT
*`/api/blogs/update_blog/{blog_id}` - **Edit Blog**

### DELETE
*`/api/blogs/{id}` - **Delete Blog**


## Who can use the backend?

Anyone can use the backend, but it is meant to be used by the frontend. The backend is not meant to be used by itself, but it can be used by anyone who wants to use it.

Some of the endpoints are protected, so you need to be logged in to use them. You can register. If you are not logged in, you will get an error message.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#
