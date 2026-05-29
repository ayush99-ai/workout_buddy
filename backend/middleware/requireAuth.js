const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: "Auth required" })
  }

  const token = authorization && authorization.split(" ")[1]

console.log("TOKEN:", token)

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.findById(_id).select("-password")

    next()
  } catch (error) {
    res.status(401).json({ error: "Request not authorized" })
  }
  
}

module.exports = requireAuth