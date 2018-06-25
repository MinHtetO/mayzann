import React, {Component} from 'react';
import GitHubLogin from 'react-github-login';
import Nav from '../components/Nav';
import fetchableContainer from './FetchableContainer';
import TestComponent from './TestComponent';

class Login extends React.Component{

    constructor(props){
     super(props);  
     this.state = {};
    }
    onSuccess = response => {
        console.log(response);
    }

    onFailure = response => console.error(response);

    render(){
     return (
         <React.Fragment>
         {/* <Nav/> */}
        <div className="login-container">
        <center>
        <div className="login__card">
        <center><div className="login__title">MayZann</div></center>
        <center><div className="login__sologran">Meet People & Discover the world</div></center>
        <GitHubLogin className="github-btn" clientId="d625961b69225e5d76f2"
    redirectUri="" 
    onSuccess={this.onSuccess}
    onFailure={this.onFailure}/>
        </div>
        </center>
        </div> 
      </React.Fragment>
        );
    }

    }
    

export default Login;