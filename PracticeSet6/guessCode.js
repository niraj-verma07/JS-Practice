// What is the ouput of the following code

const object = {
    message : "Hello, World!",

    logMessage(){
        console.log(this.message);
    }
};

object.logMessage(); // Hello, World!

setTimeout(object.logMessage, 1000); //Undefined