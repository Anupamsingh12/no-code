# no-code

## Manual Installation

- git clone https://github.com/Anupamsingh12/no-code.git
- cd 
- npm install
- Prepare the environment variables by generating .env file just as .env file
- nodemon index.js

<br />

## [Environment Variables](#environment-variables)

The environment variables should be set in a '.env' file just as .env file. You should set the values of these keys:

```js
# URL of the Mongo DB
DB_URL=YOUR_DB_URL

# AWS configurations for S3 
ENDPOINT=AWS_ENDPOINT_HERE
ACCESS_KEY=AWS_ACCESS_KEY_ID_HERE
SECRET_KEY=AWS_SECRET_ACCESS_KEY_HERE
```

<br />

### API Endpoints
Please find postman collection named "assignment.postman_collection.json" in the source code.
List of available routes:  
**User Auth Routes**:
- Signup - POST /api/auth/signup
- Login - POST /api/auth/login

**Design Routes**:
requires "authentication" in header with the  access token returned in login api in api's marked *
- Save Design - POST /api/design*
- Get All Design - GET /api/design/all
- Get Design By Id - POST /api/design/design_id
- Delete Design - DELETE /api/design/design_id*
- Update Design - PUT /api/design/design_id*
- search Design - GET /api/design/search?p={YOUR_SEARCH_STRING}
- Add Design asset - POST /api/design/asset/design_id*
- View Design asset - GET /api/design/asset/design_id*

























