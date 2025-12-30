package com.nc.nc_lms.controllers;

import com.nc.nc_lms.entities.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
public class StudentController {

    @GetMapping("std")
    public String getStudent(){
        Student student = new Student();
        student.setFirstName("John");
        student.setLastName("Doe");
        student.setEmail("ggogamer60@gmail.com");
        student.setProgram("BBA");
        student.setDob(LocalDate.of(2001,12,20));
        student.setGender("M");
        student.setDegreeType("Bachelor");
        student.setPhoneNumber("775428272");

        return student.toString();

    }

}
