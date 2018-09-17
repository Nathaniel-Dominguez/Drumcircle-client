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
							<div class="form-group">
							    <label for="exampleFormControlSelect1">Example select</label>
							    <select class="form-control" id="exampleFormControlSelect1">
							      <option>1</option>
							      <option>2</option>
							      <option>3</option>
							      <option>4</option>
							      <option>5</option>
							    </select>
						  </div>
						</form>
					</div>
				</div>
			</div>
			)
	}
}

export default GroupNew;