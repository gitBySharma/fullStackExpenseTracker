const express = require('express');
const controller = require("../controller/expense");

const router = express.Router();

//route handling post request
router.post('/', controller.postAddExpense);

//route handling get request
router.get('/', controller.getAddExpense);

//route handing delete request
router.delete('/:id', controller.deleteExpense);

//route handling edit request
router.put('/:id', controller.editExpense);


module.exports = router;

