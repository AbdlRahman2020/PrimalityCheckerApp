package com.example.demo.Controller;

import com.example.demo.Model.UserInput;
//import org.apache.catalina.User;
//import org.springframework.http.HttpStatus;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;

@RestController
@RequestMapping("api/main")
@CrossOrigin
public class MainController {

    UserInput userInput = new UserInput();

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public String onSubmit(@RequestBody (required = false) String input) {
        int num = Integer.parseInt(input);
        userInput.setPosNumber(num);
        return userInput.isPrime();
    }

//    @GetMapping
//    public String onGet() {
//        return " ";
//    }

}