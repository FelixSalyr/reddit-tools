## Reddit Tools

An application to extend [Reddit](https://reddit.com) functionallity. This is a personal
project built React to learn the framework. It is intended to function on top of a Node.js API
that is hosted in a seperate repository located [here](https://github.com/FelixSalyr/reddit-oauth).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using [MUI](https://mui.com/) as a component library.

## Project Screen Shots

Login Card:
![Login card screenshot](screenshots/login.png)

Favorites View:
![Favorites view screenshot](screenshots/favorites.png)

Favorites View (dark mode):
![Favorites view in dark mode variant](screenshots/favorites_darkmode.png)

## Project Status

This project is still in development. I plan to implement the following (in order):

### Deployment

Currently woriking on deploying this project to AWS EC2. The Node.js API is currently not
accepting HTTPS requests. I'd also like to Automate this process as much as possible.

### Unit Tests!

Unit tests for every project is a must.

### Set Up Environment Vars

There's some environment specific variables that need to be moved to the .env file with both dev and prod versions.

### Async loading of all Saved Posts

Currently only the most recent 25 posts are loaded, but I plan to update the application to asynchronously load all saved posts and update the interface as the posts slowly tick in. I haven't decided if I want to cache this information.

### Performance improvements

There are numerous optimizations that can still be made.

### Custom views for specific Subreddits

I wanted to add specific features to certain Subreddit tabs. For examples, I save posts of places I want to visit, I would like to see if I can leverage some language parsing library to condence that data to a list of place names which I could map to location data and plot using some mapping library.

## Project Screen Shots

Coming Soon!

## Reflection

 - I created this project to pick up as much of React as I could, as quickly as I could
 - It has been a good learning experience and I enjoy how easy it is to share data across
   the entire application
 - A large portion of my time was spent trying to get the Node.js application working with the reddit API which detracted from the time I had to spend on the API. Deploying to AWS with a proper configuration has also been a significant challenge.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
