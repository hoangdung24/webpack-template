import { FETCH_POSTS, LOADING_POSTS, LOADED_POSTS, RESET_POSTS } from "../actions/actionTypes"

const initState = {
    data: {},
    isLoading: false,
    nextOffset: 0,
    count: 0
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case LOADED_POSTS:
            return {
                ...state,
                isLoading: false
            }
        case LOADING_POSTS:
            return {
                ...state,
                isLoading: true
            }
        case RESET_POSTS:
            return initState
        case FETCH_POSTS:
            return {
                data: {...state.data,...action.payload.data},
                isLoading: false,
                nextOffset: action.payload.nextOffset,
                count: action.payload.count
            }
        default:
            return state;
    }
}

export default postReducer;