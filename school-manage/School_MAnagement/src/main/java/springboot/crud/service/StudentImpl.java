package springboot.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.crud.model.Student;
import springboot.crud.model.Teacher;
import springboot.crud.repo.StudentRepo;

@Service

public class StudentImpl implements StudentService{
	
	@Autowired
	public StudentRepo studentRepo;
	

    @Override
    public Student getStudentDetailsByEmail(String email) {
        return studentRepo.findByEmail(email);
    }

	
	@Override
    public Student authenticate(String email, String password) {
        Student student = studentRepo.findByEmail(email);

        if (student != null && student.getPassword().equals(password)) {
            return student;
        }

        return null; // Authentication failed
    }
	
	@Override
	public Student addStud(Student s){
	Student obj=studentRepo.save(s);
	return obj;
	}
	
	@Override
	public Student updateStud(Student s) {
		System.out.println("old details:"+studentRepo.findById(s.getId()).get());
		System.out.println("new details" +studentRepo.save(s));
		return studentRepo.save(s);
	}
	
	@Override
	public List<Student> viewall(){
		List<Student> list=studentRepo.findAll();
		return list;
	}
	
	@Override
	public Student viewone(int id) {
		Student one=studentRepo.findById(id).get();
		return one;
	}
	
	@Override
	public Student deleteStud(int id) {
		Student det=studentRepo.findById(id).get();
        studentRepo.deleteById(id);
		return det;
	}

}
