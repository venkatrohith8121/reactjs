import React, { Component } from 'react'
import Axios from 'axios'
class User-Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    getUserdata = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp.data)
                this.setState({ users: resp.data })
            })
            .catch()
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.users)}</pre>
                <h2>User component</h2>
                <button onClick={this.getUserdata}>get user data</button>
                <hr />
                <table border={2}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.length > 0 ? <>
                                {
                                    this.state.users.map((user) => {
                                        return <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </> : <div> <h3>NO DATA</h3></div>
                        }
                    </tbody>
                </table>
            </div>)
    }
}

export default User-Button