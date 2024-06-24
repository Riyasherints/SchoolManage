package springboot.crud.service;

import java.util.List;

import springboot.crud.model.Student;
import springboot.crud.model.Teacher;

public interface StudentService {

	public Student addStud(Student s);

	public Student deleteStud(int id);

	public Student updateStud(Student s);

	public List<Student> viewall();

	public Student viewone(int id);
	
	Student authenticate(String email, String password);

	Student getStudentDetailsByEmail(String email);
	
	}

		
