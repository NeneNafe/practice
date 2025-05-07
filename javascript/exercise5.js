/* 
- A recursive function isEven
- Accepts a single parameter n(a positive, whole number)
- Returns True when Even and False when Odd.
*/

function isEven(N) {
    if (N == 0) {
        return true;  // Zero is Even
    }
    else if (N == 1) {
        return false;  // One is Odd
    }
    else {
        return isEven(N -2);  // Recursice call made
    }
}
console.log(isEven(50));  // true
console.log(isEven(75));  // false
console.log(isEven(-1));  // Error - Stack Overflow