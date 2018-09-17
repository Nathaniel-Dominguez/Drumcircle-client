import React, { Component } from 'react';

class GroupNew extends Component {
	constructor(props) {
		super(props)
		this.state = {value: ''}
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		alert('A new group was created: ' + this.state.value)
		event.preventDefault()
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
							    <label htmlFor="users">Select Group Members:</label>
							    <select className="form-control" id="users">
							      <option>List of Member Names</option>
							    </select>
						  	</div>
						  	<div className="form-group">
								<button value="submit" type="submit" className="btn btn-success">Create new Group:</button>
						  	</div>
						</form>
					</div>
				</div>
			</div>
			)
	}
}

export default GroupNew;