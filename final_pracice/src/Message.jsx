import React,{useState}from 'react'

const Message = () => {
  
    let [msg,setMsg]=useState("hello")

    let gmHandler=()=>{
        setMsg("Good Morning")
    }
    let gnHandler=()=>{
        setMsg("Good Afternoon")
    }
  return (
    <div>
        <h3>Message :{msg}</h3>
        <button onClick={gmHandler}>gm</button>
        <button onClick={gnHandler}>gm</button>
    </div>
  )
}

export default Message