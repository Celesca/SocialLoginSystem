# Social Login System

### Social Login System is the web service that use Passport.js and OAuth from Google and Facebook to login into the system.

The project require you to create your own .env file for your own secret key of google and facebook OAuth

### Manual Installation

`git clone github.com/Celesca/SocialLoginSystem.git`

`cd SocialLoginSystem`

`npm install`

`npm start` or `npm run dev` for nodemon

the server will started at port 3000.

### Installation via Docker

`git clone github.com/Celesca/SocialLoginSystem.git`

`cd SocialLoginSystem`

`docker build -t socialloginsystem .`

`docker run -p 3000:3000 socialloginsystem`

---

### Systems

* Login with the username and password in the homepage.
* Login with the Google account to use in the homepage.
* Login with the Facebook account to use in the homepage.

---

### Google Authentication API Key

First, you need to have your GCP API key by creating your own service.
You need to following these steps. Reference from Passport.js

Goes to https://console.cloud.google.com/

Register App
In the previous section, you added a route which redirects the user to Google when they click "Sign in with Google." In this section, you'll register the app with Google so that it can make use of Google's APIs.

Go to the Google Cloud Platform console.

From the projects list, select a project or create a new one.

Navigate to the APIs & Services page and select Credentials.

If you have an existing application, it will be listed under OAuth 2.0 Client IDs. Click Edit OAuth client to obtain the client ID and secret, and proceed to configure the strategy. Otherwise, continue.

If you have not already done so, configure the OAuth consent screen. Select External to make your application available to any user with a Google account. Complete the app registration process by entering the app name, support email, and developer contact information.

Click Create Credentials, then select OAuth client ID.

Select Web application as Application type.

Click Add URI under Authorized Redirect URIs. Enter http://localhost:3000/oauth2/redirect/google.

Click Create to create the OAuth client. The following screen will display your client ID and secret. Proceed to configure the strategy.

---

### Facebook Authentication API Key

goes to https://developers.facebook.com/

Create the app and select `Authenticate and request data from users with Facebook Login` and No, I'm not building a game

Then get your App ID and App Secret to then put it in your .env file

---

### .ENV Structure
create the .env and insert

- GOOGLE_CLIENT_ID = __INSERT_CLIENT_ID_HERE__
- GOOGLE_CLIENT_SECRET = __INSERT_CLIENT_SECRET_HERE__
- FACEBOOK_CLIENT_ID = __INSERT_APP_ID_HERE__
- FACEBOOK_CLIENT_SECRET = __INSERT_APP_SECRET_HERE__
- PORT = 3000 (or your choice)
