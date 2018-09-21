import React, { Component } from 'react';

class CommentForm extends Component {
  render(props) {
    var name ='';
    var id='';
    console.log('user', this.props.user);
    if(this.props.user != null){
    return (
      <form className="form-inline" onSubmit={this.props.handleSubmit} method="POST" action="http://localhost:3000/comments/new">
      <div className="form-group"> 
        <div className="row col-8">
        <input class="form-control"type="text" name="content" placeholder="Comment"/>
        <input hidden type="text" name="userId" value={this.props.user.id}/>
        <input hidden type="text" name="user_name" value={this.props.user.name}/>
        <input hidden type="text" name="postId" value={this.props.postId}/>
        <div className="form-group">
        <input class="form-control"className="btn btn-primary" type="submit"/>
        </div>
        </div>
        </div>
      </form>
    )
    } else {
      return(<div></div>);
    }
  }
}

export default CommentForm;
