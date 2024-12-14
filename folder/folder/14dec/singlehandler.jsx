import React from "react";
class singlehandler extends React.Component{
    state={
        msg:"Hello"
    }
    updateHandler = (msgValue)=>{
        this.setState({msg:msgValue})
    }
    
    render(){
      
        return <div>
                    <h3>Message Component</h3>
                    <h2>Message Value:{this.state.msg}</h2>
                    <button onClick={this.updateHandler.bind(this,"Good morning")}>GM</button>
                    <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>
                    <button onClick={this.updateHandler.bind(this,"Good Evening")}>GE</button>
                    <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
               </div>
    }

}
export default singlehandler;