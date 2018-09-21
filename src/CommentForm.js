import React, { Component } from 'react';

class CommentForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }
  handleChange = (event) => { 
    this.setState({content: event.target.value})
  }
  
  render(props) {
    var name ='';
    var id='';
    if(this.props.user != null){
    return (
      <form className="form-inline" onSubmit={(e) => {
        this.setState({ content: '' });
        this.props.handleSubmit(e)}
      } method="POST" action="http://localhost:3000/comments/new">
      <div className="form-group"> 
        <div className="row col-8">
        <input class="form-control" type="text" name="content" placeholder="Comment" value={this.state.content} onChange={this.handleChange}/>
        <input hidden type="text" name="userId" value={this.props.user.id}/>
        <input hidden type="text" name="user_name" value={this.props.user.name}/>
        <input hidden type="text" name="postId" value={this.props.postId}/>
        <div className="form-group">
        <input class="form-control" className="btn btn-primary" type="submit"/>
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
