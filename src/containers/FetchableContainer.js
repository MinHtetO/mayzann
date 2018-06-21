import React, {Component} from 'react';
import axios from 'axios';
import LoadingView from './fetchableViews/loadingView';
import ErrorView from './fetchableViews/errorView';
import NoDataView from './fetchableViews/noDataView';
import NoConnectionView from './fetchableViews/noConnectionView';

//redux imports
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';


const fetchableContainer = (json) => (BaseComponent) =>{
    
    let LoadingFetchView = json.LoadingView || LoadingView;
    let fetchUrl = json.url || "https://jsonplaceholder.typicode.com/posts/";
    let ErrorFetchView = json.ErrorView || ErrorView;
    let NoConnectionFetchView = json.NoConnectionView || NoConnectionView;
    let NoDataFetchView = json.NoDataView || NoDataView;
    
class FetchableContainer extends React.Component{

        constructor(props){

            console.log("inside constructure");
            console.log(LoadingView);

        super(props);  
        this.state = {
        fetchData: null,
        loading: false,
        fetchError: null,
        interntConnection: navigator.onLine?true:false,
        };

     
        
    }

    componentDidMount(){
        this.setState({loading: true});
        axios.get(fetchUrl,{
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
            return <NoConnectionFetchView/>; 
        }

        if(this.state.loading){
            return <LoadingFetchView/>;
        }

        if(this.state.fetchError){
            return <ErrorFetchView/>;
        }

        return (
        <BaseComponent {...this.props}{...this.state}/>
        );
    }
}
return FetchableContainer;
}

export default fetchableContainer;