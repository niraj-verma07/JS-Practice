let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){
    setTimeout(function(){
        h1.style.color = color;
        if(nextColorChange){
             nextColorChange();
        }
    }, delay);
}


//Change color to red then orange and again into green in 1 - 1 sec (Callback Hell)
changeColor("red", 1000, ()=>{
    changeColor("orange", 1000, ()=>{
        changeColor("green", 1000);
    });
});