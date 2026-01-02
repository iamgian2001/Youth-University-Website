package com.nc.nc_lms.repositories;

import com.nc.nc_lms.entities.Lecturer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LecturerRepository extends JpaRepository<Lecturer, Integer> {
    boolean existsByNic(String nic);
    boolean existsByEmail(String email);
}
