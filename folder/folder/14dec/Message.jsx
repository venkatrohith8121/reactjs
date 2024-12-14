import React, { useState } from "react";
let Message=()=>{
   let [msg,setmsg]=useState("Hello")
   let updateHandler=(msgValue)=>{
    setmsg(msgValue)
   }
   return <div>
    <h3>Message value:{msg}</h3>
    <button onClick={updateHandler.bind(null,"Good Morning")}>GM</button>
    <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
    <button onClick={updateHandler.bind(null,"Good Evening")}>GE</button>
    <button onClick={updateHandler.bind(null,"Good Night")}>GN</button>
   </div>
}
export default Message;