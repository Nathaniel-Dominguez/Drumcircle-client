import React, { Component } from 'react';


class GroupCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			GroupID: this.props.groupID 
		}
	}

	handleChange = (event) => { 
		this.setState({value: event.target.value})
	}

	render() {
		return(
			<div>
				<div className="card" style="width: 18rem;">
				  <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Post-It.jpg" alt="Card cap" />
				  <div className="card-body">
				    <h5 className="card-title">Group title</h5>
				    <p className="card-text">This sections will have all the information about the group and details or anouncement.</p>
				  </div>
				  <ul className="list-group list-group-flush">
				    <li className="list-group-item">Devin in the group</li>
				    <li className="list-group-item">Nate in the group</li>
				    <li className="list-group-item">Li in the group</li>
				  </ul>
				  <div className="card-body">
				    <a href="#" className="card-link">Edit Link</a>
				    <a href="#" className="card-link">Delete link</a>
				  </div>
				</div>	
			</div>

		)
	}
}

export default GroupCard;