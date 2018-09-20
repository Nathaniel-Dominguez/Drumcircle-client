import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post(SERVER_URL + '/auth/login', this.state)
    .then(result => {
      // Add the newly received token to LS
      localStorage.setItem('mernToken', result.data.token);
      // Update the user with a call to App.js
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR', err.response.data);
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
                <h3>Login as an existing user</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <input name="Email" placeholder="Email?" value={this.state.email} onChange={this.handleEmailChange} />
                  </div>
               
                  <div className="form-group">
                     <input name="Password" type="password" placeholder="Password?" value={this.state.password} onChange={this.handlePasswordChange} />
                  </div>
               
                  <input type="submit" value="Log Me In!" className="btn btn-outline-light btn-block" />
              </form>
            </div>
          </div>
        </div>
      );
  }
}

export default Login;
