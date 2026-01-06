package com.nc.nc_lms.DTO;

import lombok.Data;

@Data
public class StudentSummaryDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String program;
    private String degreeType;
}
