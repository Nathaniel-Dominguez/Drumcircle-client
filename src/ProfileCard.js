import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SERVER_URL from './constants/server';
import axios from 'axios';

class ProfileCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }

  componentDidMount(){
    axios.get(SERVER_URL + `/groups/one/${this.props.groupId}`)
      .then((response) => {
        console.log('RESPONSE', response.data[0].userId);
        this.setState({ users: response.data[0].userId});
      });
  }

  render(){
      if(this.props.user != null){
      return (
        <div className="profile-card">
          <div>
            <Link to="/profile"><img className="rounded-circle" src={this.props.user.image}/></Link>
            <h3>{this.props.user.name}</h3>
          </div>
          <div>
            {this.state.users.map((user) => {
              return (
                <div>
                  <img className="rounded-circle" src={user.image}/>
                  <h3>{user.name}</h3>
                </div>
              )})
            }
          </div>
      </div>
      )
      }
      return( <div></div>)
  }
}

export default ProfileCard;
