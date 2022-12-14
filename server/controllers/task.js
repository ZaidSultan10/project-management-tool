const mongoose = require('mongoose')
const Task = require('../models/task.js')
const moment = require('moment')

const createTask = async (req,res) => {
    try{
        let duration = moment.duration(moment(req.body.endDate).diff(moment(req.body.startDate)));
        await Task.create({
            title:req.body.title,
            desc:req.body.desc,
            status:req.body.status,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            duration:duration.asDays(),
            links:req.body.links ? req.body.links : '',
            tags:req.body.tags ? req.body.tags : ''
        })
        return res.json({message:'Task created successfully'})
    }catch(err){
        console.log('err ==>',err)
    }
}

const getAllTasks = async (req,res) => {
    try{
        const allTasks = await Task.find()
        return res.json(allTasks)
    }catch(err){
        console.log('err ==>',err)
    }
}

const deleteTask = async (req,res) => {
    try{
        await Task.remove({"_id":mongoose.Types.ObjectId(`${req.body.id}`)})
        return res.json({message:'Task successfully deleted'})
    }catch(err){
        console.log('err ==>',err)
    }
}

const toBeUpdatedContent = async (req,res) => {
    try{
        const selectedTask = await Task.find({"_id":mongoose.Types.ObjectId(`${req.body.id}`)})
        return res.json(selectedTask)
    }catch(err){
        console.log('err ==>',err)
    }
}

const updatedTask = async (req,res) => {
    try{
        await Task.findOneAndUpdate({_id:mongoose.Types.ObjectId(`${req.body.id}`)},{
            title:req.body.title,
            desc:req.body.desc,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            status:req.body.status,
            tags:req.body.tags,
            links:req.body.links
        },{raw:true})
        return res.json({message:'Task Updated Successfully'})
    }catch(err){
        console.log('err ==>',err)
    }
}

module.exports={
    createTask,
    getAllTasks,
    deleteTask,
    toBeUpdatedContent,
    updatedTask
}