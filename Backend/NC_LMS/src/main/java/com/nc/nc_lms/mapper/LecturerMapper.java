package com.nc.nc_lms.mapper;

import com.nc.nc_lms.DTO.CreateLecturerDTO;
import com.nc.nc_lms.DTO.LecturerResponseDTO;
import com.nc.nc_lms.entity.Lecturer;


public class LecturerMapper {

    public static Lecturer toEntity(CreateLecturerDTO dto) {
        if (dto == null) return null;
        Lecturer l = new Lecturer();
        l.setNic(dto.getNic());
        l.setFirstName(dto.getFirstName());
        l.setLastName(dto.getLastName());
        l.setEmail(dto.getEmail());
        l.setPasswordHash(dto.getPassword());
        l.setPhoneNumber(dto.getPhoneNumber());
        l.setAddress(dto.getAddress());
        l.setCity(dto.getCity());
        l.setDob(dto.getDob());
        l.setGender(dto.getGender());
        l.setDepartment(dto.getDepartment());
        l.setAccess(dto.getAccess());
        return l;
    }

    public static LecturerResponseDTO toResponseDto(Lecturer l) {
        if (l == null) return null;
        LecturerResponseDTO dto = new LecturerResponseDTO();
        dto.setId(l.getId());
        dto.setFirstName(l.getFirstName());
        dto.setLastName(l.getLastName());
        dto.setEmail(l.getEmail());
        dto.setPhoneNumber(l.getPhoneNumber());
        dto.setAddress(l.getAddress());
        dto.setCity(l.getCity());
        dto.setDob(l.getDob());
        dto.setGender(l.getGender());
        dto.setRole(l.getRole());
        dto.setDepartment(l.getDepartment());
        dto.setAccess(l.getAccess());
        return dto;
    }

    public static void updateEntityFromDto(CreateLecturerDTO dto, Lecturer l) {
        if (dto == null || l == null) return;
        if (dto.getNic() != null) l.setNic(dto.getNic());
        if (dto.getFirstName() != null) l.setFirstName(dto.getFirstName());
        if (dto.getLastName() != null) l.setLastName(dto.getLastName());
        if (dto.getEmail() != null) l.setEmail(dto.getEmail());
        if (dto.getPassword() != null) l.setPasswordHash(dto.getPassword());
        if (dto.getPhoneNumber() != null) l.setPhoneNumber(dto.getPhoneNumber());
        if (dto.getAddress() != null) l.setAddress(dto.getAddress());
        if (dto.getCity() != null) l.setCity(dto.getCity());
        if (dto.getDob() != null) l.setDob(dto.getDob());
        if (dto.getGender() != null) l.setGender(dto.getGender());
        if (dto.getDepartment() != null) l.setDepartment(dto.getDepartment());
        if (dto.getAccess() != null) l.setAccess(dto.getAccess());
    }

}
