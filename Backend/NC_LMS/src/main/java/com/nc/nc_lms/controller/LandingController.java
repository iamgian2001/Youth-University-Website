package com.nc.nc_lms.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LandingController {

    @GetMapping("/landing")
    public String landing(){
        return "landing";
    }
}


