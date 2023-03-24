require("dotenv").config();

module.exports={
    s3:{
        endpoint_url:process.env.ENDPOINT,
        access_key:process.env.ACCESS_KEY,
        secret_key:process.env.SECRET_KEY,
    },
}