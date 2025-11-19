package com.nc.nc_lms.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    @Column(name = "id", updatable = false)
    private int id;

    @NotBlank(message = "NIC is required!")
    @NotNull
    @Column(name = "nic")
    private String nic;

    @NotBlank(message = "First name is required!")
    @Column(name = "fname", nullable = false)
    private String firstName;

    @NotBlank(message = "Last name is required!")
    @Column(name = "lname", nullable = false)
    private String lastName;

    @NotBlank(message = "Email is required!")
    @Column(name = "email", nullable = false)
    private String email;

    @NotBlank(message = "Password is required")
    @NotNull
    @Column(name = "password", length = 72)
    private String passwordHash;

    @NotBlank(message = "Phone number is required!")
    @Column(name = "phone", nullable = false)
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "profile_pic")
    private String profilePic;

    @NotBlank(message = "Date of Birth is required!")
    @Column(name = "dob", nullable = false)
    private LocalDate dob;

    @Column(name = "gender")
    private String gender;

    @Column(name = "role")
    private String role;
}
