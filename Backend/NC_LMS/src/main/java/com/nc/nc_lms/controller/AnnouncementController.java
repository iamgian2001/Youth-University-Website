package com.nc.nc_lms.controller;

import com.nc.nc_lms.DTO.AnnouncementDTO;
import com.nc.nc_lms.DTO.CreateAnnouncementDTO;
import com.nc.nc_lms.entity.Announcement;
import com.nc.nc_lms.mapper.AnnouncementMapper;
import com.nc.nc_lms.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {

    private final AnnouncementService announcementService;

    @Autowired
    public AnnouncementController(AnnouncementService announcementService) {
        this.announcementService = announcementService;
    }

    @PostMapping
    public ResponseEntity<AnnouncementDTO> create(@RequestBody CreateAnnouncementDTO dto) {
        Announcement a = AnnouncementMapper.toEntity(dto);
        Announcement saved = announcementService.save(a);
        return ResponseEntity.ok(AnnouncementMapper.toDto(saved));
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnnouncementDTO> get(@PathVariable Integer id) {
        Announcement a = announcementService.findById(id);
        if (a == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(AnnouncementMapper.toDto(a));
    }

    @GetMapping
    public ResponseEntity<List<AnnouncementDTO>> listAll() {
        List<AnnouncementDTO> list = announcementService.findAll().stream().map(AnnouncementMapper::toDto).collect(Collectors.toList());
        return ResponseEntity.ok(list);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        Announcement a = announcementService.findById(id);
        if (a == null) return ResponseEntity.notFound().build();
        announcementService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
