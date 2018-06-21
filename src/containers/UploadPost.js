import React from 'react';
import ReactDOM from 'react-dom';
import {} from '../action/index';
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
                <Nav />
               <div className="upload-container">
       
        <div className="upload__card">
        <form onSubmit={this.onSubmit} class= "upload__form">
          <div className="upload__form-label">
           
             <label > Title</label>
            <input 
            className="upload__form-textInputField"
              type="text"
              name="title"
              placeholder="Your Question Title"
              onChange={this.handleChangeTitle}
              value={this.state.title}
            />
            
            
          </div>
          
          {/* <div>
            <label>Body: </label>
            </div> */}
            
            <div className="upload__form-label">
            <center>
            <label > Contt</label>
                <textarea className="upload__form-textInputArea"
              name="body"
              onChange={this.handleChangeContent}
              value={this.state.body}
              placeholder="Your Question Content"
            />
           </center>
            </div>
          
          <br />
         <center> <button class="upload__form-btn" type="submit">Submit</button></center>
        </form>
        </div>
        
        </div>
        
        
      
            </React.Fragment>
        );
    }
}

export default connect(null)(UploadPost);