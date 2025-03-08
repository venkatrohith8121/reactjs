import React, { Component } from 'react'
import Child from './Child';
class Parent extends Component {


    mail="mail delivered"
    message ={
        message :"Good Morning",
        user:"Narshima"
    }
    constructor(){
        super();
        this.state={
            employee:{
                empcode:"119",
                name:"test employee",
                age:"25",
                email:"abc@abc.com",
                location:"hderabad"
            }
            
        }
    }
    render() {
        return (
            <div>
                <Child employee1={this.state.employee} message1={this.message} mail={this.mail}/>
            </div>
        )
    }
}

export default Parent