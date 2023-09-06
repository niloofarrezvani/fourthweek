
const userInput = prompt("write a sentens:");
function deletevowels(str){
    // const arr=[a,e,i,o,u];
    return str.replace(/[A,E,I,O,U,a,e,i,o,u]/g,"");
}
console.log(deletevowels(userInput));