package com.nc.nc_lms.mapper;

import com.nc.nc_lms.DTO.AnnouncementDTO;
import com.nc.nc_lms.DTO.CreateAnnouncementDTO;
import com.nc.nc_lms.entity.Announcement;

public class AnnouncementMapper {

    public static Announcement toEntity(CreateAnnouncementDTO dto) {
        if (dto == null) return null;
        Announcement a = new Announcement();
        a.setTitle(dto.getTitle());
        a.setContent(dto.getContent());
        a.setDate(dto.getDate());
        a.setLocation(dto.getLocation());
        a.setAuthor(dto.getAuthor());
        return a;
    }

    public static AnnouncementDTO toDto(Announcement a) {
        if (a == null) return null;
        AnnouncementDTO dto = new AnnouncementDTO();
        dto.setId(a.getId());
        dto.setTitle(a.getTitle());
        dto.setContent(a.getContent());
        dto.setDate(a.getDate());
        dto.setLocation(a.getLocation());
        dto.setAuthor(a.getAuthor());
        return dto;
    }
}
