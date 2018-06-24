import {
    fetch_all_posts,
    fetch_post,
    delete_post,
    edit_post,
    upload_post
} from './action_types';
let post_id = 0;

export const uploadPost = ({ title, content}) => ({
    type: upload_post,
    payload: {
      id: post_id++,
      title,
      content
    }
  });

  export const addState = () => ({
    type: 'ADD_STATE',
    payload: {
      id: 10,
      title : 'blah',
      content: '10th content',
      user : 'sandi lay'
    }
      
  });

  export const fetchDetail = (id) => ({

    type: 'FETCH_DETAIL',
    payload:{
      id
    }

  });