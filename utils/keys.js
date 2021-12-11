const bcrypt = require('bcryptjs')
const passport = require('passport')
const upload = require('./../middleware/uploads')

const PORT = 7000
const api_url = '/api'
const mongo_url = 'mongodb://localhost/hotel'
const mongo_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const salt = bcrypt.genSaltSync(10)
const secret_jwt = 'hotel-jwt'
const IsAuthenticated = passport.authenticate('jwt', {session: false})
const transfer = upload.single('image')


module.exports = {PORT, api_url, mongo_url, mongo_options, Id, salt, secret_jwt, IsAuthenticated, transfer}
