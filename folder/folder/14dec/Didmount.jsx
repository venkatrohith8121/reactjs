import React from "react";
class Didmount extends React.Component{
    constructor(props){
        super(props)
        console.log("first constructor method")
    }
    componentDidMount(){
        console.log("third constructor method ")
    }
    incrHandler(){}
    decrHandler(){}
    render(){
        console.log("second constructor method")
        return <div>
    <h1>Message Component</h1>
    
  </div>

    }
}
export default Didmount 
