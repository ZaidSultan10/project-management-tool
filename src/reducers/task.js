import {CREATE_TASK} from '../actions/types.js'

let initialValue = {
    todos: [],
    message:'',
    updatedTodo: []
}

const task = (state = initialValue, action) => {
    switch(action.type){
        case CREATE_TASK:
            return 1
        default:
            return state
    }
}

export default task