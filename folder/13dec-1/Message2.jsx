import React, { useState } from 'react'

const Message2 = () => {

  let [msg, setMsg] = useState("Hello")
  // let gmHandler = () => {
  //   setMsg("Good Morning")
  // }
  // let gnHandler = () => {
  //   setMsg("Good Afternoon")
  // }
  return (
    <div>
      <h3> Message </h3>
      <h4> value:{msg}</h4>
      <button onClick={()=>{setMsg("Good Morning")}}>GM</button>
      <button onClick={()=>{setMsg("Good Afternoon")}}>GA</button>
    </div>
  )
}

export default Message2