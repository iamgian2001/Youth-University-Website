package com.nc.nc_lms.controllers;

import com.nc.nc_lms.entities.Student;
import com.nc.nc_lms.services.StudentService;
import org.hibernate.annotations.ConcreteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final StudentService studentService;

    @Autowired
    public AdminController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> createStudent(@RequestBody Student student) {
        try {
            Student saveStudent = studentService.save(student);
            return new ResponseEntity<>(saveStudent, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred while saving the student", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
