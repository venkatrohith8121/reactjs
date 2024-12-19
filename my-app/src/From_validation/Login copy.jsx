import React, { useState } from 'react'

const Login = () => {
    let [User,setUser]=useState({uname:"",uPassword:""})
    let nameHandler=(event)=>{
        setUser({...User,uname:event.target.value})
    }
    let PasswordHandler=(event)=>{
        setUser({...User,uPassword:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(User)
    }
  return (
    <div>
        <pre>{JSON.stringify(User)}
        </pre>
        <form onSubmit={submitHandler}>
            <label htmlFor="">User Name</label>
            <input type="text" onChange={nameHandler} />
            <label htmlFor="">Password</label>
            <input type="password" onChange={PasswordHandler}/>
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login