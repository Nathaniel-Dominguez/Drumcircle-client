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
      <div className="">
        <div className="row">
          <div className="col-sm-12">

            <form className="form" onSubmit={(event) => { this.props.handleSubmit(event,this.state)}} method="POST" action="http://localhost:3000/posts/new">
              
              <div className="form-group">
                <label>
                  Content: </label>
                  <textarea className="form-control" name="content" rows="3" placeholder="Add your post here" value={this.state.content} onChange={this.handleContentChange} />

                <label>
                  Picture: </label>
                  <input className="form-control" name="image" type="URL" placeholder="picture URL?" value={this.state.image} onChange={this.handleImageChange} />
               
              </div>

              <input hidden id="userId" name="userId" value={this.props.user ? this.props.user.id : null} />

              <div className="form-group">
                <button value="submit" type="Submit" className="btn btn-success">Make new post </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}


export default PostNew;