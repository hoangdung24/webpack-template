import { FETCH_CATEGORIES } from "./actionTypes"
import axios from "axios"
import _ from "lodash"

export const fetchCategories = () => (dispatch, getState) => {
    axios.get("/api/v1/categories/")
    .then(resp => {
        dispatch({
            type: FETCH_CATEGORIES,
            payload: {
                data: _.groupBy(resp.data,"id") 
            }
        })
    })
}