import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GroupCard from './GroupCard';
import axios from 'axios';
import GroupList from './GroupList';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }
  }

  render() {
    if(this.props.user){
      return (
       <div className="container" id="main-body">
          <div className="row">
            <div className="col-sm">
              <img className="img-thumbnail" src={this.props.user.image} alt="" />
              <h2>Hello again, {this.props.user.name}!</h2>
              <h4>Your email is {this.props.user.email}</h4>
            </div>
            <div className="col-sm">
              {this.props.user != null ?  <GroupList user={this.props.user}/> : <div></div>}
            </div>
            <div className="col-sm make-new btn">
              <Link className="btn btn-success" to="/group/new">Make a new Group</Link>
            </div>
          </div>
         </div>


        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <Link to="/login">Log In</Link> or <Link to="/signup">Sign up</Link>?</p>
      </div>
      );
  }
}

export default Profile;
