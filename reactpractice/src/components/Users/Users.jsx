import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.getUserdata()
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
            <div className="conatiner mt-4">
                <div className="row">
                    {/* <pre>{JSON.stringify(this.state.users)}</pre> */}

                    <div className="col-md-6">
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
                                    this.state.users.length > 0 ?
                                        <>
                                            {
                                                this.state.users.map((user) => {
                                                    return <tr>
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
}

export default Users