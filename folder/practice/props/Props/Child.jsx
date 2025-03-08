import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <table border={2} style={{borderCollapse:'collapse'}}>
            <tr>
                <td>name is:{this.props.employee1.name}</td>
            </tr>
            <tr>
                <td>name is:{this.props.employee1.age}</td>
            </tr>
            <tr>
                <td>name is:{this.props.employee1.email}</td>
            </tr>
            <tr>
                <td>name is:{JSON.stringify(this.props.message1)}</td>
            </tr>
            <tr>
                <td>name is:{this.props.message1.user}</td>
            </tr>
            <tr>
                <td>name is:{this.props.mail}</td>
            </tr>
        </table>
      </div>
    )
  }
}

export default Child