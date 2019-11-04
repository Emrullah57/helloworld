let dizi = [1,2,3,4,5,6,7,8,9,10];
console.log("Dizinin ilk boyutu: " + dizi.length +"<br>");
let alinanDegerler = dizi.slice(3, 7);
console.log("Alınan değerler: " + alinanDegerler + "<br>")
console.log("Dizinin yeni boyutu: " + dizi.length +"<br>");
for (let i = 0; i < dizi.length; i++) {
    console.log(dizi[i] + ", ");
    
}