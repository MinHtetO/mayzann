import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Nav from '../components/Nav'

class UploadPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content : ''
        }
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeContent(event){
        this.setState({content: event.target.value});
    }
    onSubmit(event){
        // event.preventDefault();
        alert('An essay was submitted: ' + this.state.title);
        
        
    }
    render(){
        return(
            <React.Fragment>
                

            <div className="upload__container">
            <Nav />
       <div className="upload__card">

        <form onSubmit={this.onSubmit} className= "upload__form">
            
            <div className="upload__label">Title</div>
            <input 
            className="upload__input upload__input-title"
              type="text"
              placeholder="Your Question Title"
              onChange={this.handleChangeTitle}
              value={this.state.title}
            />

              <div className="upload__label">Description</div>

           <textarea className="upload__input upload__input-description"
              onChange={this.handleChangeContent}
              value={this.state.body}
              placeholder="Your Question Content"
            />

         <div class="upload__submit-btn">Submit</div>
        </form>
        </div>
        
        </div>
        </React.Fragment>
        );
    }
}

export default connect(null)(UploadPost);