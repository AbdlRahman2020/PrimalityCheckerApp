package com.example.demo.Model;

import org.apache.catalina.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserInputTest {

    @Test // unit test
    void isPrime() {
        UserInput input = new UserInput(); // Arrange

        input.setPosNumber(9); // Act
        assertEquals(" NOT prime.",input.isPrime()); //Assert

        input.setPosNumber(22);
        assertEquals(" NOT prime.",input.isPrime());

        input.setPosNumber(1);
        assertEquals(" NOT prime.",input.isPrime());

        input.setPosNumber(99);
        assertEquals(" NOT prime.",input.isPrime());

        input.setPosNumber(23);
        assertEquals(" prime.",input.isPrime());
    }
}