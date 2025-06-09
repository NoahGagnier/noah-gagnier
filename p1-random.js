/*
    CIT 281 Project 1
    Name: Noah Gagnier
*/

const min = 5;
const max = 26;
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let length = getRandomInteger(min, max);
let result = "";

for (let i = 0; i < length; i++) {
  let letterNum = Math.floor(Math.random() * (26 - 0) + 0);
  let letter = alphabet[letterNum];
  result += letter;
}

//console.log(length)
console.log(length + " lowercase letters: " + result);
