const User = require('./../models/userModel')

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    if (!users) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(users)
  } catch (e) {
    res.status(404).send(e)
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(user)
  } catch (e) {
    res.status(404).send(e)
  }
}

const makeUser = async (req, res) => {
  const {name, username, email, isAdmin, isManager, isCustomer, password} = req.body
  const user = new User({name, username, email, isAdmin, isManager, isCustomer, password})
  try {
    await user.save()
    if (!user) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(user)
  } catch (e) {
    res.status(404).send(e)
  }
}

const updateUser = async (req, res) => {
  const {name, username, email, isAdmin, isManager, isCustomer, password} = req.body
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {name, username, email, isAdmin, isManager, isCustomer, password},
      {new: true}
    )
    if (!user) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(user)
  } catch (e) {
    res.status(404).send(e)
  }
}

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id).then(user => {
    if (user) return res.status(500).json({success: true, message: 'The customer has deleted'})
    else return res.status(500).json({success: true, message: 'The customer has not deleted'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getUsers, getUser, makeUser, updateUser, deleteUser}
