import React, { Component } from 'react'

class Employee_clss extends Component {
  render() {
    return (
      <div>
        <h4>Employee</h4>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee_id={this.props.Employee_id}</h3>
        <h3>Employee_details={this.props.Employee_Details.email}</h3>
      </div>
    )
  }
}

export default Employee_clss