import { combineReducers } from "redux";
import home from "./home";
import compare from "./compare";

const rootReducer = combineReducers({
    home,
    compare
})
export default rootReducer