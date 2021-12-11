const router = require('express').Router()
const {getManagers, getManager, makeManager, updateManager, deleteManager} = require('./../views/roomManagerViews')
const {transfer} = require('./../utils/keys')

router.get('/', getManagers)
router.get('/:id', getManager)
router.post('/make', transfer, makeManager)
router.put('/edit/:id', transfer, updateManager)
router.delete('/delete/:id', deleteManager)

module.exports = router
