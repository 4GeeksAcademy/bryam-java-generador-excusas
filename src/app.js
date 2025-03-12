import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");


const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const numeroAleatorio = (arr) => {
  return Math.floor(Math.random()* arr.length)
}

console.log (numeroAleatorio (who))
console.log (numeroAleatorio (action))
console.log (numeroAleatorio (what))
console.log (numeroAleatorio (when))

const extractsAnArrayValue =(arr) => {
  return arr[numeroAleatorio(arr)]
}

console.log(extractsAnArrayValue(what));

const concatenate = (arr1, arr2, arr3, arr4) => {
  return "${arr1} ${arr2} ${arr3} ${arr4}"
}
console.log(concatenate(extractsAnArrayValue(who), extractsAnArrayValue(action), extractsAnArrayValue(what), extractsAnArrayValue(when)));

const generateExcuse = () => {
  return concatenate(extractsAnArrayValue(who), extractsAnArrayValue(action), extractsAnArrayValue(what), extractsAnArrayValue(when));
}


};