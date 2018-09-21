import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Footer from './layout/Footer';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Group from './Group';
import GroupNew from './GroupNew';
import Profile from './Profile';
import PostNew from './PostNew';
import Signup from './auth/Signup';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    this.getUser();
  }

  getUser = () => {
    var token = localStorage.getItem('mernToken');
    if(token){
      // There is a token in localStorage. Try to validate it!
      axios.post(SERVER_URL + '/auth/me/from/token', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      localStorage.removeItem('mernToken');
      this.setState({
        user: null
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container" id="main-body">
            <Nav user={this.state.user} updateUser={this.getUser} />
            <Route exact path="/" component={
              () => (<Home user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />
            <Route exact path="/group/new" component={
              () => (<GroupNew user={this.state.user} />)
            } />
            <Route exact path="/group/:id" render={(props) =><Group {...props} user={this.state.user}/>} />
            <Route path="/postnew" component={
              () => (<PostNew user={this.state.user} />)
            } />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
