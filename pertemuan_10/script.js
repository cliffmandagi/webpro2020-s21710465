// Var, Let, Const

let nama = "test";

console.log(nama);

// Scope dalam JavaScript
// 1. Function scope (var)
// 2. Block Scope

for (var i=0;i<10;i++){
    console.log(i);
}
console.log(i);

// IIFE (Immediately Ivoked Function Expression)
// ES5
(function (){
    for (var i=0;i<10;i++){
        console.log(i);
    } 
})();

// ES6
{
    for (let i=0;i<10;i++){
        console.log(i);
    } 
}

const person = {
    firstName: "McCliff",
    lastName: "Mandagi",
    age: 20
}

console.log(`Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`)