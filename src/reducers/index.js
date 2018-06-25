import { combineReducers } from "redux";
import post_reducer from "./reducer_posts";


const rootReducer = combineReducers({
  posts: post_reducer
});


export default rootReducer;