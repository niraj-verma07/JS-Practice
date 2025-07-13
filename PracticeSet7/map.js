//Create a new array using the map function whose each element is equal to the
// original element plus 5

let nums = [1, 2, 3, 4, 5];

let newArr = nums.map((el)=>{
    return el+5;
});

console.log(newArr);