const User = require('./../models/userModel')
const Contact = require('./../models/contactModel')

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
    if (!contacts) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(contacts)
  } catch (e) {
    res.status(404).send(e)
  }
}

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(contact)
  } catch (e) {
    res.status(404).send(e)
  }
}

const makeContact = async (req, res) => {
  const {user, message} = req.body
  const userId = await User.findById(user)
  const contact = new Contact({user: userId, name: userId.name, email: userId.email, message})
  try {
    await contact.save()
    if (!contact) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(contact)
  } catch (e) {
    res.status(404).send(e)
  }
}

const updateContact = async (req, res) => {
  const {user, message} = req.body
  const userId = await User.findById(user)
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {user: userId, name: userId.name, email: userId.email, message},
      {new: true}
    )
    if (!contact) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(contact)
  } catch (e) {
    res.status(404).send(e)
  }
}

module.exports = {getContact, getContacts, makeContact, updateContact}
