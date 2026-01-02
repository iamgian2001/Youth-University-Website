package com.nc.nc_lms.repositories;

import com.nc.nc_lms.entities.Student;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.domain.Limit;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
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
