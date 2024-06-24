package springboot.crud.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import springboot.crud.model.Teacher;


public interface TeacherRepo  extends JpaRepository<Teacher,Integer>{
	
	  Teacher findByEmail(String email);

}
