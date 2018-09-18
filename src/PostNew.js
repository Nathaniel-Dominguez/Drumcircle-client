import React, { Component } from 'react';
import Group from './Group'
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

    handleChange = (event) => { 
      this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
      alert('A new group was created: ' + this.state.value)
      event.preventDefault()
      this.setState(image: this.props.image)
    }


    render() {
    return(
      <div className="container module text">
        <div className="row post-user">
          <div className="col-12">
            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label>
                  Picture:
                  <input name="Image" type="URL" placeholder="picture URL?" value={this.props.image} onChange={this.handleChange} />
                </label>
              </div>

                <div className="form-group">
                  <textarea name="Content" placeholder="Add your post here" value={this.props.content} />
                </div>

                <div className="form-group">
                <button value="submit" type="Submit" className="btn btn-success">Make new post </button>
                </div>

            </form>
          </div>
        </div>
      </div>
      )
  }



export default PostNew;
