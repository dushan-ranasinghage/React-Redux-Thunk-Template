export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_POST_TYPE':
            return { ...state, PostList: action.payload };
        default:
            return state;
    }
}