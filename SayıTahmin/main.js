// Atamalar
let sayi = Math.floor(Math.random() * 10 + 1);
let button = document.getElementById("controlButton");
// let clear = document.getElementById("clear");
let sonuc = document.getElementById("sonuc");

// Fonksiyon
function tahminSayi() {
  let tahmin = document.getElementById("userSayi");
  let tahminVol = parseInt(tahmin.value);
  if (tahminVol < 0) {
    sonuc.innerHTML = "1-10 sayıları arasında bir değer giriniz.";
  } else if (tahminVol > 10) {
    sonuc.innerHTML = "1-10 sayıları arasında bir değer giriniz.";
  } else if (tahminVol === sayi) {
    // console.log('Tebrikler')
    sonuc.innerHTML = "Tebrikler";
  } else if (tahminVol > sayi) {
    // console.log('Daha küçük bir sayı tahmin ediniz.')
    sonuc.innerText = "Daha küçük bir sayı tahmin ediniz.";
  } else {
    // console.log('Daha büyük bir sayı tahmin ediniz.')
    sonuc.innerHTML = "Daha büyük bir sayı tahmin ediniz.";
  }
}

// Etkinlikler
button.addEventListener("click", tahminSayi);
// clear.addEventListener("reset", clearButton);
