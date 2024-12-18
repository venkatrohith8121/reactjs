import Axios from "axios"
import { useState } from "react"
let Users = ()=>{
  let [users,setUsers]=useState([])
  
  let getDataHandler = ()=>{
      Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp)=>{
        setUsers(resp.data)
        console.log(resp)
        console.log(resp.data)
        console.log(resp.status)
      })
      .catch()
  }
    
  return    <div>
                <h1>User Component</h1>
                <pre>{JSON.stringify(users)}</pre>
                <button onClick={getDataHandler}>Click</button>
            </div>
}
export default Users