const {Schema, model} = require('mongoose')

const Customer = model('Customer', new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  image: {type: String, default: ''},
  phoneNumber: {type: String, required: true},
  address: {type: String, required: true},
  state: {type: String},
  pinCode: {type: String}
}))

module.exports = Customer
