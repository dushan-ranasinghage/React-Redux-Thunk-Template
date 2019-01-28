import { postsTypes as types } from '../actions'
import { handleActions } from 'redux-actions'

// Global State
const initialState = {

    pending: false,

    userList: [],

    loading: {
        userLoading: false,
        postLoading: false,
    },
}

// Reducers from redux-actions
export default handleActions({
    [types.GET_POSTS_DATA_SUCCESS]: (state, { payload }) => {
        console.log("User Payload",payload);
        return (
            {   ...state,
                postsData: payload,
                postsSuccess:true, 
                loading: { ...state.loading, userLoading: true },
                pending: true, //This is how setState inside reducers
                status: 'Successfully Got the Response!' //This how to send a msg or err message
            }
        )
    },

    [types.GET_POSTS_DATA_FAILED]: (state, { payload }) => {
        return (
            {   ...state,
                err: payload
            }
        )
    },
//Using initialState here that can be set to the props global state(not logical)
}, initialState)
