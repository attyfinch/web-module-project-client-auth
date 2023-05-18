import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";


const defaultCred = {username: "", password: ""};

function Login() {

    const navigate = useNavigate();

    const [cred, setCred ] = useState(defaultCred)

    const onChange = e => {
        setCred({...cred, [e.target.name]: e.target.value})
    }
    
    const submit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:9000/api/login`, cred)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                navigate('/friends')
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
        <h1>LOGIN</h1>
        <div className="form-container">
            <form className="login-form" onSubmit={submit}>
            <div className="login-field">
                <label>Username
                    <input
                        type="text"
                        name="username"
                        value={cred.username}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className="login-field">
                <label>Password
                    <input className="input"
                        type="password"
                        name="password"
                        value={cred.password}
                        onChange={onChange}
                    />
                </label>
            </div>
            
            <div className="submit">
                <button className="submit-button" onClick={submit}>Submit</button>
            </div>
            </form>
        </div>
        
        </>
    )

    
};

export default Login;