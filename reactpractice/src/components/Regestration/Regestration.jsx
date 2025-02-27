import React, { Component } from 'react'
class Regestration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: "",
      uemail: "",
      umob: ""
    }
  }
  nameHandler = (event) => {
  this.setState({ uname:event.target.value})
}
emailHandler = (event) => {
  this.setState({ uemail:event.target.value})
}
mobileHandler = (event) =>{
  this.setState({ umob:event.target.value})
}

render() {
  return (
    
    <div className='container'>
      <h3>Regestration component</h3>
      <pre>{JSON.stringify(this.state)}</pre>
      <form>
        <div>
          <label>User Name:</label>
          <input type="text" onChange={this.nameHandler} />
        </div>
        <div>
          <label>Email Id:::::::</label>
          <input type="email" onChange={this.emailHandler} />
        </div>
        <div>
          <label>Mobile No:</label>
          <input type="tel" onChange={this.mobileHandler} />
          
        </div>
        <input type="submit" value="Regestration" />
      </form>
    </div >
  )
}
}

export default Regestration 
