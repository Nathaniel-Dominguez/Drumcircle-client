import React, { Component } from 'react';

class GroupNew extends Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form>
							<div className="form-group">
								<label htmlFor="groupNname">Group Name:</label>
								<input type="text" className="form-control"/>
							</div>
							<div className="form-group">
							    <label htmlFor="users">Example select</label>
							    <select className="form-control" id="users">
							      <option>1</option>
							      <option>2</option>
							      <option>3</option>
							      <option>4</option>
							      <option>5</option>
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