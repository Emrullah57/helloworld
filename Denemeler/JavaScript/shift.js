let dizi = [73, 46, 52, 61, 19, 88, 12, 27, 21, 79];
console.log("Dizinin ilk boyutu: " + dizi.length + "<br>");
dizi.shift();
console.log("Dizinin yeni boyutu: " + dizi.length + "<br>");
for (let i = 0; i < dizi.length; i++) {
    console.log(dizi[i] + ", ");
    
}
