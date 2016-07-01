"use strict";

var EventEmitter = require("events");

module.exports = class Greetr extends EventEmitter {
    constructor(){
        super();
        this.greeting = "This is first greeting";
    }

    greet(data){
        console.log(this.greeting);
        this.emit("greet");
    }
}
