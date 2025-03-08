import React, { Component } from 'react'
class message extends Component {

  state;
  constructor(props) {
    super(props)
    this.state = {
      msg: "hello"
    }
  }
  updateHandler=(value)=>{
    this.setState({
      msg:value
    })
  }

  render() {
    return (
      <div>
        <h1>message:{this.state.msg}</h1>
        <button onClick={this.updateHandler.bind(this,"Good Morning")}>gm</button>
        <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>ga</button>
        <button onClick={this.updateHandler.bind(this,"Good Night")}>gn</button>
      </div>
    )
  }
}

export default message