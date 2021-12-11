const {Schema, model} = require('mongoose')

const RoomManager = model('RoomManager', new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  image: {type: String, default: ''},
  phoneNumber: {type: String, required: true},
  gender: {type: String, required: true},
}))

module.exports = RoomManager
