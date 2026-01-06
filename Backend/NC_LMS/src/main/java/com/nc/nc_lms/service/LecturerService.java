package com.nc.nc_lms.service;

import com.nc.nc_lms.entity.Lecturer;

import java.util.List;

public interface LecturerService {

    Lecturer save(Lecturer lecturer);

    Lecturer findById(Integer id);
    Lecturer findByEmail(String email);
    Lecturer findByPhone(String phone);
    Lecturer findByNIC(String nic);

    List<Lecturer> findAllByDepartment(String department);
    List<Lecturer> findAllByProgram(String program);
    List<Lecturer> findByFirstNameOrLastName(String firstName, String lastName);
    List<Lecturer> findByAccess(String access);


}
