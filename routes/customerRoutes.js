const router = require('express').Router()
const {getCustomers, getCustomer, makeCustomer, updateCustomer, deleteCustomer} = require('./../views/customerViews')
const {transfer} = require('./../utils/keys')

router.get('/', getCustomers)
router.get('/:id', getCustomer)
router.post('/make', transfer, makeCustomer)
router.put('/edit/:id', transfer, updateCustomer)
router.delete('/delete/:id', deleteCustomer)

module.exports = router
