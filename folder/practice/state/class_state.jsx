import React, { Component } from 'react'
class Message extends Component {

    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({
            msg:"Good Morning"
        })
    }
    gnHandler=()=>{
        this.setState({
            msg:"Good Afternoon"
        })
    }
  render() {
    return (
      <div>
        <h1>Message: {this.state.msg}</h1>
        <button onClick={this.gmHandler}>gm</button>
        <button onClick={this.gnHandler}>gn</button>
      </div>
    )
  }
}

export default Message