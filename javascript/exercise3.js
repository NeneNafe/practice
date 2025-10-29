/* A program that creates a string that represents an 8x8 grid 
- Uses newline chars to separate lines
- At each position, there is a space or #
*/ 

let size = 8;

// Outer loop for rows
for(let y = 0; y < size; y++) {
    let string = '';
    // Inner loop for columns
    for (let x = 0; x < size; x++) {
        string += ((y+x)%2) ? ' ' : '#'; // if condition is true then return the middle or otherwise
    }
    console.log(string);
}