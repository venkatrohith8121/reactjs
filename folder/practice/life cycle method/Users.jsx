import Axios  from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    let [users, setUsers] = useState([])

    useEffect(()=>{
         Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((resp)=>{setUsers(resp.data)})
         .catch()
    })
    return (
        <div className="conatiner mt-4">
            <div className="row">
                <div className="col-md-6">
                    <pre>{JSON.stringify(users)}</pre>
                    <table className='table'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>CITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ?
                                    <>
                                        {
                                            users.map((user) => {
                                                return <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            })
                                        }
                                    </>
                                    : <><h3 style={{ color: "red" }}>NO DATA</h3></>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users