import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';
import CommentForm from './CommentForm';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      userId: ''
    }
  }
  componentDidMount(){
    console.log('COMMENT CONTENT',this.props.content);
    var comments = axios.get(`http://localhost:3000/comments/${this.props.content._id}`)
      .then((response) => {
          this.setState({ comments: response.data});
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      userId : e.target.userId.value,
      postId : e.target.postId.value,
      content : e.target.content.value
    };
    var newData = {
      userId : this.props.user,
      postId : e.target.postId.value,
      content : e.target.content.value
    };
    axios.post('http://localhost:3000/comments/new',data)
      .then((response) => {
        console.log(response.data);
      });
      this.setState({comments: this.state.comments.concat(newData)}); 
  }

  handleCommentDelete = (e, commentId, index) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/comments/${commentId}`)
    .then((res) => {
      console.log("index", index);
      var newComments = this.state.comments;
      newComments.splice(index,1);
      this.setState({
        comments: newComments
      });
    });
  }



  render(props){
    var author;
    if(this.props.content.userId != null){
      author = this.props.content.userId.name;
    }else {
      author = 'Anonymous';
    }
    console.log('POST USER', this.props.user);
    return(
      <div>
        <h3>{this.props.content.content}</h3>
        <div className="row">
          <div className="col-md-6">
            <p>By: {author}</p>
          </div>
          <div className="col-md-6">
            <button className="btn btn-warning" type="button"> Edit </button>
            <button className="btn btn-danger"type="button" onClick={(e) => this.props.handlePostDelete(e,this.props.content._id, this.props.index)}> Delete </button>
          </div>
        </div>
        {this.state.comments.map((comment, index) => <Comment content={comment} key={index} index={index} handleDelete={this.handleCommentDelete}/>)}
        <CommentForm handleSubmit={this.handleSubmit} postId={this.props.content._id} user={this.props.user}/>
        <hr />
      </div>
    );
  }
}

export default Post;
