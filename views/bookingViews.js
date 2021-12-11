const Booking = require('./../models/bookingModel')
const Room = require('./../models/roomModel')
const Customer = require('./../models/customerModel')

const getBooks = async (req, res) => {
  try {
    const books = await Booking.find()
    if (!books) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(books)
  } catch (e) {
    res.status(404).send(e)
  }
}

const getBook = async (req, res) => {
  try {
    const book = await Booking.findById(req.params.id)
    if (!book) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(book)
  } catch (e) {
    res.status(404).send(e)
  }
}

const makeBook = async (req, res) => {
  const {roomNumber, customer, startDate, endDate} = req.body
  const user = await Customer.findById(customer)
  const date = (endDate - startDate)
  const room = await Room.findByIdAndUpdate(roomNumber, {isAvailable: false, noOfDaysAdvance: date}, {new: true})
  const money = room.price * date
  const booking = new Booking({roomNumber: room, customer: user, startDate, endDate, amount: money})
  try {
    await booking.save()
    if (!booking) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(booking)
  } catch (e) {
    res.status(404).send(e)
  }
}

const updateBook = async (req, res) => {
  const {roomNumber, customer, startDate, endDate} = req.body
  const user = await Customer.findById(customer)
  const date = (endDate - startDate)
  const room = await Room.findByIdAndUpdate(roomNumber, {isAvailable: false, noOfDaysAdvance: date}, {new: true})
  const money = room.price * date
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {roomNumber: room, customer: user, startDate, endDate, amount: money},
      {new: true}
    )
    if (!booking) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(booking)
  } catch (e) {
    res.status(404).send(e)
  }
}

module.exports = {getBooks, getBook, makeBook, updateBook}
