import React from 'react';
import {connect} from 'react-redux';
import UploadPostFrom from '../components/UploadPost';
import {uploadPost} from '../actions/index';

const mapDispatchToProps=(dispatch)=>{
    return{
        onUpload: post => (
            dispatch(uploadPost(post))
        )
    }
}

export default connect(null,mapDispatchToProps)(UploadPostFrom);
