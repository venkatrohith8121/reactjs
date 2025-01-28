import React from 'react'
import './Message.css'
const Message = () => {
let msg="GM"
let tag_styles={color:'blue', background:'green'}
  return (
    <div>
        <h1 style={{color:'red', background:'yellow'}}>Message</h1>
        <h1 style={tag_styles}>Message</h1>
        <h4 className='msgStyles'>{msg}</h4>
    </div>
  )
}

export default Message