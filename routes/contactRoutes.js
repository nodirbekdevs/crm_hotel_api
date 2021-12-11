const router = require('express').Router()
const {getContact, getContacts, makeContact, updateContact} = require('./../views/contactViews')

router.get('/', getContacts)
router.get('/:id', getContact)
router.post('/make', makeContact)
router.put('/edit/:id', updateContact)

module.exports = router
