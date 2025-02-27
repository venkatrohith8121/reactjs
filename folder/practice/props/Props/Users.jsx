import React, { Component } from 'react'
import Emploee from './Emploee'
 class Users extends Component {

    user_id=101
    user_name="rahul"
    user_details={
        loc:"wayanad",
        email:"rahul@gmail.com"
    }

  render() {
    return (
      <div>
        Users component
        <hr />
        <Emploee userid={this.user_id}/>
      </div>
    )
  }
}

export default Users