var Greetr = require("./greet");

var greeter1 = new Greetr();

greeter1.on("greet", function () {
    console.log("Someone Greeted!");
});

greeter1.greet();