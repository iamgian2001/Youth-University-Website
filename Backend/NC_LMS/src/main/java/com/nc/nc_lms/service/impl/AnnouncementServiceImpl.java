package com.nc.nc_lms.service.impl;

import com.nc.nc_lms.entity.Announcement;
import com.nc.nc_lms.repository.AnnouncementRepository;
import com.nc.nc_lms.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

    private final AnnouncementRepository announcementRepository;

    @Autowired
    public AnnouncementServiceImpl(AnnouncementRepository announcementRepository) {
        this.announcementRepository = announcementRepository;
    }

    @Override
    public Announcement save(Announcement a) {
        return announcementRepository.save(a);
    }

    @Override
    public Announcement findById(Integer id) {
        return announcementRepository.findById(id).orElse(null);
    }

    @Override
    public List<Announcement> findAll() {
        return announcementRepository.findAll();
    }

    @Override
    public void deleteById(Integer id) {
        announcementRepository.deleteById(id);
    }
}
