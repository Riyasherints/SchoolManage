package springboot.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import springboot.crud.model.Teacher;
import springboot.crud.service.TeacherService;

@RestController
@RequestMapping("/teacher")
@CrossOrigin(origins = "http://localhost:3000")

public class TeacherController {

	@Autowired
	private TeacherService teacherService;
	
	 @PostMapping("/login")
	    public ResponseEntity<Teacher> login( @RequestParam String email,@RequestParam String password) {
	        Teacher authenticatedTeacher = teacherService.authenticate(email,password);

	        if (authenticatedTeacher != null) {
	            return ResponseEntity.ok(authenticatedTeacher);
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	        }
	    }
	 
	
	@PostMapping("/add")
	public Teacher add(@RequestBody Teacher t) {
		return teacherService.add(t);
	}
	
	@GetMapping("/viewone")
	public Teacher viewone(@PathVariable int id) {
		Teacher one= teacherService.viewone(id);
		return one;
	}
	
	
	@PutMapping("/update")
	public Teacher update(@RequestBody Teacher t) {
		Teacher det=teacherService.update(t);
		return det;
	}
	
	@DeleteMapping("/delete")
	public Teacher delete(@RequestParam int id) {
		Teacher det = teacherService.delete(id);
		return det;
	}
	
	
	
}
