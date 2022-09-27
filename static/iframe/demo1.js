a = 6; // 110
tulosta(binaariksi(a))
b = 3; // 011
tulosta(binaariksi(b))
tulosta(a ^ b); // XOR operaatio merkitään täällä '^' merkillä
// Odotetaan tulokseksi 5
tulosta(binaariksi(a ^ b))
// tai 101

tulosta(binaariksi("Wow"));


function tulosta(data) {
  console.log(data);
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
