package com.nc.nc_lms.controller;

import com.nc.nc_lms.DTO.CreateLecturerDTO;
import com.nc.nc_lms.DTO.LecturerResponseDTO;
import com.nc.nc_lms.entity.Lecturer;
import com.nc.nc_lms.mapper.LecturerMapper;
import com.nc.nc_lms.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/lecturers")
public class LecturerController {

    private final LecturerService lecturerService;

    @Autowired
    public LecturerController(LecturerService lecturerService) {
        this.lecturerService = lecturerService;
    }

    @PostMapping
    public ResponseEntity<LecturerResponseDTO> create(@RequestBody CreateLecturerDTO dto) {
        Lecturer l = LecturerMapper.toEntity(dto);
        Lecturer saved = lecturerService.save(l);
        return ResponseEntity.ok(LecturerMapper.toResponseDto(saved));
    }

    @GetMapping("/{id}")
    public ResponseEntity<LecturerResponseDTO> get(@PathVariable Integer id) {
        Lecturer l = lecturerService.findById(id);
        if (l == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(LecturerMapper.toResponseDto(l));
    }

    @GetMapping
    public ResponseEntity<List<LecturerResponseDTO>> listAll() {
        List<LecturerResponseDTO> list = lecturerService.findAllByDepartment("").stream().map(LecturerMapper::toResponseDto).collect(Collectors.toList());
        return ResponseEntity.ok(list);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LecturerResponseDTO> update(@PathVariable Integer id, @RequestBody CreateLecturerDTO dto) {
        Lecturer existing = lecturerService.findById(id);
        if (existing == null) return ResponseEntity.notFound().build();
        LecturerMapper.updateEntityFromDto(dto, existing);
        Lecturer saved = lecturerService.save(existing);
        return ResponseEntity.ok(LecturerMapper.toResponseDto(saved));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        Lecturer existing = lecturerService.findById(id);
        if (existing == null) return ResponseEntity.notFound().build();
        lecturerService.findById(id);
        return ResponseEntity.noContent().build();
    }

}
