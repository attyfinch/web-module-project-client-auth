import React, { useState, useEffect } from "react";
import axios from 'axios';

import { axiosAuth } from "../Utilities/axiosAuth";

const defaultFriends = [];

function Friends() {

const [friends, setFriends] = useState(defaultFriends)

useEffect(() => {
    getFriends();
}, []);

const getFriends = () => {
    axiosAuth()
    .get(`http://localhost:9000/api/friends`)
    .then((res) => {
        setFriends(res.data)
})};

    return (

        <div>
            <h1>FRIENDS LIST</h1>    
            <div>
            {
                friends.map((ele, idx) => (
                    <li key={idx}>{friends[idx].name} - {friends[idx].email}</li>
                ))
            }
            </div>
            
        </div>
    )

};

export default Friends;
