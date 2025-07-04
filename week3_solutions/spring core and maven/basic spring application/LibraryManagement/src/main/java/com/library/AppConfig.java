package com.library;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.library.repository.BookRepository;
import com.library.service.BookService;

@Configuration
public class AppConfig {

    @Bean
    public BookRepository bookRepository() {
        return new BookRepository();
    }

    @Bean
    public BookService bookService() {
        return new BookService(bookRepository());
    }
}
