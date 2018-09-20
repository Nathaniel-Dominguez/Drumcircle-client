import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class GroupList extends Component {

  constructor(){
    super();
    this.state = {
      groups: []
    }
  }
  
  componentDidMount () {
    if(this.props.user != null) {
      axios.get(`http://localhost:3000/groups/${this.props.user.id}`)
        .then((response) => {
          this.setState ({ groups: response.data });
          console.log('groups response',response.data);
        });
    }
  }
  render() {

    return (
      <div>
      {this.state.groups.map((group) => {
        var url = `/group/${group._id}`;
        return (<Link to={url}>{group.name}</Link>);
      })}
      </div>
    )
  }
}

export default GroupList;
