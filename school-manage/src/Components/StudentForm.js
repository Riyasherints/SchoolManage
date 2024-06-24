import React, { useState } from "react";
import './style.css'

const Studentform =()=>{

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[dob,setDob]=useState('');
    const[address,setAddress]=useState('');
    const [students, setStudents] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const studentData = {
            name,
            email,
            password,
            dob,
            address
        };
        try {
            const response = await fetch(`http://localhost:8080/student/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add student');
            }
            const addedStudent = await response.json();
            setStudents([...students, addedStudent]);
        } catch (error) {
            console.error('Error adding student:', error);
        }
        setName('');
        setEmail('');
        setPassword('');
        setDob('');
        setAddress('');
    };
    

    return(
        <div >
           <u><h1 align="center" className="heading2">Student Form</h1></u> 
          <div className="form-div">
            <form onSubmit={handleSubmit}>
          <table className="tbl1">
            <tbody>
            <tr>
                <td>Username:</td>
                <td><input type="text" className="txtbox2" value={name} onChange={(e) => setName(e.target.value)} /></td>
            </tr>
            &nbsp;
            <tr>
                <td>Password:</td>
                <td><input type="password" className="txtbox2" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
            </tr>
            &nbsp;
            <tr>
                <td>Email:</td>
                <td><input type="email" className="txtbox2" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
            </tr>
            &nbsp;
            <tr>
                <td>DOB</td>
                <td><input type="date" className="txtbox2" value={dob} onChange={(e) => setDob(e.target.value)} /></td>
            </tr>
            &nbsp;
            <tr>
                <td>Place:</td>
                <td><textarea rows={3}  value={address} onChange={(e) => setAddress(e.target.value)} ></textarea></td>
            </tr>
            &nbsp;
            <tr>
            <td></td>
            <td><input type="submit" className="btn4" value="ADD"/></td>
            </tr>
            </tbody>
          </table>
          </form>
          </div>
          </div>

    );
}

export default Studentform;