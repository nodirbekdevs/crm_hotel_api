const User = require('./../models/userModel')
const Customer = require('./../models/contactModel')

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find()
    if (!customers) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(customers)
  } catch (e) {
    res.status(404).send(e)
  }
}

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id)
    if (!customer) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(customer)
  } catch (e) {
    res.status(404).send(e)
  }
}

const makeCustomer = async (req, res) => {
  const {user, phoneNumber, address, state, pinCode} = req.body
  const image = req.file ? req.file.path : ''
  const userId = await User.findById(user)
  const customer = new Customer({user: userId, image, phoneNumber, address, state, pinCode})
  try {
    await customer.save()
    if (!customer) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(customer)
  } catch (e) {
    res.status(404).send(e)
  }
}

const updateCustomer = async (req, res) => {
  const {user, phoneNumber, address, state, pinCode} = req.body
  const image = req.file ? req.file.path : ''
  const userId = await User.findById(user)
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      {user: userId, image, phoneNumber, address, state, pinCode},
      {new: true}
    )
    if (!customer) res.status(200).send({message: 'Topilmadi'})
    res.status(200).send(customer)
  } catch (e) {
    res.status(404).send(e)
  }
}

const deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id).then(customer => {
    if (customer) return res.status(500).json({success: true, message: 'The customer has deleted'})
    else return res.status(500).json({success: true, message: 'The customer has not deleted'})
  }).catch(error => {
    return res.status(400).json({success: false, error: error})
  })
}

module.exports = {getCustomers, getCustomer, makeCustomer, updateCustomer, deleteCustomer}
