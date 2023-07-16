function authenticateRequest(req, res, next) {
  const authToken = req.headers.authorization;

  // TODO: Implement authentication logic here


  if (!isValidToken(token)) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  const token = authHeader.split(' ')[1];

  if (!authToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

module.exports = { authenticateRequest };
