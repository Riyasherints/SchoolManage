import React from 'react';
import Homepage from './Components/HomePage';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './Components/Login';
import Studentform from './Components/StudentForm';
import Teacherhome from './Components/teacherhome';
import Students from './Components/Students';
import Home from './Components/Home';
import StudentLogin from './Components/StudentLogin';
import StdentHome from './Components/Studenthome';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/studentform' element={<Studentform/>}/>
          <Route path='/teacherhome' element={<Teacherhome/>}/>
          <Route path='/students' element={<Students />}/>
          <Route path='/updatedetails'element={<Home />}/>
          <Route path='/studentlogin' element={<StudentLogin />} />
          <Route path='/studenthome' element={<StdentHome/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
