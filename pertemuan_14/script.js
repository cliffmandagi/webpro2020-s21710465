// Dekonstruksi Array
let buah = ["Mangga", "Pisang", "Anggur"];

let [buah1, buah2, buah3] = buah;

console.log(buah1, buah2, buah3);

// Menukar nilai variabel
let a = 10;
let b = 15

[a,b] = [b,a];

// Dekonstruksi Object
let orang = {
    nama: "Joko",
    umur: 22,
    sudahMenikah: false
};

let { nama, age: umur, statusMenikah } = orang;

console.log(nama, age, statusMenikah);

// Dekonstruksi Object bertingkat
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
};
  
let {
    prestasi: { olahraga }
} = murid;
  
console.log(olahraga); // Output: juara 1
  