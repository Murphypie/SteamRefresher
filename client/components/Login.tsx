import React, {useState} from "react";
import { useNavigate } from 'react-router';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUserToDatabase = () => {
        fetch('/user/register', {
            method: 'POST',
            headers: {
              'Content-type': 'Application/JSON',
            },
            body: JSON.stringify([email, password]),
          });
    }
    return(
        <div>
            <h1>This is where the Login page is going to be. </h1>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input value={password} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
    )
};

export default Login;

