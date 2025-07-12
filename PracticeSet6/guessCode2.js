// What is the ouput of the following code

let length1 = 4;

function callback(){
    console.log(this.length);
}

const object = {
    length1 : 5,
    method(callback){
        callback();
    },
};

object.method(callback, 1, 2);