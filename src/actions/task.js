import { CREATE_TASK, GET_ALL_TASK } from "./types";
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