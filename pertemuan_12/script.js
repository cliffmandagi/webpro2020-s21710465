// Arrow Function

const calcAge = () => {
    return 2020 - 1992;
}

// Bisa juga
// const calcAge = () => 2020 - 1992;

console.log(calcAge);

const years = [1990, 1992, 2001, 2005];

const calcAge5 = years.map(function (el) {
    return 2020 - el;
})

const calcAge6 = years.map((el) => 2020 - el);

console.log(calcAge6);

// Default Parameter

const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear;

console.log(calcAge(1991));