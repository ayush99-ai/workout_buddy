const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// SIGNUP
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields are mandatory')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong')
  }

  const exists = await this.findOne({ email })
  if (exists) {
    throw Error('Email already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user   // 🔥 FIX 1 (IMPORTANT)
}

// LOGIN
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields are mandatory')
  }

  const user = await this.findOne({ email })   // 🔥 FIX 2

  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)