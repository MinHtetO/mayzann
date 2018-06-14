import React, {Component} from 'react';


export default function(props){

   

    return (
        <div className="post" onClick={props.goPostDetail}>
     <div className={"post-user__container "+props.color.user}>
        
        <center><img src={ require('../img/profile.png') } className="post-user__image"/></center>
       <center><div className="post-user__name">Min Htet Oo</div></center>
       
        </div>
        <div className={"post-title__container "+props.color.title}>
        <div className="post-title">Why we need to have enough sleep??</div>
        </div>
        </div>
);
}