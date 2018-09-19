import React, { Component } from 'react';
import './Post.css';

class PostNew extends Component {
  constructor(props) {
    super(props)
      this.state = {
        groupId: this.props.groupId,
        time: (new Date()).getTime(),
        content: null,
        image: null,
        userId: null
      }
  }

  handleImageChange = (event) => { 
    this.setState({image: event.target.value})
  }
   handleContentChange = (event) => { 
    this.setState({content: event.target.value})
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={(e) => this.props.handleSubmit(e,this.state)}>
              <div className="form-group">
                <label>
                  Content:
                  <textarea name="content" placeholder="Add your post here" value={this.state.content} onChange={this.handleContentChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Picture:
                  <input name="image" type="URL" placeholder="picture URL?" value={this.state.image} onChange={this.handleImageChange} />
                </label>
              </div>

              <input hidden id="userId" name="userId" value={this.props.user ? this.props.user.id : null} />

              <div className="form-group">
                <button value="submit" type="Submit" className="btn btn-success">Make new post </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default PostNew;
