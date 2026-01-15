package com.nc.nc_lms.controller;

import com.nc.nc_lms.DTO.CreateStudentDTO;
import com.nc.nc_lms.DTO.StudentResponseDTO;
import com.nc.nc_lms.entity.Student;
import com.nc.nc_lms.mapper.StudentMapper;
import com.nc.nc_lms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public ResponseEntity<StudentResponseDTO> createStudent(@RequestBody CreateStudentDTO dto) {
        Student student = StudentMapper.toEntity(dto);
        Student saved = studentService.save(student);
        return ResponseEntity.ok(StudentMapper.toResponseDto(saved));
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentResponseDTO> getById(@PathVariable Integer id) {
        Student s = studentService.findById(id);
        if (s == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(StudentMapper.toResponseDto(s));
    }

    @GetMapping
    public ResponseEntity<List<StudentResponseDTO>> listAll() {
        List<StudentResponseDTO> list = studentService.findAll().stream().map(StudentMapper::toResponseDto).collect(Collectors.toList());
        return ResponseEntity.ok(list);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudentResponseDTO> update(@PathVariable Integer id, @RequestBody CreateStudentDTO dto) {
        Student existing = studentService.findById(id);
        if (existing == null) return ResponseEntity.notFound().build();
        StudentMapper.updateEntityFromDto(dto, existing);
        Student saved = studentService.save(existing);
        return ResponseEntity.ok(StudentMapper.toResponseDto(saved));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        Student existing = studentService.findById(id);
        if (existing == null) return ResponseEntity.notFound().build();
        studentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
