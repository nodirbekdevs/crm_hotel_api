const {Schema, model} = require('mongoose')

const Room = model('Room', new Schema({
  manager: {type: Schema.Types.ObjectId, ref: 'RoomManager'},
  room_number: {type: String, required: true},
  room_type: {type: String, required: true},
  isAvailable: {type: Boolean, default: false},
  price: {type: Number, default: 100000.00},
  noOfDaysAdvance: {type: Number},
  startDate: {type: Date, default: Date.now()},
  image: {type: String, default: ''}
}))

module.exports = Room
