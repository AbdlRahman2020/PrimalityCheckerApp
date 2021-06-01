package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigInteger;

public class UserInput {

    @JsonProperty
    private BigInteger posNumber;

    public UserInput() {

    }

    public BigInteger getPosNumber() {
        return posNumber;
    }

    public void setPosNumber(BigInteger posNumber) {
        this.posNumber = posNumber;
    }

    public String isPrime() {
        return posNumber.isProbablePrime(1) ? " is Prime." : " is NOT Prime.";
    }

} //class end