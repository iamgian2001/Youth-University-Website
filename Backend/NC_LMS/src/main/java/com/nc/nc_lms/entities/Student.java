package com.nc.nc_lms.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.naming.Name;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "Student")
public class Student extends User{
    @Column(name = "degreetype")
    private String degreeType;

    @Column(name = "program")
    private String program;
}
