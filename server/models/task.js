const mongoose = require('mongoose')
const moment = require('moment')

const taskSchema = mongoose.Schema({
    title: String,
    desc: String,
    status:String,
    image:String,
    links:String,
    startDate:String,
    endDate:String,
    duration:String,
    tags:String,
    createdAt: {
        type: Date,
        default: moment().format('YYYY-MMM-DD hh:mm:ss')
    },
    updatedAt: {
        type: Date,
        default: moment().format('YYYY-MMM-DD hh:mm:ss')
    }
})

const Task = mongoose.model('task',taskSchema)

module.exports = Task