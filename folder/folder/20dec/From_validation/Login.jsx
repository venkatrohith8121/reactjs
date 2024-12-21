import React, { useState } from 'react';

const Login = () => {
    let [User, setUser] = useState({ uname: "", uPassword: "", umobile: "" });

    let updateHandler = (event) => {
        setUser({ ...User, [event.target.name]: event.target.value });
    };

    let submitHandler = (event) => {
        event.preventDefault();
        console.log(User);
    };

    return (
        <div>
            <pre>{JSON.stringify(User)}</pre>
            <form onSubmit={submitHandler}>
                <label htmlFor="uname">User Name</label>
                <input type="text" id="uname" onChange={updateHandler} name="uname" />
                <hr />
                <label htmlFor="uPassword">Password</label>
                <input type="password" id="uPassword" onChange={updateHandler} name="uPassword" />
                <hr />
                <label htmlFor="umobile">Mobile</label>
                <input type="tel" id="umobile" onChange={updateHandler} name="umobile" />
                <hr />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
