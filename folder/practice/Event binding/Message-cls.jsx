import React, { Component } from 'react'

export class Message-cls extends Component {
    state;  
    constructor(props){
        super(props)
        this.state={
             message:"hello"
        }
    }

    updateHandler=(value)=>{
        this.setState({
            message:value
             
        })

    }
    render() {
        return <div>
            <h2>Message COmponent</h2>
            <h3>Messgae value :{this.state.message}</h3>
            <button onClick={this.updateHandler.bind(this,"Good morning")}>GM</button>
            <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>
            <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
        </div>

    }
}

export default Message-cls
