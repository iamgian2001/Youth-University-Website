package com.nc.nc_lms.DTO;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserResponseDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String address;
    private String city;
    private String profilePic;
    private LocalDate dob;
    private String gender;
    private String role;
    // No nic, no passwordHash
}
