package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.jetbrains.annotations.NotNull;
import org.springframework.boot.context.properties.ConfigurationProperties;

public class UserInput {

    @JsonProperty
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

        if (this.posNumber <= 1) {
            return " is NOT Prime.";
        }
        for (int i = 2; i <= Math.sqrt(this.posNumber); i++) {
            if (this.posNumber % i == 0) {
                return " is NOT Prime.";
            }
        }
        return " is Prime.";
    }

} //class end
