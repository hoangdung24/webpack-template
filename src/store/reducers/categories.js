import { FETCH_CATEGORIES } from "../actions/actionTypes"

const initState = {
    data: {},
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                data: action.payload.data
            }
        default:
            return state;
    }
}

export default categoryReducer;