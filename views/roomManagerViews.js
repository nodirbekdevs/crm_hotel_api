const User = require('./../models/userModel')
const RoomManager = require('./../models/roomManagerModel')

const getManagers = async (req, res) => {
  try {
    const managers = await RoomManager.find()
    if (!managers) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(managers)
  } catch (e) {
    res.status(404).send(e)
  }
}

const getManager = async (req, res) => {
  try {
    const manager = await RoomManager.findById(req.params.id)
    if (!manager) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(manager)
  } catch (e) {
    res.status(404).send(e)
  }
}

const makeManager = async (req, res) => {
  const {user, phoneNumber, gender} = req.body
  const image = req.file ? req.file.path : ''
  const userId = await User.findById(user)
  const manager = new RoomManager({user: userId, image, phoneNumber, gender})
  try {
    await manager.save()
    if (!manager) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(manager)
  } catch (e) {
    res.status(404).send(e)
  }
}

const updateManager = async (req, res) => {
  const {user, phoneNumber, gender} = req.body
  const image = req.file ? req.file.path : ''
  const userId = await User.findById(user)
  try {
    const manager = await RoomManager.findByIdAndUpdate(
      req.params.id,
      {user: userId, image, phoneNumber, gender},
      {new: true}
    )
    if (!manager) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(manager)
  } catch (e) {
    res.status(404).send(e)
  }
}

const deleteManager = async (req, res) => {
  await RoomManager.findByIdAndDelete(req.params.id).then(manager => {
    if (manager) return res.status(500).json({success: true, message: 'The customer has deleted'})
    else return res.status(500).json({success: true, message: 'The customer has not deleted'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getManagers, getManager, makeManager, updateManager, deleteManager}
