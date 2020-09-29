// Arrow Function

const showData = () => 'Goodbye World';
console.log(showData());

const showData2 = (firstName) => `Hello ${firstName}`;
console.log(showData2('Marry'));

// 2 Parameter
var add = (x,y) => x + y;
console.log(add(8,9));

/* Exercise
Convert to ES6 Syntax

function yearUntilRetirement(year, firstName) {
    var age = 28;
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + " retired in " + retirement + " years");
    } else {
        console.log(firstName + " is already retired.");
    }
}
*/

const yearUntilRetirement = (year, firstName) => {
    let age = 28;
    let retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retired in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}