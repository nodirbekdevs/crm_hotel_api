const router = require('express').Router()
const {login, registerUser} = require('./../views/authViews')

router.post('/login', login)
router.post('/register', registerUser)

module.exports = router
