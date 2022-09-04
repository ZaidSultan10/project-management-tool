const express = require('express')
const moment = require('moment')
const { createTask, getAllTasks, deleteTask } = require('../controllers/task')
const router = express.Router()

module.exports = router.post(`/createTask`,createTask)
module.exports = router.get(`/getAllTasks`,getAllTasks)
module.exports = router.post(`/deleteTask`,deleteTask)