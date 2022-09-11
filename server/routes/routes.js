const express = require('express')
const { createTask, getAllTasks, deleteTask, toBeUpdatedContent,updatedTask } = require('../controllers/task')
const router = express.Router()

module.exports = router.post(`/createTask`,createTask)
module.exports = router.get(`/getAllTasks`,getAllTasks)
module.exports = router.post(`/deleteTask`,deleteTask)
module.exports = router.post(`/toBeUpdated`,toBeUpdatedContent)
module.exports = router.post(`/updateTask/:id`,updatedTask)