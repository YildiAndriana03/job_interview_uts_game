const tanah = document.querySelectorAll('.tanah'); // untuk mencari dan mengumpulkan documen
const tikus = document.querySelectorAll('.tikus'); //Tikus dan tanah adalah class 
// class ini kegunaan nya sebagai objec utama dalam game
const papanSkor = document.querySelector('.papan-skor');


let tanahSebelumnya;//Operator ini digunakan untuk menginisialisasi variabel dengan nilai tertentu (array)
let selesai; //let di gunakan untuk mendeklarasikan variable dalam js
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length); 
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) { //adalah pengkondisian yang digunakan untuk memeriksa apakah lubang yang dipilih secara acak
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min); // di gunakn untuk mengembalikan nilai dari sebuah fungsi
}

function munculkanTikus() { //ini sebagai method karena memerintah atau meng-eksekusi untuk memunculkan tikus
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}


function mulai() {
  selesai = false; //sebagai peng kondisian saat mulai di posisi 0 tapi ketika tikus di pukul maka point bertambah
  skor = 0;
  papanSkor.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++; // sebagai operator jadi ketika si tikus muncul terus di getok pakai palu maka skor bertambah
  this.parentNode.classList.remove('muncul');

  papanSkor.textContent = skor;
}

tikus.forEach(t => { // for berfungsi untuk pengulangan terhadap tikus yang muncul 
  t.addEventListener('click', pukul);
});