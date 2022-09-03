const express = require('express')
const moment = require('moment')
const { createTask, getAllTasks } = require('../controllers/task')
const router = express.Router()

module.exports = router.post(`/createTask`,createTask)
module.exports = router.get(`/getAllTasks`,getAllTasks)