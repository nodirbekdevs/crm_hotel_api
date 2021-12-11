const {Schema, model} = require('mongoose')

const User = model('User', new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  isManager: {type: Boolean, default: false},
  isCustomer: {type: Boolean, default: false},
  password: {type: String, required: true},
  madeAt: {type: Date, default: Date.now()}
}))

module.exports = User
