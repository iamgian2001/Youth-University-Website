package com.nc.nc_lms.controllers;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LandingController {
    @RequestMapping
    public String landing(){
        return "landing";
    }
}


