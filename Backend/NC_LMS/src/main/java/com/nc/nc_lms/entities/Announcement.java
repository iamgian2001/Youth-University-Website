package com.nc.nc_lms.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name = "announcement")
public class Announcement {
    @Id
    @Column(name = "id",updatable = false,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String content;
    private String date;
    private String location;
    private String author;


}
