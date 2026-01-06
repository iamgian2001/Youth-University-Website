package com.nc.nc_lms.DTO;

import lombok.Data;

@Data
public class CreateAnnouncementDTO {
    private String title;
    private String content;
    private String date;
    private String location;
    private String author;
}

