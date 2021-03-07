import { FETCH_AUTHORS } from "../actions/actionTypes"

const initState = {
    data: {},
}

const authorReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS:
            return {
                data: action.payload.data
            }
        default:
            return state;
    }
}

export default authorReducer;