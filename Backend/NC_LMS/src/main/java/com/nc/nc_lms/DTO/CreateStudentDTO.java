package com.nc.nc_lms.DTO;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CreateStudentDTO {
    private String nic;
    private String firstName;
    private String lastName;
    private String email;
    private String password;  // Plain password, not hash
    private String phoneNumber;
    private String address;
    private String city;
    private LocalDate dob;
    private String gender;
    private String degreeType;
    private String program;
    // No id - auto-generated
    // No role - set by service
}