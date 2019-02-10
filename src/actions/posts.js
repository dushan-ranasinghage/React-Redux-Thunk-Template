import axios from 'axios'

import {GET_POSTS} from './EndPoints'

export function getPostData(){
    return (dispatch) => {
        axios.get(GET_POSTS).then(res => {
          dispatch({ type: 'GET_POST_TYPE', payload: res.data })
        }).catch(err=>alert(err))
      }
} 