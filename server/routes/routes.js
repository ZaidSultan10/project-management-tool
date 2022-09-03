const express = require('express')
const moment = require('moment')
const { createTask } = require('../controllers/task')
const router = express.Router()

module.exports = router.post(`/createTask`,createTask)