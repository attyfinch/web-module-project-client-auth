import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosAuth } from "../Utilities/axiosAuth";

const defaultNewFriend = {name: "", email: ""};

function Add() {

    const navigate = useNavigate();

    const [newFriend, setNewFriend ] = useState(defaultNewFriend)

    const onChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }
    
    const submit = (e) => {
        e.preventDefault();
        console.log(newFriend)

        // axios
        //     .post(`http://localhost:9000/api/login`, cred)
        //     .then((res) => {
        //         localStorage.setItem("token", res.data.token);
        //         navigate('/friends')
        //     })
        //     .catch((err) => console.log(err));

        axiosAuth()
            .post(`http://localhost:9000/api/friends`, newFriend)
            .then((res) => {
                console.log(res)
        })

        navigate("/friends")
    }

    return (
        <>
        <h1>ADD FRIEND</h1>
        <div className="form-container">
            <form className="login-form" onSubmit={submit}>
            <div className="login-field">
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={newFriend.name}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className="login-field">
                <label>Email
                    <input className="input"
                        type="email"
                        name="email"
                        value={newFriend.email}
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
export default Add;