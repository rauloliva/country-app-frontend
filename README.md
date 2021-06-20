# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

# Country App (Frontend)

React app to show information about the countries around the world.
using the API from the backend app, hosted in AWS Elastic Beanstalk.

## Configure the Maps API Key 

### The app uses an API key from google maps, follow this step to configure your own
* Create .env file at the root of the project
* Set your environment variables as key=value pair
* Use your environment variables in components like this:

```javascript
import env from 'react-dotenv'

const component = () => {
    const api_key = env.API_KEY
}
```