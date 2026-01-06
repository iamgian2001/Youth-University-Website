package com.nc.nc_lms.service.impl;

import com.nc.nc_lms.entity.Lecturer;
import com.nc.nc_lms.repository.LecturerRepository;
import com.nc.nc_lms.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LecturerServiceImpl implements LecturerService {

    @Autowired
    private LecturerRepository lecturerRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public LecturerServiceImpl(PasswordEncoder passwordEncoder, LecturerRepository lecturerRepository) {
        this.passwordEncoder = passwordEncoder;
        this.lecturerRepository = lecturerRepository;
    }


    @Override
    public Lecturer save(Lecturer lecturer) {

        lecturer.setRole("LECTURER");

        if (lecturer.getDepartment() == null || lecturer.getDepartment().isBlank()) {
            throw new IllegalArgumentException("Department is required");
        }

        if (lecturer.getGender() == null || lecturer.getGender().isBlank()) {
            throw new IllegalArgumentException("Gender is required");
        }

        if (lecturer.getFirstName() == null || lecturer.getFirstName().isBlank()) {
            throw new IllegalArgumentException("First name is required");
        }

        if (lecturer.getLastName() == null || lecturer.getLastName().isBlank()) {
            throw new IllegalArgumentException("Last name is required");
        }

        if (lecturer.getEmail() == null || lecturer.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email is required");
        }

        if (lecturer.getPhoneNumber() == null || lecturer.getPhoneNumber().isBlank()) {
            throw new IllegalArgumentException("Phone number is required");
        }

        if (lecturer.getDob() == null) {
            throw new IllegalArgumentException("Dob is required");
        }

        if (lecturer.getNic() == null || lecturer.getNic().isBlank()) {
            throw new IllegalArgumentException("NIC is required");
        }

        if (lecturer.getPasswordHash() == null || lecturer.getPasswordHash().isBlank()) {
            throw new IllegalArgumentException("Password is required");
        }

        lecturer.setEmail(lecturer.getEmail().trim().toLowerCase());
        lecturer.setDepartment(lecturer.getDepartment().trim().toLowerCase());
        lecturer.setGender(lecturer.getGender().trim().toLowerCase());
        lecturer.setAddress(lecturer.getAddress().trim().toLowerCase());
        lecturer.setCity(lecturer.getCity().trim().toLowerCase());
        lecturer.setFirstName(lecturer.getFirstName().trim().toLowerCase());
        lecturer.setLastName(lecturer.getLastName().trim().toLowerCase());


        if (lecturerRepository.existsByEmail(lecturer.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        if (lecturerRepository.existsByNic(lecturer.getNic())) {
            throw new RuntimeException("NIC already exists");
        }

        // Encrypt password
        lecturer.setPasswordHash(passwordEncoder.encode(lecturer.getPasswordHash()));

        return lecturerRepository.save(lecturer);
    }
    @Override
    public Lecturer findById(Integer id) {
        return null;
    }

    @Override
    public Lecturer findByEmail(String email) {
        return null;
    }

    @Override
    public Lecturer findByPhone(String phone) {
        return null;
    }

    @Override
    public Lecturer findByNIC(String nic) {
        return null;
    }

    @Override
    public List<Lecturer> findAllByDepartment(String department) {
        return lecturerRepository.findAllByDepartment(department);
    }

    @Override
    public List<Lecturer> findAllByProgram(String program) {
        return List.of();
    }

    @Override
    public List<Lecturer> findByFirstNameOrLastName(String firstName, String lastName) {
        return List.of();
    }

    @Override
    public List<Lecturer> findByAccess(String access) {
        return List.of();
    }


}
