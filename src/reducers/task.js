import {CREATE_TASK, GET_ALL_TASK, DELETE_TASK} from '../actions/types.js'

let initialValue = {
    tasks: [],
    message:'',
    updatedTask: []
}

const task = (state = initialValue, action) => {
    switch(action.type){
        case CREATE_TASK:
            return {
                ...state,
                message:action.data
            }
        case GET_ALL_TASK:
            return {
                ...state,
                tasks:action.data,
                message:''
            }
        case DELETE_TASK:
            return {
                ...state,
                message:action.data
            }
        default:
            return state
    }
}

export default task