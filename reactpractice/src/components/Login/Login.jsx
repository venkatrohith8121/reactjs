import React, { useState } from 'react'

const Login = () => {
    let [users,setUsers]=useState({email:"", password:""})
    let UpdateEmail=(event)=>{
        setUsers({...users,email:event.target.value})
    }
    let UpdatePassword=(event)=>{
        setUsers({...users, password:event.target.value})
    }
    let SubmitHandler=(event)=>{
        alert(JSON.stringify(users))
    }
  return (
    <div>
        <br /><br />
        <pre>{JSON.stringify(users)}</pre>
        <form onSubmit={SubmitHandler}>
            <label htmlFor="">EMAIL ID :</label>
            <input type="text" onChange={UpdateEmail}/>
            <br /> <br />
            <label htmlFor="">PASSWORD :</label>
            <input type="text" onChange={UpdatePassword}/>
            <br /><br />
            <input type="submit" value="login" />
        </form>
    </div>
  )
}

export default Login