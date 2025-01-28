import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "hello"
    }
    gmHnadler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gnHnadler = () => {
        this.setState({ msg: "Good Afternoon" })
    }

    render() {
        console.log("render method")
        return <div>
            <h1>Message component</h1>
            <h4>message value :{this.state.msg}</h4>
            <button onClick={this.gmHnadler}>GM</button>
            <button onClick={this.gnHnadler}>GN</button>
        </div>

    }
}

export default Message