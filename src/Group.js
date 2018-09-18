import React, { Component } from 'react';
import axios from 'axios';

class Group extends Component {
  componentDidMount() {
    axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`)
      .then((response) => {
        var posts = response.data;
        console.log(posts);
      });
  }

	render() {
		return(

			<div className="container">
				<div className="row">
					<div className="col-2">
            {this.props.match.params.id}
						<p>Sum stuff</p>
					</div>
					<div className="col-10">
						<p>sum Moar Stuff</p>
					</div>
				</div>
			</div>
			)
	}
}



export default Group;
