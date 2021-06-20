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