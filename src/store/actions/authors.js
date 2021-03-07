import { FETCH_AUTHORS } from "./actionTypes"
import axios from "axios"
import _ from "lodash"

export const fetchAuthors = () => (dispatch, getState) => {
    axios.get("/api/v1/authors/")
    .then(resp => {
        dispatch({
            type: FETCH_AUTHORS,
            payload: {
                data: _.groupBy(resp.data,"id") 
            }
        })
    })
}