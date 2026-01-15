package com.nc.nc_lms.service.impl;


import com.nc.nc_lms.entity.Student;
import com.nc.nc_lms.repository.StudentRepository;
import com.nc.nc_lms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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


        student.setEmail(student.getEmail().trim().toLowerCase());
        student.setDegreeType(student.getDegreeType().trim().toLowerCase());
        student.setGender(student.getGender().trim().toLowerCase());
        student.setAddress(student.getAddress().trim().toLowerCase());
        student.setCity(student.getCity().trim().toLowerCase());
        student.setFirstName(student.getFirstName().trim().toLowerCase());
        student.setLastName(student.getLastName().trim().toLowerCase());

        student.setPasswordHash(passwordEncoder.encode(student.getPasswordHash()));

        return studentRepository.save(student);
    }


    @Override
    public Student findById(Integer id) {
        return studentRepository.findById(id).orElse(null);
    }

    @Override
    public Student findByName(String name) {
        java.util.List<Student> list = studentRepository.findAllByFirstNameOrLastName(name.toLowerCase(), name.toLowerCase(), Sort.by(Sort.Direction.ASC, "firstName"));
        return list.isEmpty() ? null : list.get(0);
    }

    @Override
    public Student findByEmail(String email) {
        return studentRepository.findByEmail(email).orElse(null);
    }

    @Override
    public Student findByPhone(String phone) {
        return studentRepository.findByPhoneNumber(phone).orElse(null);
    }

    @Override
    public Student findByEmailAndPhone(String email, String phone) {
        Student byEmail = findByEmail(email);
        if (byEmail != null && byEmail.getPhoneNumber() != null && byEmail.getPhoneNumber().equals(phone)) return byEmail;
        return null;
    }


    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public List<Student> findAllByProgram(String program) {
        return studentRepository.findAllByProgram(program);
    }

    @Override
    public List<Student> findAllByDegreeType(String degreeType) {
        return studentRepository.findAllByDegreeType(degreeType);
    }

    @Override
    public List<Student> findAllByFirstNameOrLastName(String firstName, String lastName, Sort sort) {
        firstName = firstName.toLowerCase();
        lastName = lastName.toLowerCase();
        return studentRepository.findAllByFirstNameOrLastName(firstName,lastName,sort);
    }


    @Override
    public List<Student> findAllByEmail(String email, Sort sort) {
        return studentRepository.findAllByEmail(email,sort);
    }

    @Override
    public List<Student> findAllByPhone(String phone) {
        return studentRepository.findAllByPhoneNumber(phone);
    }

    @Override
    public List<Student> findAllByEmailAndPhone(String email, String phone) {
        Student s = findByEmailAndPhone(email, phone);
        return s == null ? java.util.List.of() : java.util.List.of(s);
    }

    @Override
    public List<Student> findAllByPhoneAndName(String phone, String name) {
        Student byPhone = findByPhone(phone);
        if (byPhone != null && (name.equalsIgnoreCase(byPhone.getFirstName()) || name.equalsIgnoreCase(byPhone.getLastName()))) {
            return java.util.List.of(byPhone);
        }
        return java.util.List.of();
    }

    @Override
    public List<Student> findAllByPhoneAndEmail(String phone, String email) {
        Student byPhone = findByPhone(phone);
        if (byPhone != null && email.equalsIgnoreCase(byPhone.getEmail())) return java.util.List.of(byPhone);
        return java.util.List.of();
    }

    @Override
    public List<Student> findAllByPhoneAndNameAndEmail(String phone, String name, String email) {
        Student byPhone = findByPhone(phone);
        if (byPhone != null && email.equalsIgnoreCase(byPhone.getEmail()) && (name.equalsIgnoreCase(byPhone.getFirstName()) || name.equalsIgnoreCase(byPhone.getLastName()))) {
            return java.util.List.of(byPhone);
        }
        return java.util.List.of();
    }

    @Override
    public void deleteById(Integer id) {
        studentRepository.deleteById(id);
    }

    @Override
    public void deleteByName(String name) {
        java.util.List<Student> list = studentRepository.findAllByFirstNameOrLastName(name.toLowerCase(), name.toLowerCase(), Sort.by(Sort.Direction.ASC, "firstName"));
        list.forEach(s -> studentRepository.deleteById(s.getId()));
    }

    @Override
    public void deleteByEmail(String email) {
        studentRepository.findByEmail(email).ifPresent(s -> studentRepository.deleteById(s.getId()));
    }

    @Override
    public void deleteByPhone(String phone) {
        studentRepository.findByPhoneNumber(phone).ifPresent(s -> studentRepository.deleteById(s.getId()));
    }

    @Override
    public void deleteByEmailAndPhone(String email, String phone) {
        Student s = findByEmailAndPhone(email, phone);
        if (s != null) studentRepository.deleteById(s.getId());
    }

    @Override
    public void deleteByPhoneAndName(String phone, String name) {
        java.util.List<Student> list = findAllByPhoneAndName(phone, name);
        list.forEach(st -> studentRepository.deleteById(st.getId()));
    }

    @Override
    public void deleteByPhoneAndEmail(String phone, String email) {
        java.util.List<Student> list = findAllByPhoneAndEmail(phone, email);
        list.forEach(st -> studentRepository.deleteById(st.getId()));
    }

    @Override
    public void deleteByPhoneAndNameAndEmail(String phone, String name, String email) {
        java.util.List<Student> list = findAllByPhoneAndNameAndEmail(phone, name, email);
        list.forEach(st -> studentRepository.deleteById(st.getId()));
    }


}
