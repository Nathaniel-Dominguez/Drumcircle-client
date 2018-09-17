import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  handleLogout = (e) => {
    console.log('logging out...');
    e.preventDefault();
    localStorage.removeItem('mernToken');
    this.props.updateUser();
  }

  render() {
    let links = '';
    if(this.props.user){
      links = (
          <span>
            <a onClick={this.handleLogout}>Logout</a>
            <Link to="/profile">Profile</Link>
          </span>
        );
    }
    else {
      links = (
          <span>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </span>
        );
    }
    return(
        <div>
          <nav className="nav navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
          <a href="../" class="navbar-brand">
            <img src="/img/drum_logo.png" className="navbar-logo" />
            <strong>DrumCircle</strong>
          </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand" href="/">Drumcircle</a>
              {links}
            </div>
          </nav>
          <br/>
        </div>
      );
  }
}

export default Nav;
