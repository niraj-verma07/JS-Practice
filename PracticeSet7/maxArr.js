// // Find Maximum in an array

// let arr = [1,2,3,58,10,56,88];

// let max = 0;

// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);

let arr = [1,2,3,58,10,56,88, 188, 588];

let max = arr.reduce((max, el) =>{
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(max);