import React from 'react';
import {Card,Button,Table} from 'react-bootstrap';
import './style.css';
import { useState,useEffect } from 'react';

const Students = () => {

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
      try {
          const response = await fetch('http://localhost:8080/student/viewall');
          if (!response.ok) {
              throw new Error('Failed to fetch students');
          }
          const data = await response.json();
          setStudents(data);
      } catch (error) {
          console.error('Error fetching students:', error);
      }
  };

  const handleDelete = async (studentId) => {
    try {
        const response = await fetch(`http://localhost:8080/student/delete?id=${studentId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete student');
        }
        setStudents(students.filter(student => student.id !== studentId));
    } catch (error) {
        console.error('Error deleting student:', error);
    }
};


const handleUpdate = async (event) => {
  event.preventDefault();
  try {
      const response = await fetch(`http://localhost:8080/student/update`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(editingStudent),
      });

      if (!response.ok) {
          throw new Error('Failed to update student');
      }
      fetchStudents();
      setEditingStudent(null);
  } catch (error) {
      console.error('Error updating student:', error);
  }
};

  
 return (
   <div>
   <Card  className="table-div">
<div>
<Card.Header>
<h2 className="text-center">MY CONTACTS</h2>
</Card.Header>
<Card.Body>
<Table striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>DOB</th>
<th>Address</th>
<th>Actions</th>
</tr>
</thead>
{students.map((student) => (
<tr key={student.id}>
<td>{student.id}</td>
<td>{student.name}</td>
<td>{student.email}</td>
<td>{student.dob}</td>
<td>{student.address}</td>
<td>
<Button variant="danger" onClick={() => handleDelete(student.id)}>Delete</Button>{' '}
<Button variant="secondary" onClick={() => setEditingStudent(student)}>Edit</Button>
</td>
</tr>
))}
</Table >
<form onSubmit={handleUpdate}>
{editingStudent && (
 <>
<input type="text" value={editingStudent.name} onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })} />{' '}
<input type="text" value={editingStudent.email} onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}/>{' '}
<input type="text" value={editingStudent.dob} onChange={(e) => setEditingStudent({ ...editingStudent, dob: e.target.value })}/>{' '}
<input type="text" value={editingStudent.address} onChange={(e) => setEditingStudent({ ...editingStudent, address: e.target.value })} />{' '}
<Button variant="success" type="submit" >Update</Button>{' '}
<Button variant="secondary"  onClick={() => setEditingStudent(null)}>Cancel Edit</Button>
</>
  )}
</form>
</Card.Body>
</div>
</Card>
</div>
 );
};

export default Students;
