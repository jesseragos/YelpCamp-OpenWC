## UPDATE
A Yelp clone web application for camping enthusiasts.
___________
# YelpCamp
A Yelp clone web application for camping enthusiasts.

Disclaimer: This project is developed in collaboration from [The Web Developer Bootcamp Udemy course](https://www.udemy.com/the-web-developer-bootcamp/).

### Requirements:
1. [Node.js](https://nodejs.org/en/) is installed.
2. A local installation of MongoDB or cloud service like [mLab](https://mlab.com/) and get the database URL.

### Instructions:
1. After having the requirements, check if node and npm commands are running in any working terminal like Bash or PowerShell.
2. Create a `.env` file in the root of project directory with the contents as follow below:
```env
PORT=3000
IP=127.0.0.1
DATABASEURL=yourDatabaseURL
```
You can change the values of the other variables as you wish but insure that it will reflect with the setup in later steps.

3. Run `yarn install` to download all dependencies from package.json for the server.
3. Run `yarn run client-install` to download all dependencies for the client.
4. For those using MongoDB cloud service, refer to step 2 above *OR* set the URL in environment variables with this command: 'export DATABASEURL = yourDatabaseURL'. If local setup, database URL will default to `mongodb://localhost/yelp_camp` if DATABASEURL variable is not provided.
5. To start app:
  - `yarn run start` - start server
  - `yarn run server` - start server with nodemon
  - `yarn run client` - start open-wc client server
  - `yarn run dev` - start both server and client
