import React, { Component } from 'react';
import axios from 'axios';

class GroupNew extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			names: [],
			ids: [],
			allusers: []
		}
	}


	handleChange = (e) => { 
		this.setState({value: e.target.value})
	}

	handleSubmit = (e) => {
		alert('A new group was created: ' + this.state.value)
		e.preventDefault()
		console.log(this.state)
		axios.post('/groupnew', this.state)
		.then(result => {
			console.log('successful group', result)
			this.props.updateGroup()
		})
		.catch(err => {
			console.log('Error', err)
		})
	}

	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label>
								Group Name:
									<input name="name" type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
								</label>
							</div>
							<div className="form-group">
							    <label for="userId">Select Group Members:</label>
							    <select className="form-control" id="userId">
							      <option>List of Member Names</option>
							    </select>
						  	</div>
						  	<div className="form-group">
								<button value="submit" type="Submit" className="btn btn-success">Create new Group:</button>
						  	</div>
						</form>
					</div>
				</div>
			</div>
			)
	}
}

export default GroupNew;
