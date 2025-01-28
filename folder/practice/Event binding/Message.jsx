import React, { useState } from 'react'


const Message = () => {
    let [message, setMessage] = useState("hello")
    let updateHandler = (value) => {
        setMessage(value)

    }
    return <div><h2>Message Component</h2>
        <h3>Messgae value :{message}</h3>
        <button onClick={updateHandler.bind(null, "Good Morning")}>GM</button>
        <button onClick={updateHandler.bind(this, "Good Afternoon")}>GA</button>
        <button onClick={updateHandler.bind(this, "Good Evening")}>GE</button>
        <button onClick={updateHandler.bind(this, "Good Night")}>GN</button></div>

}

export default Message