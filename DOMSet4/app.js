let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(function(){
//         h1.style.color = color;
//         if(nextColorChange){
//              nextColorChange();
//         }
//     }, delay);
// }


// //Change color to red then orange and again into green in 1 - 1 sec (Callback Hell)
// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000);
//     });
// });

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num > 3){
            reject("Promise Rejected");
        }

        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve("color changed");
    }, delay);
    });
};

async function demo() {
    try{
        await changeColor("red", 1000); // Waits until first color changed then perform next color change
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("yellow", 1000);
    }catch(err){
        console.log("Error caught : ")
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new Number = "+ a+3);
}
