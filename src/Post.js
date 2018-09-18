import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      feed: ''
    }
  }
  componentDidMount(){
    var comments = axios.get(`http://localhost:3000/comments/${this.props.content._id}`)
      .then((response) => {
        var commentFeed = response.data.map((comment) => <Comment content={comment} />);
        this.setState({ feed: commentFeed});
      });
  }
  render(props){
    console.log('post',this.props.content._id);
    var author;
    if(this.props.content.userId != null){
      author = this.props.content.userId.name;
    }else {
      author = 'Anonymous';
    }
    return(
      <div>
        <h3>{this.props.content.content}</h3>
        <p>By: {author}</p>
        {this.state.feed}
      </div>
    );
  }
}

export default Post;

