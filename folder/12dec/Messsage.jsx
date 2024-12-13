import React, { useState } from 'react'

const Messsage = () => {

    let [msg,setMsg]=useState("Hello")
    let gmHandler=()=>{
        setMsg("Good Morning")
    }
    let gnHandler=()=>{
        setMsg("Good Afternoon")
    }
  return (
    <div>
        <h3> Messsage </h3>
        <h4> value:{msg}</h4>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GA</button>
    </div>
  )
}

export default Messsage