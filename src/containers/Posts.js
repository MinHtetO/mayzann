import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from '../components/Post';

class Posts extends React.Component{
    constructor(props){
     super(props);  
     console.log(this.props);
    }

    render_posts(){
        const posts_render_array =  this.props.posts.map( (post) => (
        <Post post={post} key={post.id}/>))
        return posts_render_array
    }

    

    render(){
        
     return (
    <div className="postsPage">
    <div className="postsContainer">
    {this.render_posts()}
    </div>
        
     </div>    
    );
    }
    }
    
    function mapStateToProps(state) {
        return { posts:state.posts };
    }
      
    export default connect(mapStateToProps)(Posts);
