import React,{useState} from 'react'

const Message = () => {
  
  let [counter,setCounter]=useState(1)

  let gmHandler=()=>{
    setCounter(counter+1)
  }
  return (
    <div>
      <h1>counter_value :{counter}</h1>
      <button onClick={gmHandler}>incr</button>
      <button onClick={()=>{setCounter(counter-1)}}>decr</button>

    </div>
  )
}

export default Message