/*
deklarasi variabel menggunakan 3 cara:
    - var: redeclared
    - let: cannot redeclared, block scope 
    - const: cannot redeclared, cannot reassigned, block scope
variabel: wadah untuk menyimpan informasi bernilai tunggal
tipe data: integer (angka bulat), string (huruf), double (angka pecahan)

javascript tidak perlu menulis tipe data secara implisit
interpolasi: ${ nama_variabel }

jenis-jenis kesalahan:
- syntax error: salah dalam penulisan
- logical error: secara logika ada kesalahan
- mathematic error: pembagian dimana nilai penyebut adalah 0

block scope: cakupan program { } 
*/

var a = 10; // deklarasi 1
var a = 12; // deklarasi 2
var b = 5;
var c = a + b;  // 17 integer
var d = "halo";     // string 
var hasil = c * d;
console.log("Hasil: " + hasil); // NaN: Not a Number 

var angka1 = 50;
var angka2 = 0;
var pembagian = angka1 / angka2;
console.log("Pembagian: " + pembagian); // infinity 

var nama = "Yusuf Rizal";
var sapa = 'Halo, apa kabar?';
console.log(nama + " " + sapa);

var nama_depan = "Yusuf";
var nama_belakang = 'Rizal';
console.log("Nama lengkap adalah " + nama_depan + " " + nama_belakang);

var desimal = 7.25;
console.log("Desimal: " + desimal);

var x = 100;    // integer
var y = "Belajar JavaScript";   // string 

// ----------------------------------------------------------------

let nama1 = "Yusuf Rizal";   // deklarasi 1
let nama2 = "Benazir Shea";  // deklarasi 2
console.log("Nama dengan let:" + nama1 + " dan " + nama2);

let namaku = "Yusuf Rizal"; // namaku 1
{
    let namaku = "Benazir Shea";    // namaku 2
}
// kirim nilai ke HTML
// document.getElementById("demo").innerHTML = namaku;

// --------------------------------------------------------------------
/*
bentuk data: array
wadah untuk menyimpan informasi bernilai jamak dengan tipe data yg seragam.
array memiliki indeks yg diawali dari 0.
panjang array bisa dihitung (length). 
setiap 1 nilai dalam array disebut elemen array.
*/

// var mobil = "BMW";      // nilai tunggal
const mobil = ["BMW", "Mercedez", "Audi", "Toyota", "Honda"];   // nilai jamak
// mobil = ["Volvo", "Audi", "Mercedez"];  // tidak boleh di assign lagi

// menambah elemen kedalam array
mobil.push("Suzuki");

// mengubah elemen array
mobil[1] = "Mercedez Benz";

console.log(mobil);
// document.getElementById("mobil").innerHTML = mobil;

// -------------------------------------------------------------------
/* array dalam bentuk objek
deklarasi array objek menggunakan { } 
*/

// array dalam bentuk objek
const mycars = {
    type: "truck",
    tire: "4",
    color: "red"
};
// menambah property kedalam objek
mycars.owner = "Johnny";

// mengubah nilai property dari objek
mycars.color = "blue";

console.log(mycars);
document.getElementById("mycars")
    .innerHTML = "Owner: " + mycars.owner + ", " + 
                    "Type: " + mycars.type + ", " + 
                    "Tire: " + mycars.tire + ", " + 
                    "Color: " + mycars.color;