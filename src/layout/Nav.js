import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../animate.css';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect : false 
    }
  }
  handleLogout = (e) => {
    console.log('logging out...');
    e.preventDefault();
    localStorage.removeItem('mernToken');
    this.props.updateUser();
    this.setState({redirect: true});
  }

  render() {
    let links = '';
    if(this.props.user){
      links = (
          <span>
            <Link to="/" onClick={this.handleLogout}>Logout</Link>
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
    if(this.state.redirect){
      this.setState({ redirect: false });
      return (<Redirect to="/" />);
    }
    return(
        <div>

          <nav className="nav navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
          <div className="animated zoomIn delay-1s">
          <Link to="/" className="navbar-brand">
            <img src="/img/drum_logo.png" className="navbar-logo" alt=""/>
             <strong>DrumCircle</strong> 
          </Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>

            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
              {links}
              </ul>
            </div>
          </nav>
          <br/>
        </div>
      );
  }
}

export default Nav;
