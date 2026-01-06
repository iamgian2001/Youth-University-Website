package com.nc.nc_lms.DTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class StudentResponseDTO extends UserResponseDTO {
    private String degreeType;
    private String program;
}