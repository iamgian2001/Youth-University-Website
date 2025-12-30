package com.nc.nc_lms.services.impl;


import com.nc.nc_lms.entities.Student;
import com.nc.nc_lms.repositories.StudentRepository;
import com.nc.nc_lms.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public StudentServiceImpl(StudentRepository studentRepository, PasswordEncoder passwordEncoder) {
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Student save(Student student) {

        student.setRole("STUDENT");

        if (student.getDegreeType() == null || student.getDegreeType().isEmpty()) {
            throw new IllegalArgumentException("Degree type is required");
        }

        if (student.getGender() == null || student.getGender().isEmpty()) {
            throw new IllegalArgumentException("Gender is required");
        }

        if (student.getFirstName() == null || student.getFirstName().isEmpty()) {
            throw new IllegalArgumentException("First name is required");
        }

        if (student.getLastName() == null || student.getLastName().isEmpty()) {
            throw new IllegalArgumentException("Last name is required");
        }

        if (student.getEmail() == null || student.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email is required");
        }

        if(student.getPhoneNumber() == null || student.getPhoneNumber().isBlank()){
            throw new IllegalArgumentException("Phone number is required");
        }

        if(student.getDob()==null ){
            throw new IllegalArgumentException("Dob is required");
        }

        if (student.getNic() == null || student.getNic().isBlank()) {
            throw new IllegalArgumentException("NIC is required");
        }

        if (student.getPasswordHash() == null || student.getPasswordHash().isBlank()) {
            throw new IllegalArgumentException("Password is required");
        }

        student.setEmail(student.getEmail().trim().toLowerCase());
        student.setDegreeType(student.getDegreeType().trim().toLowerCase());
        student.setGender(student.getGender().trim().toLowerCase());
        student.setAddress(student.getAddress().trim().toLowerCase());
        student.setCity(student.getCity().trim().toLowerCase());
        student.setFirstName(student.getFirstName().trim());
        student.setLastName(student.getLastName().trim());

        if (studentRepository.existsByEmail(student.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        if (studentRepository.existsByNic(student.getNic())) {
            throw new RuntimeException("NIC already exists");
        }

        student.setPasswordHash(passwordEncoder.encode(student.getPasswordHash()));

        return studentRepository.save(student);
    }


    @Override
    public Student findById(Integer id) {
        return null;
    }

    @Override
    public Student findByName(String name) {
        return null;
    }

    @Override
    public Student findByEmail(String email) {
        return null;
    }

    @Override
    public Student findByPhone(String phone) {
        return null;
    }

    @Override
    public Student findByEmailAndPhone(String email, String phone) {
        return null;
    }


    @Override
    public List<Student> findAll() {
        return List.of();
    }

    @Override
    public List<Student> findAllByProgram(String program) {
        return List.of();
    }

    @Override
    public List<Student> findAllByName(String name) {
        return List.of();
    }

    @Override
    public List<Student> findAllByEmail(String email) {
        return List.of();
    }

    @Override
    public List<Student> findAllByPhone(String phone) {
        return List.of();
    }

    @Override
    public List<Student> findAllByEmailAndPhone(String email, String phone) {
        return List.of();
    }

    @Override
    public List<Student> findAllByPhoneAndName(String phone, String name) {
        return List.of();
    }

    @Override
    public List<Student> findAllByPhoneAndEmail(String phone, String email) {
        return List.of();
    }

    @Override
    public List<Student> findAllByPhoneAndNameAndEmail(String phone, String name, String email) {
        return List.of();
    }

    @Override
    public void deleteById(Integer id) {

    }

    @Override
    public void deleteByName(String name) {

    }

    @Override
    public void deleteByEmail(String email) {

    }

    @Override
    public void deleteByPhone(String phone) {

    }

    @Override
    public void deleteByEmailAndPhone(String email, String phone) {

    }

    @Override
    public void deleteByPhoneAndName(String phone, String name) {

    }

    @Override
    public void deleteByPhoneAndEmail(String phone, String email) {

    }

    @Override
    public void deleteByPhoneAndNameAndEmail(String phone, String name, String email) {

    }


}
