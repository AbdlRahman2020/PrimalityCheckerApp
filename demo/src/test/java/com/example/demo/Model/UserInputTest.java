package com.example.demo.Model;

import org.apache.catalina.User;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.*;

class UserInputTest {

    @Test // unit test
    void isPrime() {
        UserInput input = new UserInput(); // Arrange

        BigInteger bInt = new BigInteger("3419229223372036854775807");

        input.setPosNumber(bInt); // Act
        assertEquals(" is NOT Prime.", input.isPrime()); //Assert

        bInt = new BigInteger("22");
        input.setPosNumber(bInt);
        assertEquals(" is NOT Prime.",input.isPrime());

        bInt = new BigInteger("1");
        input.setPosNumber(bInt);
        assertEquals(" is NOT Prime.",input.isPrime());

        bInt = new BigInteger("99999999999999966666666666666666666666666");
        input.setPosNumber(bInt);
        assertEquals(" is NOT Prime.", input.isPrime());

        bInt = new BigInteger("23");
        input.setPosNumber(bInt);
        assertEquals(" is Prime.", input.isPrime());
    }
}