package com.nc.nc_lms.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "lecturer")
public class Lecturer extends User {
    @Column(name="department")
    private String department;

    @Column(name="access")
    private String access;

}
