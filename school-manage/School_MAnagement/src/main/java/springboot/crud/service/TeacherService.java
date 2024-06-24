package springboot.crud.service;

import java.util.List;

import springboot.crud.model.Teacher;


public interface TeacherService {

	public Teacher add(Teacher t);

	public List<Teacher> viewall();

	public Teacher update(Teacher t);

	public Teacher delete(int id);

	public Teacher viewone(int id);
	
	 Teacher authenticate(String email, String password);

	Teacher getTeacherDetailsByEmail(String email);

}
