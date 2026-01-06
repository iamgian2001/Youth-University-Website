package com.nc.nc_lms.controller;

import com.nc.nc_lms.entity.Lecturer;
import com.nc.nc_lms.entity.Student;
import com.nc.nc_lms.service.LecturerService;
import com.nc.nc_lms.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/getLec-department")
    public ResponseEntity<?> getLecturerDepartment(@RequestParam String department) {
            List <Lecturer> lecturers = lecturerService.findAllByDepartment(department);
            return ResponseEntity.ok(lecturers);
    }


    @GetMapping("/getStd-program")
    public ResponseEntity<?> getStudentsByProgram(@RequestParam String program) {
            List<Student> students = studentService.findAllByProgram(program);
            return ResponseEntity.ok(students);
    }

    @GetMapping("/getStd-degree")
    public ResponseEntity<?> getStudentsByDegree(@RequestParam String degree) {
            List<Student> students = studentService.findAllByDegreeType(degree);
            return ResponseEntity.ok(students);
    }

    @GetMapping("/getStd-name")
    public ResponseEntity<?> getStudentsByName(@RequestParam String name, @RequestParam(required = false) String sortBy,
                                               @RequestParam(required = false) String sortDirection ) {
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
                return ResponseEntity.ok(student);
            }else{
                return ResponseEntity.noContent().build();
            }

    }

    @GetMapping("/getStd-email")
    public ResponseEntity<?> getStudentsByEmail(@RequestParam String email, @RequestParam(required = false) String sortDirection) {

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
            return ResponseEntity.ok(students);

    }

}
