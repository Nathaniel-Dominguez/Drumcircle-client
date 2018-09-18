import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    if(this.props.user){
      return (
       <div className="container">
          <div className="row">
            <div className="col-sm">
              <img className="img-thumbnail" src="http://www.facetheforce.today/random/400?r=1" alt={this.props.user.name} />
              <h2>Hello again, {this.props.user.name}!</h2>
              <h4>Your email is {this.props.user.email}</h4>
            </div>
            <div className="col-sm">
              <div className="card">
                <div className="card-body">
                  <Link className="card-text" to="/group">Your Groups</Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <Link className="btn btn-success" to="/groupnew">Make a new Group</Link>
            </div>
          </div> 
         </div>     
        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Profile;