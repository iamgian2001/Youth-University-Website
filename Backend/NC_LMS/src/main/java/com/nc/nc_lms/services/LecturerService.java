package com.nc.nc_lms.services;

import com.nc.nc_lms.entities.Lecturer;

import java.util.List;

public interface LecturerService {

    Lecturer save(Lecturer lecturer);

    Lecturer findById(Integer id);
    Lecturer findByEmail(String email);
    Lecturer findByPhone(String phone);
    Lecturer findByNIC(String nic);

    List<Lecturer> findAllByProgram(String program);
    List<Lecturer> findByFirstNameOrLastName(String firstName, String lastName);
    List<Lecturer> findByAccess(String access);
    List<Lecturer> findByDepartment(String department);

}
