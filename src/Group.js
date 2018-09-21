import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import PostNew from './PostNew';
import ProfileCard from './ProfileCard';
import SERVER_URL from './constants/server';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user:''
    };
  }
  componentDidMount() {
    axios.get(SERVER_URL + `/posts/${this.props.match.params.id}`)
      .then((response) => {
        var posts = response.data;
        this.setState({posts: posts});
      });
  }
  handleSubmit = (event,childState) => {
    event.preventDefault();
    childState.userId = event.target.userId.value;
    axios.post(SERVER_URL + '/posts/new',childState)
      .then((response) => {
        response.data.userId = this.props.user;
        this.setState({posts: this.state.posts.concat(response.data)});
      });
  }

  handlePostDelete = (e, postId, index) => {
    e.preventDefault();
    axios.delete(SERVER_URL + `/posts/${postId}`)
    .then((res) => {
      var newPosts = this.state.posts;
      newPosts.splice(index,1);
      this.setState({
        posts: newPosts
      });
    });
  }
      
  
	render() {
		return(

			<div className="container">
				<div className="row">
					<div className="col-2">
            <ProfileCard user={this.props.user} groupId={this.props.match.params.id}/>
					</div>
					<div className="col-10">
            <PostNew handleSubmit={this.handleSubmit} groupId={this.props.match.params.id} user={this.props.user}/>
            {this.state.posts.map((post, index) => 
              <Post user={this.props.user} key={index} index={index} content={post} handlePostDelete={this.handlePostDelete}/>
            )}
					</div>
				</div>
			</div>
			)
	}
}



export default Group;
