import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
  render(props){
    return (
      <div class="row">
        <div className="col-md-6">
          <p>{this.props.content.content} -<em>{this.props.content.userId.name}</em></p>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary btn-sm" type="button"> Edit </button>
          <button className="btn btn-secondary btn-danger btn-sm" type="button" onClick={(e) => this.props.handleDelete(e,this.props.content._id, this.props.index)}> Delete </button>
        </div>
      </div>
    )
  }
}

export default Comment;
