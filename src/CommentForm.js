import React, { Component } from 'react';

class CommentForm extends Component {
  render(props) {
    var name ='';
    var id='';
    console.log('user', this.props.user);
    return (
      <form onSubmit={this.props.handleSubmit} method="POST" action="http://localhost:3000/comments/new">
        <input type="text" name="content" placeholder="Comment"/>
        <input hidden type="text" name="userId" value={id}/>
        <input hidden type="text" name="user_name" value={name}/>
        <input hidden type="text" name="postId" value={this.props.postId}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default CommentForm;
