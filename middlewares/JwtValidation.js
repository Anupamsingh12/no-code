const jwt = require('jsonwebtoken')
const createError = require('http-errors')

 const validateToken=async (req, res, next)=> {
  const accessToken = req.headers.authorization;
  
  if (!accessToken) {
    return res.status(401).send({ error: 'Access token is missing' });
  }

  try {
    const decodedToken =   jwt.verify(accessToken, 'abc232');
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(401).send({ error: 'Access token is invalid' });
  }
}

module.exports = validateToken;
