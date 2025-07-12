// Write an arrow functions named isEven() that takes a single number as argument and returns if it is even or not

let isEven = (num)=>{
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(10));