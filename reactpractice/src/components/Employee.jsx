import React, { Component } from 'react'

class Employee extends Component {
  render() {
    return (
      <div>
        <h4>Employee</h4>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

export default Employee