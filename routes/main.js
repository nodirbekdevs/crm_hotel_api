const express = require('express')
const authRoutes = require('./authRoutes')
const bookingRoutes = require('./bookingRoutes')
const contactRoutes = require('./contactRoutes')
const customerRoutes = require('./customerRoutes')
const roomManagerRoutes = require('./roomManagerRoutes')
const roomRoutes = require('./roomRoutes')
const userRoutes = require('./userRoutes')
const {IsAuthenticated} = require('./../utils/keys')

const main = express()

main.use('/booking', IsAuthenticated, bookingRoutes)
main.use('/contact', IsAuthenticated, contactRoutes)
main.use('/customer', IsAuthenticated,  customerRoutes)
main.use('/roomManager', IsAuthenticated, roomManagerRoutes)
main.use('/room', IsAuthenticated, roomRoutes)
main.use('/auth', authRoutes)
main.use('/users', IsAuthenticated,  userRoutes)

module.exports = main
