import React, { Component } from 'react'
import Employee from './Employee_fun'
class User extends React.Component {
    user_id = 101
    user_name = "rahul"
    user_detail = {
        loc: "wayanad",
        email: "rahul@gmail.com"
    }
    render() {
        return (
            <div>
                <h4>User</h4>
                <hr />
                <Employee Employee_id={this.user_id} Employee_Name={this.user_name} Employee_Details={this.user_detail} />
            </div>

        )
    }
}

export default User