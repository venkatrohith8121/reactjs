import React, { useState } from 'react'
import Userlist from './Userlist';
const User = () => {


    const [users, setUsers] = useState(Userlist)

    return (
        <div>
            <h1>User component</h1>
            <pre>{JSON.stringify(users)}</pre>
            <table border={1} style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return <tr key={user.id}> 
                                <td>{user.id}</td>                 
                                <td>{user.name}</td>                 
                                <td>{user.email}</td>                 
                                <td>{user.company.name}</td>                 
                                 </tr>
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default User