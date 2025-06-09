/*
    CIT 281 Project 1
    Name: Noah Gagnier
*/

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday','thursday','friday','saturday']
const w = new Date();
let weekdayNumber = w.getDay();
let answer = weekdays[weekdayNumber];
console.log(answer);
