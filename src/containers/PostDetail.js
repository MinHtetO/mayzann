import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Nav from '../components/Nav';


class PostDetail extends React.Component{
    constructor(props){
     super(props);  
     this.state = {};
     
     
    }
    render(){
        //console.log(this.props.match.params.id);
     return (
         <React.Fragment>
         <Nav/>
         <div className="container">
        <div className="post-detail">
  
            <div className="post-detail__gp">
            <center><img src={ require('../img/profile.png') }  className="post-user__image float-left"/></center>
            <div className="post-detail__user-name">MinHtetOo</div>
            <div className="post-detail__date">21 May 2018</div>
            </div>
            <div className="post-detail__title">Why we need to have enough sleep?</div>
            <div className="post-detail__body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</div>
        <div className="post-detail__comment">
        Comment Section ...
        </div>
        </div>

        </div>
        </React.Fragment>
        );
    }
    }
    
// export default connect(null,null)(PostDetail);
export default PostDetail;
