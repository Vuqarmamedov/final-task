import { combineReducers } from "redux";

const addTodoReducer = ( todos = [], action ) => {
    if (action.type === "ADD_TODO"){
        return todos.push(action.payload)
    }
    return todos;
};

const postsReducer = (posts = [], action) => {
    if (action.type === "FETCH_POSTS") {
        return action.payload
    }

    if (action.type === "SEARCH"){
        return action.payload
    }

    return posts
};

const statusReducer = (status = null, action) => {

    if (action.type === "FETCH_LOADING") {
        return action.payload
    }

    if (action.type === "FETCH_ERROR") {
        return action.payload
    }

    return status
};

export default combineReducers({
    todos: addTodoReducer,
    status: statusReducer,
    posts: postsReducer
})