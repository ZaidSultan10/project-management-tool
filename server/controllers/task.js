const mongoose = require('mongoose')
const Task = require('../models/task.js')

const createTask = async (req,res) => {
    console.log('=req====>',req.body)

    return res.json({message:'Task created successfully'})
}

module.exports={
    createTask
}