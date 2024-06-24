import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const teacherDetails = location.state?.teacherDetails;
  console.log("Teacher Details in Teacherhome:", teacherDetails);

  const[uemail,setUemail]=useState(teacherDetails?.email || '');
  const[uname,setUname]=useState(teacherDetails?.name || '');
  const[upass,setUpass]=useState(teacherDetails?.password || '');
  const [error, setError] = useState(''); 

  useEffect(()=>{
  },[teacherDetails])

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:8080/teacher/update', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              id: teacherDetails.id,
              name:uname,
              email:uemail,
              password:upass,
          }),
      });

      if (response.ok) {
         alert("updated")
        navigate('/teacherhome');
      } else {
          console.error('Update failed');
      }
  }
     catch (error) {
      console.error('Error during update:', error);
    }
 };

 if (!location.state || !teacherDetails) {
  return <div>Loading...</div>;
}

 return (
    <div>
      {error && <p className="error">{error}</p>} {/* Display error message if any */}
     <u><h2 className='heading3'>Update Details</h2></u> 
     <div className='form-div2'>
      <form onSubmit={handleSubmit}>
      <table className="tbl1">
        <tbody>
        <tr>
          <td><input type="email"  className="txtbox2" value={uemail} onChange={(e) => setUemail(e.target.value)}/></td>
        </tr>
        <tr>
          <td><input type="text"  className="txtbox2" value={uname}  onChange={(e) => setUname(e.target.value)}/></td>
        </tr>
        <tr>
          <td><input type="password"  className="txtbox2" value={upass} onChange={(e) => setUpass(e.target.value)}/></td>
        </tr>
        <tr>
          <td><input type="submit" className="btn4" value="Update" /></td>
        </tr>
        </tbody>
      </table>
      </form>
      </div>
    </div>
 );
};

export default Home;
