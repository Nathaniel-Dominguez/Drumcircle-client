import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange = (e) => { this.setState({ name: e.target.value }); }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleImageChange = (e) => { this.setState({ image: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post(SERVER_URL + '/auth/signup', this.state)
    .then(result => {
      console.log('SUCCESS!', result);
      // Add the newly received token to LS
      localStorage.setItem('mernToken', result.data.token);
      // Update the user with a call to App.js
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR', err);
    });
  }

  render() {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
        <div>
        <div className="card bg-primary text-center card-form">
          <div className="card-body">
            <h3>Signup as a new user Today</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input name="Name" placeholder="What is your name?" value={this.state.name} onChange={this.handleNameChange} />
              </div>
              <div className="form-group">
                <input name="Email" placeholder="What is your email?" value={this.state.email} onChange={this.handleEmailChange} />
              </div>
              <div className="form-group">
                <input name="Password" type="password" placeholder="Password?" value={this.state.password} onChange={this.handlePasswordChange} />
              </div>
              <div className="form-group">
                <input name="Image" type="URL" placeholder="Profile picture URL?" value={this.state.image} onChange={this.handleImageChange} />
              </div>
              <input type="submit" value="Sign Me Up!" className="btn btn-outline-light btn-block" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
