import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './style.css'

const Teacherhome=()=>{

  const location = useLocation();
  const teacherDetails = location.state?.teacherDetails;
  console.log("Teacher Details in Teacherhome:", teacherDetails);
  const navigate=useNavigate();

  const handleStudent=()=>{
     navigate('/students');
  }

  const handleStudentForm=()=>{
    navigate('/studentform');
  }

  const handleHome =()=>{
    navigate(`/updatedetails`,{ state: { teacherDetails } });
   }

  const handleLogout=()=>{
    navigate(`/`);
  }
    return(
      <div>
    <div className="App">
        <header className="App-header">
          <h1>Teacher's Home</h1>
        </header>
        <nav  className="navbar">
          <ul>
            <li onClick={handleHome}>Update</li>&nbsp;&nbsp;&nbsp;
            <li onClick={handleStudent}>Students</li>&nbsp;&nbsp;&nbsp;
            <li onClick={handleStudentForm}>Add Student</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </div>
      <div className="intro">
        <h3>About App</h3>
        <p>This is a website which will be useful for a teacher.
          In this websiteteacher have some functionalities like
          edit own details,add students and edit their details 
          also teacher can delete the students .and teacher have 
          an another page to view all students.
        </p>
      </div>
        </div>
    );
}

export default Teacherhome;