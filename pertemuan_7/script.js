/*
    Conditional
*/

// if else
const harga = 10000;
let uang = 12000;

if(uang >= harga ){
    console.log("Uang mencukupi. Kembalian = " + (uang - harga));
}
else if(uang < harga ){
    console.log("Uang tidak mencukupi");
}
else{
    console.log("Uang tidak diketahui");
}

// switch case
let rating = 4;

switch(rating){
    case 1: console.log("Sangat buruk");
        break;
    case 2: console.log("Buruk");
        break;
    case 3: console.log("Cukup");
        break;
    case 4: console.log("Baik");
        break;
    case 5: console.log("Sangat baik");
        break;
    default: console.log("Rating tidak diketahui");
}

/*
    Loop
*/

// for loop
for(let i=0; i<10; i++){
    console.log("Mahasiswa #"+ (i+1));
}

// for/in loop
let mahasiswa = {
    namaDepan: "McCliff",
    namaBelakang: "Mandagi",
    fakultas: "Ilmu Komputer"
 }

 for (x in mahasiswa) {
   console.log(x, ':', mahasiswa[x]);
 }

 // for/of loop
 let listMatakuliah = ["Kalkulus",  
   "Computer Programming", 
   "Artificial Intelligence",
   "Web Programming"
];

for (y of listMatakuliah) {
  console.log(y);
}

// while loop
let student = ["McCliff","Mandagi","Fakultas Ilmu Komputer"];
let i = 0;

while(i < student.length){
    console.log(student[i]);
    i++;
}   

// do while loop
let a = 0;

do{
    console.log("Dosen #" + (a+1));
    a++;
}while(a <= 9)