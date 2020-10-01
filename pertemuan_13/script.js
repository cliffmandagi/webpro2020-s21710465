// Rest & Spread Operator

// const hitung = (a, b, c, d, e) => {
//     const angka = [a, b, c, d, e];
//     let total = 0
//     for(let i=0; i < 7; i++){
//         total = total + angka[i];
//     }
//     return total;
// };

const hitung = (param1, param2, ...params) => {
    console.log(param1, param2, params);
    let total = 0;
    params.forEach((el) => {
        total = total + el;
    });
    return total;
}

hitung(1,2,3,4,5,6);

// Spread Operator

let angka = [1,2,3,4,5];
let angka2 = [...angka];
angka[0] = 10;

console.log(angka);
console.log(angka2);
console.log(...angka);

// Menggabungkan Array
let angka1 = [1,2,3,4,5]
let angka2 = [6,7,8,9,10]
let angka3 = [12,13]
const gabung = [...angka1, ...angka2, 11, ...angka3]
console.log(gabung)

let orang = {
    nama: "John",
    umur: 33
}

orang = {...orang, pekerjaan: "Guru", pendidikan: "S1"}
console.log(orang)

// Menggabungkan Objek
const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
const objGabung = {...obj1, ...obj2}
console.log(objGabung)