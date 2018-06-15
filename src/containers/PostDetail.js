import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class PostDetail extends React.Component{
    constructor(props){
     super(props);  
     this.state = {};
    }
    render(){
     return (
        <div> 
           {console.log(this.props.match.params.id)}
        </div>
        );
    }
    }

// const PostDetail = (props) => {
//     return (
//       <div>
//         {/* <AddTodo />
//         <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
//         <Footer /> */}
//         {/* Detail {params.id} */}
//         {
//             console.log(props.params)
//         }
//       </div>
//     )
//   }
    
// export default connect(null,null)(PostDetail);
export default PostDetail