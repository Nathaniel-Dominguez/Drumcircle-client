import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import PostNew from './PostNew';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user:''
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`)
      .then((response) => {
        var posts = response.data;
        this.setState({posts: posts});
      });
  }
  componentDidUpdate(){
    console.log('Updated state',this.props.user);
  }
	render() {
    console.log('user',this.props.user);
		return(

			<div className="container">
				<div className="row">
					<div className="col-2">
					</div>
					<div className="col-10">
            <PostNew groupId={this.props.match.params.id} user={this.props.user}/>
            {this.state.posts.map((post, index) => 
              <Post user={this.props.user} key={index} content={post}/>
            )}
					</div>
				</div>
			</div>
			)
	}
}



export default Group;
