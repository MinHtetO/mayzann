import React, {Component} from 'react';


class Login extends React.Component{
    constructor(props){
     super(props);  
     this.state = {};
    }
    render(){
     return (
        <div className="login-container">
        <center>
        <div className="login__card">
        <center><div className="login__title">MayZann</div></center>
        <center><div className="login__sologran">Meet People & Discover the world</div></center>
       <center> <button className="login-btn">
        Login with github
        </button></center>
        </div>
        </center>
        </div>
        );
    }
    }
    

export default Login;