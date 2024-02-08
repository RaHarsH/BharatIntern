const express = require('express')
const { addTransaction, getAllTransaction } = require('../controllers/TransactionControl')

//router object

const router = express.Router()

//routes
// add transaction POST method
router.post('/add-transaction', addTransaction);


// get transactions 
router.post('/get-transaction', getAllTransaction);



module.exports = router
