package com.nc.nc_lms.service;

import com.nc.nc_lms.entity.Announcement;

import java.util.List;

public interface AnnouncementService {
    Announcement save(Announcement a);
    Announcement findById(Integer id);
    List<Announcement> findAll();
    void deleteById(Integer id);
}
