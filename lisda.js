
// do while loop
let angka = [];
let c = 5;
do {
    angka.push(i);
    c++;
} while (c <= 10);

// default parameter
function warnaKesukaan(warna = "putih") {
    return "Warna kesukaan saya adalah " + warna;
}

// rest parameter
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah = [...namaBuah1, ...namaBuah2];
