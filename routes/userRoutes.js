const router = require('express').Router()
const {getUsers, getUser, makeUser, updateUser, deleteUser} = require('./../views/userViews')

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/make', makeUser)
router.put('/edit/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
