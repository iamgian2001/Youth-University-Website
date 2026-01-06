package com.nc.nc_lms.DTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class LecturerResponseDTO extends UserResponseDTO {
    private String department;
    private String access;
}