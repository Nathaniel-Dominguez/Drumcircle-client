import React, { Component } from 'react';
import Group from './Group'
import './Post.css';



class Post extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: '',
        groupId: this.props.groupId,
        image: this.props.image,
        content: this.props.content,
        time: this.props.time

      }
    }
  
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-6 callout secondary post-div">
              <h4>Post</h4>

              <form className="post" name={this.props.groupId}>
                <input name="Image" type="URL" placeholder="picture URL?" value={this.props.image} />
                <textarea name="Content" placeholder="Add your post here" value={this.props.content} />
                <button id="submit" type="submit" className="button comment-button action-button expand-right">Add comments</button>
              </form>

            </div>
          </div>
        </div>
      )
    }
};



export default Post;
