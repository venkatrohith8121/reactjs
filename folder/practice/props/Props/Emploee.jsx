import React, { Component } from 'react'

class Emploee extends Component {
  render() {
    return (
      <div>Emploee component
        <pre>{JSON.stringify(this.props)}</pre>
        <h5>
            employee_id: {this.props.userid}
        </h5>
      </div>
    )
  }
}

export default Emploee