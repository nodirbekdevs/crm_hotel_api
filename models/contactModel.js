const {Schema, model} = require('mongoose')

const Contact = model('Contact', new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String, required: true}
}))

module.exports = Contact
