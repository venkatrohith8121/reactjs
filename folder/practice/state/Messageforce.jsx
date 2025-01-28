import React, { Component } from 'react'

class Messageforce extends Component {
    msg="hello"
    gmHandler=()=>{
        this.msg="good morning"
        this.forceUpdate()
    }
    gnHandler=()=>{
        this.msg="good afternoon"
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h2>Message:{this.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Messageforce