//Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"


let country = ["Australia", "Germany", "United States of America"];

function longestName(country){
    let ansIdx = 0;
    for(let i =0; i< country.length; i++){
        let ansLen = country[ansIdx].length;
        let currenLen = country[i].length;

        if(currenLen > ansLen){
            ansIdx = i;
        }
    }
    console.log(country[ansIdx]);
};

longestName(country);