//Square and sum the array elements using the arrow function and then find the
// average of the array

let nums = [1, 2, 3, 4, 5];

const sq = nums.map((num)=> num*num);

console.log(sq);

let sum = sq.reduce((acc, curr) => acc + curr, 0 );

let avg = sum / nums.length;

console.log(avg);