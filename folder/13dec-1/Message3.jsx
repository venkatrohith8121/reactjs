import react from 'react'
import React, { useState } from 'react'

class Message3 extends react.Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gnHandler = () => {
        this.setState({ msg: "Good Afternoon" })
    }
    render() {
        return <div>
            <h3> Message </h3>
            <h4> value:{this.state.msg}</h4>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GA</button>

        </div>
    }
}

export default Message3