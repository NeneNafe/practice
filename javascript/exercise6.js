/*
- A function countBs that takes a string as an argument
- returns a number that indicates how many chars in uppercase are in the string
- A function countChar that accepts a second arg that indicates the char to be counted
*/

function countBs(string) {
    let count = 0;

    for (let char of string) {  // Iterates through the string
        if (char >= 'A' && char <= 'Z') {  // Checks for upprcase characters
            count ++;  // Adds 1 to evry found case
        }
    }
    return count;  
}

function countChar(string, charCount) {
    let count = 0;

    for (let char of string) {
        if (char === charCount) {  // current charr equals the one called by the func
            count++;  // Adds 1 to every similar char called
        }
    }
    return count;
}
// Test cases for countBs
console.log(countBs("Alinafe Nene Chiwaya"));
console.log(countBs("Mercy Bambi"));
console.log(countBs("dambula clan"));

// Test cases for countChar
console.log(countChar("Eloquent Javascript", "q"));
console.log(countChar("Yo! this is amazing!", "!"));
console.log(countChar(" ", " "));