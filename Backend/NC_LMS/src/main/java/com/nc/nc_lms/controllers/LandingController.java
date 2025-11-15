package com.nc.nc_lms.controllers;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LandingController {

    @GetMapping("/landing")
    public String landing(){
        return "landing";
    }
}


