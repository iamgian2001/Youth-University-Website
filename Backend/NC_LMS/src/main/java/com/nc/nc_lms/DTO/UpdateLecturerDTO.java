package com.nc.nc_lms.DTO;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdateLecturerDTO {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
    private String city;
    private LocalDate dob;
    private String gender;
    private String department;
    private String access;
}