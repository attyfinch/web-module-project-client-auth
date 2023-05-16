import React, { useState } from "react";




const defaultCred = {username: "", password: ""};

function Login() {

    const [cred, setCred ] = useState(defaultCred)

    const onChange = e => {
        setCred({...cred, [e.target.name]: e.target.value})
    }
    
    const submit = (e) => {
        e.preventDefault();
        console.log(cred)
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