import { combineReducers } from "redux";
import post_reducer from "./reducer_posts";

const rootReducer = combineReducers({
  posts: post_reducer
});


function gg(){
    return   {
        id: '123',
        tite: 'Post2',
        content: 'post 2 content',
        user:'Sandi' 
       };
}
export default rootReducer;