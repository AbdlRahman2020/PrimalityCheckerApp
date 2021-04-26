package com.example.demo.Model;

import org.jetbrains.annotations.NotNull;
import org.springframework.boot.context.properties.ConfigurationProperties;

public class UserInput {


    private int posNumber;

    public UserInput() {

    }

    public int getPosNumber() {
        return posNumber;
    }

    public void setPosNumber(int posNumber) {
        this.posNumber = posNumber;
    }

    public String isPrime() {

        if (posNumber <= 1) {
            return " NOT prime.";
        }
        for (int i = 2; i <= Math.sqrt(posNumber); i++) {
            if (posNumber % i == 0) {
                return " NOT prime.";
            }
        }
        return " prime.";
    }

} //class end
