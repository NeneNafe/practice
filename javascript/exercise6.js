/*
- Function that returns a number that indicates
-how many uppercase "B" characters are in a string
- A function that returns the number of time a char appears in a string
*/

function countChar(string, charToCount) {
    let count = 0;

    for (i = 0; i < string.length; i++) { // Indexes through the string from start to end
        if (string[i] == charToCount) { // Checks if the current is the called one
            count ++;
        }
    }
    return count;
}

function countBs(string) {
    return countChar(string, "B"); // Checks for then umber of uppercase B chars
}

// Test cases
console.log(countBs("Blushing Bride"));
console.log(countBs("Cake"));
console.log(countChar("Anaconda", "a"));
console.log(countChar("cocomelon", "o"));