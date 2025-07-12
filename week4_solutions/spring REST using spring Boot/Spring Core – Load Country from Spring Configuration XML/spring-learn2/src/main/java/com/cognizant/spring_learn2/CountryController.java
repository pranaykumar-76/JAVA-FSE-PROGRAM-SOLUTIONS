package com.cognizant.spring_learn2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @Autowired
    private Country country;

    @GetMapping("/country")
    public Country getCountry() {
        return country;
    }
}
