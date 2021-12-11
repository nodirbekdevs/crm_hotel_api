const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')
const helmet = require('helmet')
const db = require('./utils/db')
const Routes = require('./routes/main')
const {PORT, api_url} = require('./utils/keys')

const app = express()
app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(cors())
app.options('*', cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('env') === 'development' ? app.use(morgan('dev')) : app.use(helmet())
app.use('/uploads', express.static('uploads'))
app.use(`${api_url}`, Routes)

const start = async () => {
  try {
    await db
    app.listen(PORT, () => {console.log('Server running on 3000 port')})
  } catch (error) {
    console.log(`Mistake is ${error}`)
  }
}

start()
