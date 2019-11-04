//1- Kullanıcıdan alınan 3 tamsayının bir dik üçgenin üç kenarı olup olamayacağına karar veren programı yazınız.
/*a = 3;
b = 4;
c = 5;
buyuk=(Math.max(a,b,c))
if (buyuk == c) {
    {s1=a;s2=b}
}
if (buyuk == b) {
    {s1=a;s2=c}
}
if (buyuk == a) {
    {s1=c;s2=b}
}
if (buyuk*buyuk == s1*s1+s2*s2) {
    console.log("Dik Üçgen");
}
else {
    console.log("Dik Üçgen Değil");
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2- 1’den 1000’e kadar olan sayılardan 10’a ve 9’a tam bölünenlerin toplamını bulan programı yapın
/*let toplam = 0;
for (let i = 1; i <=1000; i++) {
    if ((i%9 == 0) && (i%10 == 0)) {
        toplam += i;
    }
}
console.log(toplam);*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3-Sistem tarihinden gün değerini alarak çift veya tek sayı olup olmadığını bulan programı yapın
/*let zaman = new Date()
gun = zaman.getDate();
if (gun%2 == 0) {
    console.log("Çift")
}else{
    console.log("Tek")
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4- Girilen bir ifadeyi ikiye ayırarak ekranda yazan programı yapın
/*let metin 
metin = "Emrullah Demircan AMP12/D 484 /  Bilşim Teknolojileri / Veri Tabanı";
kr=metin.length;
yr=parseFloat(kr/2);
console.log(metin.substr(0,yr))
console.log(metin.substr(yr,yr+1))*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5- Kullanıcının girdiği bir sayının faktöriyelini , aynı sayının 1’den kendisine kadar olan sayıların toplamına bölen programı yapın.
/*function faktor(say)
{
faktoriyel=1;
for(i=1;i<=say;i++)
{
faktoriyel=faktoriyel*i;
}
return faktoriyel;
}
function toplam(say1)
{
toplam=0;
for(i=1;i<=say1;i++)
{
toplam=toplam+i;
}
return toplam;
}
sayi = 10;
console.log(faktor(sayi)/toplam(sayi));*/