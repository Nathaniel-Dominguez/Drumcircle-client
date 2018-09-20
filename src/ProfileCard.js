import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProfileCard extends Component {

  render(){
      if(this.props.user != null){
      return (
        <div className="profile-card">
          <Link to="/profile"><img className="img-thumbnail" src={this.props.user.image}/></Link>
          <h3>{this.props.user.name}</h3>
        </div>
      )
      }
      return( <div></div>)
  }
}

export default ProfileCard;
