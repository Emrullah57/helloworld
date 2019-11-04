//Dizi üzerinde okuma
/*var sehirler = ["İstanbul", "Ankara", "Adana", "Antalya", "Edirne", "Tekirdağ"];
for (var nesne of sehirler) {
    console.log(nesne);
}*/
//////////////////////////////////////////////////////////////////////////////
//String üzerinde okuma
/*var degisken = "Merhaba";
for (var harf of degisken) {
    console.log(harf);
}*/
////////////////////////////////////////////////////////////////////////////////
//Map nesnesi ile kullanım
/*var sehirler=new Map([[34,"istanbul"],[06,"Ankara"],[22,"Edirne"]]);
for (var [plaka,sehir] of sehirler) {
    console.log(plaka+"="+sehir);
}*/
////////////////////////////////////////////////////////////////////////////////
//Generator fonksiyon ile kullanımı
/*function* nesne() {
    let ad="Ali";
    let soyad="Al";
    yield sira1="İstanbul";
    yield sira2="Ankara";
    yield sira3="İzmir";
}
for (var sehir of nesne()) {
    console.log(sehir);
}*/
////////////////////////////////////////////////////////////////////////////////////
//Arguments nesnesi ile kullanım
/*function ornek() {
    for (let arg of arguments) {
        console.log(arg);
    }
};
ornek(1,3);
ornek(2,4,5);*/