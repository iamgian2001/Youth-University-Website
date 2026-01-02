package com.nc.nc_lms.services;

import com.nc.nc_lms.entities.Student;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface StudentService {

    Student save(Student student);
    Student findById(Integer id);
    Student findByName(String name);
    Student findByEmail(String email);
    Student findByPhone(String phone);
    Student findByEmailAndPhone(String email, String phone);

    List<Student> findAll();
    List<Student> findAllByProgram(String program);
    List<Student> findAllByDegreeType(String degreeType);
    List<Student> findAllByFirstNameOrLastName(String firstName, String lastName, Sort sort);
    List<Student> findAllByEmail(String email, Sort sort);
    List<Student> findAllByPhone(String phone);
    List<Student> findAllByEmailAndPhone(String email, String phone);
    List<Student> findAllByPhoneAndName(String phone, String name);
    List<Student> findAllByPhoneAndEmail(String phone, String email);
    List<Student> findAllByPhoneAndNameAndEmail(String phone, String name, String email);

    void deleteById(Integer id);
    void deleteByName(String name);
    void deleteByEmail(String email);
    void deleteByPhone(String phone);
    void deleteByEmailAndPhone(String email, String phone);
    void deleteByPhoneAndName(String phone, String name);
    void deleteByPhoneAndEmail(String phone, String email);
    void deleteByPhoneAndNameAndEmail(String phone, String name, String email);

}
