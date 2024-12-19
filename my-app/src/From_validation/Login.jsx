import React, { useState } from 'react'

const Login = () => {
    let [User,setUser]=useState({uname:"",uPassword:"",umobile:""})

    let updateHandler=(event)=>{
        setUser({...User,[event.target.name]:event.target.value})
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
            <input type="text" onChange={updateHandler} name='uname'/>
            <hr />
            <label htmlFor="">Password</label>
            <input type="password" onChange={updateHandler} name='uPassword'/>
            <hr />
            <label htmlFor="">Mobile</label>
            <input type="tel" onChange={updateHandler} name='umobile' />
            <hr />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login