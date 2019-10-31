import postsRequest from "../api/postsRequest";

export const addTodo = (todos) => {
    return {
        type: "ADD_TODO",
        payload: todos
    }
};

export const fetchPosts = () => async dispatch => {
    dispatch({ type: 'FETCH_LOADING', payload: "loading" });
    await postsRequest.get()
        .then(function (res) {
            dispatch({ type: 'FETCH_LOADING', payload: "done" });
            dispatch({ type: 'FETCH_POSTS', payload: res.data })
        })
        .catch(function (error) {
            dispatch({type: 'FETCH_ERROR', payload: "error"})
        });
};

export const searchAction = val => async dispatch => {
    dispatch({ type: 'FETCH_LOADING', payload: "loading" });
    await postsRequest.get("?q="+val)
        .then(function (res) {
            dispatch({ type: 'FETCH_LOADING', payload: "done" });
            dispatch({ type: 'SEARCH', payload: res.data })
        })
        .catch(function (error) {
            dispatch({type: 'FETCH_ERROR', payload: "error"})
        });
};
