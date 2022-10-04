a = 6; 
tulosta(binaariksi(a)); // 110
tulosta(binToDec("110")); // 6 muunna binäärimerkkijono desimaaliluvuksi

b = 3; 
tulosta(binaariksi(b)); // 11
tulosta(a ^ b); // XOR operaatio merkitään täällä '^' merkillä
// Odotetaan tulokseksi 5
tulosta(binaariksi(a ^ b)); // tai 101

tulosta(binaariksi("Wow")); // 01010111 01101111 01110111
tulosta(binaariksi(binToDec("01010111") ^ binToDec("11000010"))) // W XOR 11000010
// Odotetaan tulokseksi 10010101

function tulosta(data) {
  console.log(data);
}

function hexBinaariksi(data){
  return (parseInt(data, 16).toString(2)).padStart(8, '0');
}

function binToDec(data){
  return parseInt(data, 2);
}

function binaariksi(data) {
  if (typeof data === "string") {
    let binaari = "";
    for (var i = 0; i < data.length; i++) {
      binaari += "0" + data[i].charCodeAt(0).toString(2) + " ";
    }
    return binaari.trim();
  } else if (typeof data === "number") {
    return (data >>> 0).toString(2);
  }
}
