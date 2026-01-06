package com.nc.nc_lms.repository;

import com.nc.nc_lms.entity.Lecturer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LecturerRepository extends JpaRepository<Lecturer, Integer> {
    boolean existsByNic(String nic);
    boolean existsByEmail(String email);

    List<Lecturer> findAllByDepartment(String department);
}
