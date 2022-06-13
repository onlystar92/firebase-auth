const admin = require("../config/firebase-config");

class Middleware {
  async decodeToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      req.user = decodeValue;

      if (decodeValue) {
        return next();
      }

      return res.json({ message: "Invalid Token" });
    } catch (error) {
      return res.json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new Middleware();
