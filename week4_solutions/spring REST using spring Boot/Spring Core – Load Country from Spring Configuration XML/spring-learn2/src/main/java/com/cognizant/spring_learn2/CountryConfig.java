package com.cognizant.spring_learn2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CountryConfig {
	
	@Bean
    public Country country() {
        return new Country("IN", "India");
    }

}


