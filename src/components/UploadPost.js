import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { Modal, Button } from 'antd';
import axios from 'axios';
import {store} from '../App';
import { uploadPost} from '../actions/index';
class UploadPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content : '',
            loading: false,
            visible: false,
        }
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeContent(event){
        this.setState({content: event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        console.log("onSubmit");
        this.setState({
            visible: true,
          });
        
    }
    handleOk = () => {
        // this.setState({ loading: true });
        // setTimeout(() => {
        //   this.setState({ loading: false, visible: false });
        // }, 3000);
        
        axios.post(`https://jsonplaceholder.typicode.com/users`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
      this.setState({visible:false});
      
      const post = {
        title : this.state.title,
        content: this.state.content
        }
        this.props.onUpload(uploadPost(post));
    }
      handleCancel = () => {
        this.setState({ visible: false });
      }
       
    render(){

        const load = this.state.loading;
        const visiblity = this.state.visible;
        return(
        <React.Fragment>
          <div className="upload__container">
            <Nav />
            <div className="upload__card">

            <form className= "upload__form">
            
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

         <div className="upload__submit-btn" onClick={this.onSubmit}>Submit</div>
         <Modal
          visible={visiblity}
          title="Upload Question"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" loading={load} onClick={this.handleOk}>
              Upload
            </Button>,
          ]}
        >
          <div style={{fontSize: 24}}>{this.state.title}</div>
          <div>{this.state.content}</div>
        </Modal>
        </form>
        </div>
        
        </div>
        
        
      
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = {};

export default UploadPost;