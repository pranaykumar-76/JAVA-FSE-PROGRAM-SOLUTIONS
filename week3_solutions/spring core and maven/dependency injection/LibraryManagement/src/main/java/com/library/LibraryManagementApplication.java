package com.library;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.*;
//AnnotationConfigApplicationContext
public class LibraryManagementApplication {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        BookService service = context.getBean(BookService.class);
        service.addBook("The Art of Computer Programming");

	}

}
