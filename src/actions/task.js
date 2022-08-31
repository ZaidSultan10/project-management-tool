import { CREATE_TASK } from "./types";
import axios from 'axios'


export const createTask = (task) = async(dispatch) => {
    try{
        const {data} = await axios.post('localhost:5012/createtask',task)
        dispatch({type:CREATE_TASK,data:data})
    }catch(err){
        console.log('err ===>',err.message)
    }
}