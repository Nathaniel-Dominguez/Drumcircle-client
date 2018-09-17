import React, { Component } from 'react';

class GroupNew extends Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form>
							<div className="form-group">
								<label htmlFor="groupName">Group Name:</label>
								<input type="text" className="form-control"/>
							</div>
							<div className="form-group">
							    <label htmlFor="users">Select Group Members:</label>
							    <select className="form-control" id="users">
							      <option>List of Member Names</option>
							    </select>
						  	</div>
						  	<div className="form-group">
								<button type="submit" className="btn btn-success">Create new Group:</button>
						  	</div>
						</form>
					</div>
				</div>
			</div>
			)
	}
}

export default GroupNew;