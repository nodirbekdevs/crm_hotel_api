const {Schema, model} = require('mongoose')

const booking = new Schema({
  roomNumber: {type: Schema.Types.ObjectId, ref: 'Room'},
  customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  amount: {type: Number},
  bookedOn: {type: Date, default: Date.now()}
})

booking.methods.isPastDue = () => {
  const time = Date.now() > this.endDate
  return time
}

const Booking = model('Booking', booking)

module.exports = Booking
