import React, {Component} from 'react';
import queryString from 'query-string'
import axios from 'axios';
import GitHubLogin from 'react-github-login';
import Nav from '../components/Nav';
import fetchableContainer from './FetchableContainer';
import TestComponent from './TestComponent';
import LoadingView from './fetchableViews/loadingView';
import {browserHistory} from 'react-router';

class Login extends React.Component{

    constructor(props){
    super(props);  
    this.state = {
        loading: false
    };
   }

   componentDidMount(){
    if(this.props.location.pathname.includes("login")){
        this.state.code = queryString.parse(this.props.location.search).code;
        this.loginCallbackHandle();
      }
   }

    loginCallbackHandle(){

        this.setState({loading:true});

        let para = {}

        let body = {
            code:this.state.code
        }

        para.body = body;
        console.log(para);

        axios.post('http://192.168.1.2:4000/api/github_login ',para)
        .then(res => {
            console.log(res);
            this.setState({loading:false});
            this.props.history.push("/posts");

         if(res.body.status == "200"){
            
            this.props.history.push("/posts");
         }
         else{
            console.log("Auth fail")
            this.setState({loading:false});
            
         }

        });
        
    }
    
    githubLogin(){
     window.location.href = "https://github.com/login/oauth/authorize?client_id=d625961b69225e5d76f2";
    }

    render(){
     return (
        <React.Fragment>
        <div className="login-container">
        <center>
        <div className="login__card">
        {this.state.loading? <LoadingView/> : (
            <React.Fragment>
                  <center><div className="login__title">MayZann</div></center>
                  <center><div className="login__sologran">Meet People & Discover the world</div></center>
                  <div className="github-btn" onClick={this.githubLogin}> Github Login </div>
                  </React.Fragment>
        )}
    </div>
       </center>
        </div> 
      </React.Fragment>
        );
    }
}
export default Login;