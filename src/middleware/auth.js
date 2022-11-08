const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(404).send(" token must be required");

    let decodedToken = jwt.verify(token, "jyoti");
    if (!decodedToken) {
      return res.status(401).send({ msg: "Access Denied" });
    }
    req.loggedIn = decodedToken.userId;
    next();
  } catch (err) {
    res.status(500).send({ msg: "Access Denied" });
  }
};

const authorise = (req, res, next) => {
 try {
  let checkAuthorise = req.params.userId;
  if (checkAuthorise !== req.loggedIn) {
    return res.status(403).send({ msg: "ooooh ! You are not valid User" });
  }
  next();
 } catch (error) {
  return res.status(500).send({ message: error.message });
 }
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
