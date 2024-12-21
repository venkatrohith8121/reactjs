import React, { useState } from 'react'

const Registration = () => {
  let [user,setUser]  = useState({uName:"",email:"",mobile:""})
  let updateHandler =(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
  }
  let submitHandler = (event)=>{
    event.preventDefault()
    console.log(user)
  }
  return <React.Fragment> <br /><br /><br />
          <pre>{JSON.stringify(user)}</pre>
         <form onSubmit={submitHandler}>
          User Name: <input type="text" placeholder='User Name' onChange={updateHandler} name="uName"/> <br /><br />
          Email Id::::::::<input type="email" placeholder='Email Id' onChange={updateHandler} name="email" /> <br /><br />
          Mobile No:::<input type="number" placeholder='Mobile' onChange={updateHandler} name="mobile" /> <br /><br />
          <input type="submit" value="Registration" />
         </form>
         </React.Fragment>
}

export default Registration