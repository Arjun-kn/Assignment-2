let readLine = require("readline");
let name = readLine.Interface({
    input: process.stdin,
    output : process.stdout
})

name.question("Your name",ans=>{
    console.log("hello " + ans);
    name.close();
})
