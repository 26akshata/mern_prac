const express = require('express')
const { createEmployee, getEmployee, salaryEmployee, updateEmployee } = require('../controllers/employeeController')
const router = express.Router()


router.post('/create-employee',createEmployee)
router.get('/get-employee',getEmployee)
router.get('/salary-employee/:a',salaryEmployee)
router.put('/update-employee/:id',updateEmployee)
module.exports = router