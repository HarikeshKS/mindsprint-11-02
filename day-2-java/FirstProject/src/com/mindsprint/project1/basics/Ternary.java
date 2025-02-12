package com.mindsprint.project1.basics;

import java.util.Scanner;

public class Ternary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter age");
        int age= scanner.nextInt();

        String result= (age>=18)? "Valid for Vote": "Not valid for Vote";
        System.out.println("Result is "+result);
    }
}
