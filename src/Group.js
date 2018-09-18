import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user:''
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`)
      .then((response) => {
        var posts = response.data;
        this.setState({posts: posts});
        var feedNew = posts.map((post, index) => 
          <Post user={this.props.user} key={index} content={post}/>
        );
        this.setState({feed: feedNew});
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
            {this.state.posts.map((post, index) => 
          <Post user={this.props.user} key={index} content={post}/>
              )}

					</div>
					<div className="col-10">
					</div>
				</div>
			</div>
			)
	}
}



export default Group;
