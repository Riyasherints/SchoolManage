import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StudentLogin =()=>{
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:8080/student/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
      
        if (response.ok) {
            const studentDetails = await response.json();
            navigate('/studenthome', { state: { studentDetails } });
        } else {
            console.error('Authentication failed');
            setErrorMessage('Authentication failed. Please check your username and password.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage('An error occurred during login. Please try again.');
    }
};
    return(
        <div>
            <div className="heading">
             <h1 align="center">Login Page</h1>
            </div>
        <div className="loginform">
        <br/>
           <input type="email" placeholder="EMAIL" className="input" value={email}
            onChange={handleEmailChange}/>
           <br/><br />
           <input type="password" placeholder="PASSWORD" className="input"   value={password}
            onChange={handlePasswordChange}/>
           <br/><br />
           <button className="btn2" onClick={handleLogin}>Login</button>
        </div>
        </div>
    );
}

export default StudentLogin;