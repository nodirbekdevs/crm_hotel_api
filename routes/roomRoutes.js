const router = require('express').Router()
const {getRooms, getRoom, makeRoom, updateRoom, deleteRoom, cancelRoom} = require('./../views/roomViews')
const {transfer} = require('./../utils/keys')

router.get('/', getRooms)
router.get('/:id', getRoom)
router.post('/make', transfer, makeRoom)
router.post('/cancel', cancelRoom)
router.put('/edit/:id', transfer, updateRoom)
router.delete('/delete/:id', deleteRoom)

module.exports = router
