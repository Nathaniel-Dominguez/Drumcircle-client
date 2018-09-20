import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class GroupNew extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			names: [],
			ids: [],
			allusers: [],
      selectValue:''
		}
	}


	handleChange = (e) => { 
		this.setState({name: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
    axios.post('http://localhost:3000/groups/new',{
      userId: this.state.ids,
      name: this.state.name
    }).then((response) => {
      var url = `/group/${response.data._id}`;
        <Redirect to={url} />
    });
  }
  handleSelectChange = (event) => {
    this.setState({selectValue: event.target.value});
  }

  handleButton = () => {
    var name;
    for(var i = 0; i < this.state.allusers.length; i++){
      if(this.state.allusers[i].id == this.state.selectValue){
        name = this.state.allusers[i].name;
      }   
    }
    console.log(this.state.selectValue,name);
    this.setState({ names: this.state.names.concat(name), 
      ids: this.state.ids.concat(this.state.selectValue),
      });
  }

  componentDidMount(){
    axios.get('http://localhost:3000/users')
      .then((response) => {
        console.log('response',response);
        this.setState({allusers: response.data});
      });
  }
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form onSubmit={this.handleSubmit} method="POST" action="http://localhost:3000/groups/new">
							<div className="form-group">
								<label>
								Group Name:
									<input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleChange} />
								</label>
							</div>
							<div className="input-group">
							    <select className="form-control" id="userId" value={this.state.selectValue} onChange={this.handleSelectChange}>
							      <option>List of Member Names</option>
                    {this.state.allusers.map((user) => 
                      <option value={user.id} onClick={this.selectClick}>{user.name}</option>
                    )}
							    </select>
                  <div class="input-group-append">
                    <button className="btn btn-success" type="button" onClick={this.handleButton}>Add</button>
                  </div>
              </div>
						  	<div className="form-group">
						  		<input hidden type="text"/>
            {this.state.names.map((name) => <p>{name}</p>)}
								<button value="submit" type="Submit" className="btn btn-success">Create new Group:</button>
						  	</div>
						</form>
					</div>
				</div>
        <div className="row">
          <div className="col-12">
          </div>
        </div>
			</div>
			)
	}
}

export default GroupNew;
