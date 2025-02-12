package com.mindsprint.project1.basics;

import java.util.Scanner;

public class Conditional {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter First Number");
        int num1= scanner.nextInt();
        System.out.println("Enter second Number");
        int num2= scanner.nextInt();
        System.out.println("num1>num2: "+ (num1>num2)); //false
        System.out.println("num1<num2: "+ (num1<num2)); //true
        System.out.println("num1>=num2: "+ (num1>=num2)); //false
        System.out.println("num1<=num2: "+ (num1<=num2)); //true
        System.out.println("num1==num2: "+ (num1==num2)); //false
        System.out.println("num1!=num2: "+ (num1!=num2)); //true
    }
}
