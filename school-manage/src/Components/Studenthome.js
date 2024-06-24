import './style.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StudentHome = () => {
    const location = useLocation();
    const studentDetails = location.state?.studentDetails;

    const navigate=useNavigate();
    const [name, setName] = useState(studentDetails?.name || '');
    const [email, setEmail] = useState(studentDetails?.email || '');
    const [password, setPassword] = useState(studentDetails?.password || '');
    const [address, setAddress] = useState(studentDetails?.address || '');
    const [dob, setDob] = useState(studentDetails?.dob || '');

    useEffect(() => {
        if (studentDetails) {
            setName(studentDetails.name);
            setEmail(studentDetails.email);
            setPassword(studentDetails.password);
            setAddress(studentDetails.address);
            setDob(studentDetails.dob);
        }
    }, [studentDetails]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/student/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: studentDetails.id,
                    name,
                    email,
                    password,
                    address,
                    dob,
                }),
            });

            if (response.ok) {
               alert("updated")
            } else {
                console.error('Update failed');
            }
        } catch (error) {
            console.error('Error during update:', error);
        }
    };

    const handleLogout=()=>{
        navigate('/');
    }

    if (!location.state || !studentDetails) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <u><h2 className='heading3'>Student Details</h2></u>
            <div className='form-div2'> 
                <form onSubmit={handleSubmit}>
                    <table className="tbl1">
                        <tbody>
                        <tr>
                        <td><input type='text' className="txtbox2" value={name}  onChange={(e) => setName(e.target.value)}/></td>
                        </tr>
                        <tr>
                        <td><input type='email' className="txtbox2" value={email} onChange={(e) => setEmail(e.target.value)}/></td>
                        </tr>
                        <tr>
                        <td><input type='password' className="txtbox2" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                        <td><textarea rows={3}  className="txtbox2" value={address} onChange={(e) => setAddress(e.target.value)}></textarea></td>
                        </tr>
                        <tr>
                        <td><input type="date" className="txtbox2" value={dob}  onChange={(e) => setDob(e.target.value)}/></td>
                        </tr>
                        <tr>
          <td><input type="submit" className="btn4" value="Update" /></td>
        </tr>            
                        </tbody>
                    </table>
                </form>
                <input type="submit" className="btn5" value="Logout"  onClick={handleLogout}/>
            </div>
        </div>
    );
};

export default StudentHome;