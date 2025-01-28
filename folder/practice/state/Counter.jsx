import React, { Component } from 'react'

class Counter extends Component {
    // counter=1
    state={
        counter:1
    }
    inHandler=()=>{
        this.setState({counter:this.state.counter+1})
    }
    deHandler=()=>{
        this.setState({counter:this.state.counter-1})
    }
    render() {
        return (
            <div>
                <h3>Counter Component</h3>
                <h4> counter value :{this.state.counter}</h4>
                <button onClick={this.inHandler}>INCR</button>
                <button onClick={this.deHandler}>DECR</button>
            </div>

        )
    }
}

export default Counter