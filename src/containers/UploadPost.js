import React from 'react';
import ReactDOM from 'react-dom';
import {} from '../action/index';
import { connect } from 'react-redux';

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
        alert('An essay was submitted: ' + this.state.title);
        
        
    }
    render(){
        return(
            <React.Fragment>
                <div>
        
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.handleChangeTitle}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.handleChangeContent}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
            </React.Fragment>
        );
    }
}

export default connect(null)(UploadPost);