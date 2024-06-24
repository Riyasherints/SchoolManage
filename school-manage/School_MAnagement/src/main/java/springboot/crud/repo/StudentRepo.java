package springboot.crud.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import springboot.crud.model.Student;
import springboot.crud.model.Teacher;

public interface StudentRepo extends JpaRepository<Student,Integer>{
	
	 Student findByEmail(String email);

}
