import React, {Component} from 'react';


export default function(props){
    return (
        <div className="post" >
        <div className="post__title">Post TitleGG</div>
       <img src={ require('../img/profile.png') } className="post__user-image"/>
       <div className="post__user-name">GGGWP</div>
        </div>
    );
}