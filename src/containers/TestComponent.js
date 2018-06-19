import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';


class TestComponent extends React.Component{
    constructor(props){
     super(props);  
     this.state = {};
    }
    render(){
     return (
        <div>
            <h1>GG</h1>
        </div>
        );
    }
    }
    
export default TestComponent;