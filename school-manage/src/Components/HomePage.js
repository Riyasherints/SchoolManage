import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

function Homepage(){

    const history=useNavigate();

    const handleLogin=()=>{
        history('/login');
    }

    const handleClick=()=>{
        alert("choose an option");
    }

    const handleStudent=()=>{
        history('/studentlogin');
    }
    return(
        <div>
        <div className="nav">
        <h2>Welcome</h2>
        <div className="nav2">
            <a className="btn" onClick={handleLogin} >Teacher Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="btn" onClick={handleStudent} >Student Login</a>
        </div>
        </div>
        <button className="btn1" onClick={handleClick}>LETS START</button>
        </div>
    );
}

export default Homepage;