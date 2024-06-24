package springboot.crud.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.crud.model.Student;
import springboot.crud.model.Teacher;
import springboot.crud.repo.TeacherRepo;

@Service

public class TeacherImpl implements TeacherService {
	
	@Autowired
	private TeacherRepo teacherRepo;
	

    @Override
    public Teacher getTeacherDetailsByEmail(String email) {
        return teacherRepo.findByEmail(email);
    }
	
	 @Override
	    public Teacher authenticate(String email, String password) {
	        Teacher teacher = teacherRepo.findByEmail(email);

	        if (teacher != null && teacher.getPassword().equals(password)) {
	            return teacher;
	        }

	        return null; // Authentication failed
	    }
	
	@Override
	public Teacher add(Teacher t) {
		Teacher obj=teacherRepo.save(t);
		return obj;
	}
	
	@Override
	public Teacher viewone(int id) {
		Teacher one=teacherRepo.findById(id).get();
		return one;
	}
	
	@Override
	public List <Teacher> viewall(){
		List<Teacher> list=teacherRepo.findAll();
		return list;
	}
	
	@Override
	public Teacher update(Teacher t) {
		System.out.println("old details:"+teacherRepo.findById(t.getId()).get());
		System.out.println("new details" +teacherRepo.save(t));
		return teacherRepo.save(t);
	}
	
	@Override
	public Teacher delete(int id) {
		Teacher det=teacherRepo.findById(id).get();
		teacherRepo.deleteById(id);
		return det;
	}
}
