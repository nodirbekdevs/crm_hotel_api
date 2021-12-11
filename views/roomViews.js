const Room = require('./../models/roomModel')
const RoomManager = require('./../models/roomManagerModel')

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find()
    if (!rooms) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(rooms)
  } catch (e) {
    res.status(404).send(e)
  }
}

const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id)
    if (!room) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(room)
  } catch (e) {
    res.status(404).send(e)
  }
}

const makeRoom = async (req, res) => {
  const {manager, room_number, room_type, price} = req.body
  const image = req.file ? req.file.path : ''
  const managerId = await RoomManager.findById(manager)
  const room = new Room({manager: managerId, room_number, room_type, price, image})
  try {
    await room.save()
    if (!room) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(room)
  } catch (e) {
    res.status(404).send(e)
  }
}

const updateRoom = async (req, res) => {
  const {manager, room_number, room_type, price} = req.body
  const image = req.file ? req.file.path : ''
  const managerId = await RoomManager.findById(manager)
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      {manager: managerId, room_number, room_type, price, image},
      {new: true}
    )
    if (!room) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(room)
  } catch (e) {
    res.status(404).send(e)
  }
}

const deleteRoom = async (req, res) => {
  await Room.findByIdAndDelete(req.params.id).then(room => {
    if (room) return res.status(500).json({success: true, message: 'The customer has deleted'})
    else return res.status(500).json({success: true, message: 'The customer has not deleted'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

const cancelRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, {isAvailable: true}, {new: true})
    if (!room) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(room)
  } catch (e) {
    return res.status(400).json({success: false, error: error})
  }
}

module.exports = {getRooms, getRoom, makeRoom, updateRoom, deleteRoom, cancelRoom}
