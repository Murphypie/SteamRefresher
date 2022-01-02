import React from "react";
import { useNavigate } from 'react-router';

const Splash = (props:any) =>{
    const navigate = useNavigate();

    return(
        <div>
            <h1>Hello Splash</h1>
            <button onClick={()=>navigate('/login')}>Click to login</button>
        </div>
    )
};

export default Splash;

