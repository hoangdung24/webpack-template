import { CHANGE_MODE } from "../actions/actionTypes";

if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode", 'light');
}

const selectedMode = localStorage.getItem("mode") === "light" ? "light" : "dark";

const initialState = {
  mode: selectedMode
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      localStorage.setItem("mode", action.selectedMode);
      return {
        mode: action.selectedMode
      };
    default:
      return state;
  }
};

export default modeReducer;
