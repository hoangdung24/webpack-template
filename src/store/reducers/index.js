import { combineReducers } from "redux";
import postReducer from "./posts"
import categoryReducer from "./categories"
import authorReducer from "./authors"
import modeReducer from "./mode"

const reducer = combineReducers({postReducer,categoryReducer,authorReducer,modeReducer})
export default reducer;