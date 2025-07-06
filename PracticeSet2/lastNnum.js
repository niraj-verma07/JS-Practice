// Write a js program to get the last n element of an array. [n can be any postive number]
// For example : for array [7, 9, 0, -2] and n = 3 
// print [9, 0, -2]

let arr = [7, 9, 0, -2];

let n = 3;

console.log(arr.slice(arr.length-n))