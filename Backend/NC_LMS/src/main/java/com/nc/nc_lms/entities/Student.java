package com.nc.nc_lms.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name="id",nullable=false,updatable=false)
    private int id;

    @Column(name="nic", nullable=false,updatable=true)
    private int nic;

    @Column(name="fname", nullable=false)
    private String firstName;

    @Column(name="lname", nullable=false)
    private String lastName;

    @Column(name = "email",nullable=false)
    private String email;

    @Column(name = "phone",nullable=false)
    private int phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name="city")
    private String city;

    @Column(name="dob", nullable=false)
    private Date dob;

    @Column(name="gender")
    private String gender;

    @Column(name = "program", nullable=false)
    private String program;
}


