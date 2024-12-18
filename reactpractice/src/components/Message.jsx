import React, { Component } from 'react'

class Message extends Component {
    msg="hello"
    gmHandler=()=>{
        this.msg="good morning"
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h2>Message:{this.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button>GN</button>
            </div>
        )
    }
}

export default Message