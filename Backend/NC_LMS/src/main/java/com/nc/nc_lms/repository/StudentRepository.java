package com.nc.nc_lms.repository;

import com.nc.nc_lms.entity.Student;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    boolean getStudentByEmail(String email);
    boolean existsByNic(String nic);
    boolean existsByEmail(String email);

    boolean existsByPhoneNumber(String phoneNumber);

    List<Student> findAllByProgram(String program);

    List<Student> findAllByDegreeType(String degreeType);

    List<Student> findAllByDegreeType(String degreeType, Sort sort);

    List<Student> findAllByFirstNameOrLastName(String firstName, String lastName, Sort sort);

    List<Student> findAllByEmail(String email, Sort sort);

}
