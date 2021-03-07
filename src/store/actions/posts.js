import { FETCH_POSTS, LOADING_POSTS, LOADED_POSTS, RESET_POSTS } from "./actionTypes";
import axios from "axios";
import _ from "lodash"

export const fetchPosts = () => (dispatch, getState) => {
  dispatch({ type: LOADING_POSTS });
 const { nextOffset } = getState().postReducer;
  
  if (nextOffset !== -1)
    axios
      .get(`/api/v2/posts/?limit=20&offset=${nextOffset}`)
      .then((resp) => {
        dispatch({
          type: FETCH_POSTS,
          payload: {
            data: _.groupBy(resp.data.items,"slug"),
            nextOffset:
              nextOffset + resp.data.items.length === resp.data.meta.total_count
                ? -1
                : nextOffset + resp.data.items.length,
            count: resp.data.meta.total_count,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOADED_POSTS });
      });
  else dispatch({ type: LOADED_POSTS });
};

export const resetPosts = () => (dispatch, getState) => {
  dispatch({ type: RESET_POSTS });
}
