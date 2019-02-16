export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, PostList: action.payload };
        default:
            return state;
    }
}