/* A program that prints all numbers from 1 to 100 with three excepts:
1- Print FIZZ for all numbers divisible by 3
2- Print BUZZ for all numbers divisible by 5 
3- Print FIZZBUZZ for both numbers divisible by 3 & 5*/

let i;

// Initiates the program to print numbers from 1 - 100
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5== 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}