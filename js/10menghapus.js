// menghapus properti
let tubuh = {
    bugar: true,
    sehat: true,
    roda: 2
};
delete tubuh.roda;
delete tubuh['roda'];

console.log(tubuh); 
