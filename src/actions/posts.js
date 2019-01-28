import { createAction } from 'redux-actions'

const action_header = 'users/'

// Types
export const GET_POSTS_DATA = action_header + "GET_POSTS_DATA"
export const GET_POSTS_DATA_SUCCESS = action_header + "GET_POSTS_DATA_SUCCESS"
export const GET_POSTS_DATA_FAILED = action_header + "GET_POSTS_DATA_FAILED"

export const SET_LOADING = action_header + "SET_LOADING"

export default {
    setLoading: createAction(SET_LOADING),
    
    getPostsData: createAction(GET_POSTS_DATA),
    getPostsSuccess: createAction(GET_POSTS_DATA_SUCCESS),
    getPostsFailed: createAction(GET_POSTS_DATA_FAILED),
}