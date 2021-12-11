const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./../models/userModel')
const {secret_jwt} = require('./../utils/keys')


const login = async (req, res) => {
  const {username, password} = req.body
  const candidate = await User.findOne({username: username})
  if (candidate) {
    const passwordResult = bcrypt.compareSync(password, candidate.password)
    if (passwordResult) {
      const token = jwt.sign(
        {username: candidate.username, userId: candidate._id, isAdmin: candidate.isAdmin},
        secret_jwt,
        {expiresIn: 60 * 60}
      )
      res.status(200).json({token: `Bearer ${token}`})
    } else {
      res.status(401).json({message: 'Пароли не совпадают. Попробуйте снова'})
    }
  } else {
    res.status(404).json({message: 'Пользователь с таким email не найден'})
  }
}

const registerUser = async (req, res) => {
  const {name, email, username, password, isManager, isCustomer} = req.body
  const candidate = await User.findOne({username: username})
  if (candidate) {
    res.status(409).json({message: 'Такой email уже занят. Попробуйте другой'})
  } else {
    const user = new User({name, email, username, password: bcrypt.hashSync(password, salt), isManager, isCustomer})
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = {login, registerUser}
