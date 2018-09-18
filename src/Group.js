import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: ''
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`)
      .then((response) => {
        var posts = response.data;
        console.log('posts',posts);
        var feedNew = posts.map((post) => 
          <Post content={post}/>
        );
        this.setState({feed: feedNew});
      });
  }

	render() {
		return(

			<div className="container">
				<div className="row">
					<div className="col-2">
            {this.state.feed}
					</div>
					<div className="col-10">
					</div>
				</div>
			</div>
			)
	}
}



export default Group;
