// import {GET_ALL_TODOS,CREATE_TODO,DELETE_TODO,UPDATE_STATUS,UPDATE_TODO} from '../actions/types.js'

let initialValue = {
    todos: [],
    message:'',
    updatedTodo: []
}

const task = (state = initialValue, action) => {
    switch(action.type){
        case "Apple":
            return 1
        default:
            return state
    }
}

export default task