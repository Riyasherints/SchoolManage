package springboot.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import springboot.crud.model.Student;
import springboot.crud.model.Teacher;
import springboot.crud.service.StudentService;

@RestController

@RequestMapping("/student")
@CrossOrigin("http://localhost:3000")

public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@PostMapping("/login")
	    public ResponseEntity<Student> login( @RequestParam String email,@RequestParam String password) {
	        Student authenticatedTeacher = studentService.authenticate(email,password);

	        if (authenticatedTeacher != null) {
	            return ResponseEntity.ok(authenticatedTeacher);
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	        }
	    }
	
	@PostMapping("/add")
	public  Student addStud(@RequestBody Student s) {
		return studentService.addStud(s);
		}
	
	@GetMapping("/viewall")
	public List<Student> viewall() {
		List<Student> list=studentService.viewall();
		return list;
	}
	

    @GetMapping("/viewone")
    public ResponseEntity<Student> viewoneByEmail(@RequestParam String email) {
        Student student = studentService.getStudentDetailsByEmail(email);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
	
	@PutMapping("/update")
	public Student updateStud(@RequestBody Student s) {
		Student det=studentService.updateStud(s);
		return det;
	}
	
	@DeleteMapping("/delete")
	public Student deleteStud(@RequestParam int id) {
		Student det = studentService.deleteStud(id);
		return det;
	}
	
	
}
