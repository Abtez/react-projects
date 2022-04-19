import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from './Loader';


function Api() {

    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const url = 'https://h-care-tracker.herokuapp.com/api/users/';

    useEffect(() =>{
        axios.get(url).then((response) =>{
            setUsers(response.data.results)
            console.log(response.data);
            setLoading(false)
        })
    }, [url]);

    return (
        <>
        {isLoading ? <Loader /> : 
        <div>
        <br />
        <h1>Hello Group 1</h1>
        <p>Results have arrived</p>
        {users.map(user => (
            <div>
            <h3 key={user.username}>Username : {user.username}</h3>
            <p key={user.email}>Email {user.email? user.email: "user_email@g.com"}</p>
            <p key={user.first_name}>First_name: {user.first_name? user.first_name: "First_name"}</p>
            <p key={user.last_name}>Last_name: {user.last_name? user.last_name: "Last_name"}</p>
            <p key={user.date_joined}>Date_joined: {user.date_joined? user.date_joined: "date_joined"}</p>
            <button key={user.url} type="button"><a href={user.url} target="_blank" rel='noreferrer'>Click to view User</a></button>
            </div>
        ))}
        </div>
        }
        </>
    )
}

export default Api;