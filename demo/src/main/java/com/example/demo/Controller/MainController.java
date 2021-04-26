package com.example.demo.Controller;

import com.example.demo.Model.UserInput;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    @PostMapping("/main")
    public void onSubmit(@ModelAttribute("userInput") UserInput userInput) {
    }

    @GetMapping("/main")
    public void onGet(Model model) {
        UserInput userInput = new UserInput();
        model.addAttribute("userInput", userInput);
    }

}