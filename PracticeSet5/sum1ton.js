// Create a function thats returns the sum of numbers from 1 to n

function sum(n){
    let sum = 0;

    for(let i = 1; i<=n; i++){
        sum = sum + i;
    }
    console.log(sum);
}

sum(10);
sum(2);