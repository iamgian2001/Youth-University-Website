package com.nc.nc_lms.controllers;

import com.nc.nc_lms.entities.Lecturer;
import com.nc.nc_lms.entities.Student;
import com.nc.nc_lms.services.LecturerService;
import com.nc.nc_lms.services.StudentService;
import jakarta.validation.Valid;
import org.hibernate.annotations.ConcreteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final StudentService studentService;
    private final LecturerService lecturerService;

    @Autowired
    public AdminController(StudentService studentService,  LecturerService lecturerService) {
        this.studentService = studentService;
        this.lecturerService = lecturerService;
    }

    @PostMapping("/save-student")
    public ResponseEntity<?> createStudent(@Valid @RequestBody Student student) {
        return ResponseEntity.ok(studentService.save(student));

    }

    @PostMapping("/save-lecturer")
    public ResponseEntity<?> createLecturer(@Valid @RequestBody Lecturer lecturer) {
        return ResponseEntity.ok(lecturerService.save(lecturer));
    }

    @GetMapping("/getStd-program")
    public ResponseEntity<?> getStudentsByProgram(@RequestParam String program) {
        try {
            List<Student> students = studentService.findAllByProgram(program);
            return new ResponseEntity<>(students, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred while retrieving the students", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getStd-degree")
    public ResponseEntity<?> getStudentsByDegree(@RequestParam String degree) {
        try {
            List<Student> students = studentService.findAllByDegreeType(degree);
            return new ResponseEntity<>(students, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred while retrieving the students", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getStd-name")
    public ResponseEntity<?> getStudentsByName(@RequestParam String name, @RequestParam(required = false) String sortBy,
                                               @RequestParam(required = false) String sortDirection ) {
        try {
            Sort sort;
            if (sortBy != null && !sortBy.isEmpty()) {
                Sort.Direction direction = "desc".equalsIgnoreCase(sortDirection)
                        ? Sort.Direction.DESC
                        : Sort.Direction.ASC;
                sort = Sort.by(direction, sortBy);
            } else {
                sort = Sort.by(Sort.Direction.ASC, "firstName");
            }
            List<Student> student = studentService.findAllByFirstNameOrLastName(name, name,sort);
            if(!student.isEmpty()) {
                return new ResponseEntity<>(student, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(student, HttpStatus.NO_CONTENT);
            }
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred while retrieving the students by name", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getStd-email")
    public ResponseEntity<?> getStudentsByEmail(@RequestParam String email, @RequestParam(required = false) String sortDirection) {
        try {
            Sort sort;
            if(sortDirection != null && !sortDirection.isEmpty()) {
                sort = Sort.by(Sort.Direction.ASC);
            } else {
                if(sortDirection.equals("desc")) {
                    sort = Sort.by(Sort.Direction.DESC);
                }else{
                    sort = Sort.by(Sort.Direction.ASC);
                }
            }
            List<Student> students = studentService.findAllByEmail(email,sort);
            return new ResponseEntity<>(students, HttpStatus.OK);
        }
        catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }catch (Exception e) {
            return new ResponseEntity<>("An error occurred while retrieving the students by email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
