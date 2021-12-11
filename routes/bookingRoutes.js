const router = require('express').Router()
const {getBooks, getBook, makeBook, updateBook} = require('./../views/bookingViews')

router.get('/', getBooks)
router.get('/:id', getBook)
router.post('/make', makeBook)
router.put('/edit/:id', updateBook)

module.exports = router
