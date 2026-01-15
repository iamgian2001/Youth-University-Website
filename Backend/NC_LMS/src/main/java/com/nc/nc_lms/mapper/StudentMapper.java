package com.nc.nc_lms.mapper;

import com.nc.nc_lms.DTO.CreateStudentDTO;
import com.nc.nc_lms.DTO.StudentResponseDTO;
import com.nc.nc_lms.entity.Student;

public class StudentMapper {

    public static Student toEntity(CreateStudentDTO dto) {
        if (dto == null) return null;
        Student s = new Student();
        s.setNic(dto.getNic());
        s.setFirstName(dto.getFirstName());
        s.setLastName(dto.getLastName());
        s.setEmail(dto.getEmail());
        s.setPasswordHash(dto.getPassword());
        s.setPhoneNumber(dto.getPhoneNumber());
        s.setAddress(dto.getAddress());
        s.setCity(dto.getCity());
        s.setDob(dto.getDob());
        s.setGender(dto.getGender());
        s.setDegreeType(dto.getDegreeType());
        s.setProgram(dto.getProgram());
        return s;
    }

    public static StudentResponseDTO toResponseDto(Student s) {
        if (s == null) return null;
        StudentResponseDTO dto = new StudentResponseDTO();
        dto.setId(s.getId());
        dto.setFirstName(s.getFirstName());
        dto.setLastName(s.getLastName());
        dto.setEmail(s.getEmail());
        dto.setPhoneNumber(s.getPhoneNumber());
        dto.setAddress(s.getAddress());
        dto.setCity(s.getCity());
        dto.setDob(s.getDob());
        dto.setGender(s.getGender());
        dto.setDegreeType(s.getDegreeType());
        dto.setProgram(s.getProgram());
        dto.setRole(s.getRole());
        return dto;
    }

    public static void updateEntityFromDto(CreateStudentDTO dto, Student s) {
        if (dto == null || s == null) return;
        if (dto.getNic() != null) s.setNic(dto.getNic());
        if (dto.getFirstName() != null) s.setFirstName(dto.getFirstName());
        if (dto.getLastName() != null) s.setLastName(dto.getLastName());
        if (dto.getEmail() != null) s.setEmail(dto.getEmail());
        if (dto.getPassword() != null) s.setPasswordHash(dto.getPassword());
        if (dto.getPhoneNumber() != null) s.setPhoneNumber(dto.getPhoneNumber());
        if (dto.getAddress() != null) s.setAddress(dto.getAddress());
        if (dto.getCity() != null) s.setCity(dto.getCity());
        if (dto.getDob() != null) s.setDob(dto.getDob());
        if (dto.getGender() != null) s.setGender(dto.getGender());
        if (dto.getDegreeType() != null) s.setDegreeType(dto.getDegreeType());
        if (dto.getProgram() != null) s.setProgram(dto.getProgram());
    }

}
