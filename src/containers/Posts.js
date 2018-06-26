import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from '../components/Post';
import { Link } from 'react-router-dom'; 
import Nav from '../components/Nav';
import posts from '../data/posts';

class Posts extends React.Component{

    constructor(props){
        super(props);  
        this.goPostDetail = this.goPostDetail.bind(this);
        console.log(this.props);
        console.log(this.props.match.params);
    }

    generateColor(){

            let color1 = {
                user: 'color-med-purple',
                title: 'color-dark-gray'
            }
    
            let color2 = {
                user: 'color-rosy-brown',
                title: 'color-steel-blue'
            }
    
            let state = true;
    
            let returnColor = color1;
    
            function changeColor(){
    
                state = !state;
                
               returnColor = state?color1:color2;
    
                return returnColor
            }
         return changeColor;
    }

    goPostDetail(){
        console.log("GGWTF");
    }

    renderPosts(){

        const posts_render_array =  posts.map( (post) => (
        <Post goPostDetail={this.goPostDetail
        } post={post} key={post.id} />
       ))

    return posts_render_array
    }

    render(){
    return (
    <React.Fragment>
    <Nav />
    <div className="postsPage">
    <div className="postsContainer">
    {this.renderPosts()}
    </div>
        
    </div> 
    </React.Fragment>   
    );
    }
}

export default Posts;