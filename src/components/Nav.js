import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';


export default class Nav extends React.Component{
    constructor(props){
     super(props);  
     this.state = {};
    }
    render(){
     return (
        <div>

        <div className="main-nav">
        <Link to="" style={{textDecoration: 'none'}}><div className="main-nav__item">Home</div></Link>
        <Link to="/upload" style={{textDecoration: 'none'}}><div className="main-nav__item">Ask Question</div></Link>
        <Link to="" style={{textDecoration: 'none'}}><div className="main-nav__item">Log Out</div></Link>
        </div>
            </div>
        );
    }
    }
    
