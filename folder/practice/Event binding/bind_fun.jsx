import React, { useState } from 'react'

const Message = () => {

  let [msg,setMsg]=useState("Hello")

  let updateHandler=(value)=>{
    setMsg(value)
  }
  return (
    <div>
      <h1>Message:{msg}</h1>
      <button onClick={updateHandler.bind(null,"Good Morning")}>GM</button>
      <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
      <button onClick={updateHandler.bind(null,"Good Evening")}>GE</button>
      <button onClick={updateHandler.bind(null,"Good Night")}>GN</button>
      <button onClick={updateHandler.bind(null,"Good Bye😘")}>GB</button>
    </div>
  )
}

export default Message