import { CREATE_TASK, GET_ALL_TASK, DELETE_TASK, TO_BE_UPDATED,CLEAR_FORM, UPDATE_TASK } from "./types";
import axios from 'axios'


export const createTask = (tasks) => async(dispatch) => {
    try{
        const {data} = await axios.post('http://localhost:5000/task/createtask',tasks)
        console.log('data ===>',data)
        dispatch({type:CREATE_TASK,data:data})
    }catch(err){
        console.log('err ===>',err)
    }
}

export const getAllTasks = async(dispatch) => {
    try{
        const {data} = await axios.get('http://localhost:5000/task/getAllTasks')
        dispatch({type:GET_ALL_TASK,data:data})
    }catch(err){
        console.log('err ===>',err)
    }
}

export const deleteTask = (task) => async(dispatch) => {
    try{
        const {data} = await axios.post('http://localhost:5000/task/deleteTask',{id:task})
        dispatch({type:DELETE_TASK,data:data})
    }catch(err){
        console.log('err ===>',err)
    }
}

export const toBeUpdated = (task) => async(dispatch) => {
    try{
        const {data} = await axios.post('http://localhost:5000/task/toBeUpdated',{id:task})
        dispatch({type:TO_BE_UPDATED,data:data})
    }catch(err){
        console.log('err ===>',err)
    }
}

export const clearForm = async(dispatch) =>{
    try{
        dispatch({type:CLEAR_FORM,data:[]})
    }catch(err){
        console.log('err =>',err)
    }
}

export const updateTask = (task) => async(dispatch) => {
    try{
        const {data} = await axios.post(`http://localhost:5000/task/updateTask/${task.id}`,task)
        dispatch({type:UPDATE_TASK,data:data.message})
    }catch(err){
        console.log('err ===>',err)
    }
}
