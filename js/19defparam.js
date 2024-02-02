// default parameter
function warnaKesukaan(warna = "putih") {
    return "Warna kesukaan saya adalah " + warna;
}

let hasil = warnakesukaan();

console.log(hasil);

hasil = warnaKesukaan("biru");

console.log(hasil);