package com.mindsprint.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/hello")
    public String getHello(){
        return "Hello From My New SpringBoot APP";
    }
    @GetMapping("/employee")
    public Employee getEmployee(){
        return new Employee(1,"Sonam Soni","IT",456789);
    }
}
