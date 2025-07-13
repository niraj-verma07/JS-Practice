// Create a function to find min number in the array.

function getMin(arr){
    let min = arr.reduce((min, el)=>{
    if(min < el){
        return min;
    }else{
        return el;
    }
});

console.log(min)
}


let arr = [1,5, 10, 20, 30];

getMin(arr);