import React, {Component} from 'react';
import axios from 'axios';
import loadingView from './loadingView.js';
import errorView from './errorView.js';
import noDataView from './noDataView.js';
import noConnectionView from './noConnectionView.js';

//redux imports
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';


const fetchableContainer = (json) => (BaseComponent) =>

    class FetchableContainer extends React.Component{

        constructor(props){
        super(props);  
        this.state = {
        fetchData: null,
        loading: false,
        fetchError: null,
        interntConnection: navigator.onLine?true:false,
        };

        this.url = json.url || "";
        this.loadingView = json.loadingView || loadingView;
        this.errorView = json.errorView || errorView;
        this.noConnectionView = json.noConnectionView || noConnectionView;
        this.noDataView = json.noDataView || noDataView;

    }

    componentDidMount(){
        this.setState({loading: true});
        axios.get(this.url,{
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }

        }).then((response)=>{
            this.setState({fetchData: response.data});
            this.setState({loading: false});
        }).catch((error)=>{
            console.log("Erorr happen");
            console.log(error);
            this.setState({fetchError: error});
        });
    }

    render(){

        if(!this.state.interntConnection){
            return <this.noConnectionView/>; 
        }

        if(this.state.loading){
            return <this.loadingView/>;
        }

        if(this.state.fetchError){
            return <this.errorView/>;
        }

        return (
        <BaseComponent {...this.props}{...this.state}/>
        );
    }
}

export default fetchableContainer;