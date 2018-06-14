import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default function(props){

   

    return (
        <Link to={`/posts/${props.post.id}`}>
        <div className="post" onClick={props.goPostDetail}>
     <div className={"post-user__container"}>
        
        <center><img src={ require('../img/profile.png') } className="post-user__image"/></center>
       <center><div className="post-user__name">Min Htet Oo</div></center>
       
        </div>
        <div className={"post-title__container"}>
    <div className="post-title">Why we need to have enough sleep??</div>
        </div>
        </div>
        </Link>
);
}