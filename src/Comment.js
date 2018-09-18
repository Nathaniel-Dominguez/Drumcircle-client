import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
  render(props){
    return (
      <div>
        <p>{this.props.content.content} -<em>{this.props.content.userId.name}</em></p>
      </div>
    )
  }
}

export default Comment;
