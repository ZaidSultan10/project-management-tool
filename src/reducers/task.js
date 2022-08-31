import {CREATE_TASK} from '../actions/types.js'

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
                tasks:action.data
            }
        default:
            return state
    }
}

export default task