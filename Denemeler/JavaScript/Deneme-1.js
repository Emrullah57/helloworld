//FOR
/*var metin=window.prompt("Metin Girin")
//var adet=window.prompt("Kaç kere yazılacak")
for(var i=0;i<10;i++)
	{
        
      document.write("<span style='font-size:"+i+5+"px;'>"+metin+"</span><br>");
        
		
    }
    for (var i = 0; i < 10; i++) 
{ 
 document.write("<span style='font-size:" + i + 5 + "px;'>www.yazilimkodlama.com</span><br/>");
}
var yukseklik=window.prompt("Yüksekliği Girin");
var genislik=window.prompt("Genişliği Girin");
for (var i = 1; i <= yukseklik; i++)
            {
                for (var j = 1; j <= genislik; j++)
                {
                    if (i == 1 || i == yukseklik)
                        document.write("*");
                    else
                        if (j == 1 || j == genislik)
                            document.write("*");
                        else
				{
					document.write("&nbsp;");
					document.write("&nbsp;");
				}
                            
                }
                document.write("<br>");
            }*/

/*
//MAP            
var sayilar=[2,4,5,7,8,9];
var yeniDizi=sayilar.map(function(deger,indeks)
{
    if(indeks%2==0)
    {
        return Math.pow(deger,2);
    }
    else
    {
        return Math.pow(deger,3);
    }    
})
console.log(yeniDizi.toString());*/            
//FOREACH
/*var gunler=["pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"];
gunler.forEach(function(element,indeks)
{
    if(element[0]=="c")
    {
        alert(element+" "+indeks+" . sıradır");    
    }    
});
console.log(gunler);*/
//FİLTER
/*var dizi = [
    {meyve: "elma", mevsim: "yaz"},
    {meyve: "armut", mevsim: "yaz"},
    {meyve: "mandalina", mevsim: "kış"},
    {meyve: "portakal", mevsim: "kış"},
    {meyve: "çilek", mevsim: "yaz"},
    {meyve: "erik", mevsim: "yaz"},
    {meyve: "üzüm", mevsim: "kış"}
];

// filter() ile yaz meyvelerini filtreleyelim

var yazmeyveleri = dizi.filter(function(elmn){
    if(elmn.mevsim == "yaz"){
        return true;
    }
});

yazmeyveleri.forEach(function(sezonluk){
    document.write(sezonluk.meyve);
    document.write("<br>");
});*/
//FİND
/*var envanter=[
    {isim:'elma',miktar:2},
    {isim:'muz',miktar:0},
    {isim:'kiraz',miktar:5}
];
function kirazlaribul(meyve)
{
    return meyve.isim =='kiraz';
} 
console.log(envanter.find(kirazlaribul));*/

//VERİ TİPLERİ DÖNÜŞTÜRME NOT= BU HTML İÇİNDE YAZILACAK

/*<input type="text" id="kenar1" placeholder="Kısa kenar">
<input type="text" id="kenar2" placeholder="Uzun kenar">
<input type="button" value="Hesapla" id="hesapla">
<script>
function hesapla()
{
var k1=document.getElementById("kenar1").value;
var k2=document.getElementById("kenar2").value;
k1=parseInt(k1);
k2=parseFloat(k2);
var cevre=(k1+k2)*2;
alert("İki kenarı girilen dikdörtgenin çevresi: "+cevre);
}
var hesapbtn=document.getElementById("hesapla");
hesapbtn.onclick=hesapla;
</script>*/
//SWİTCH CASE
/*var sayi=1;
switch(sayi)
{
case 0:
    alert("sayı 0'dır.");
    break;

case 1:
    alert("sayı 1'dır.");
    break;

case 2:
    alert("sayı 2'dır.");
    break;

case 3:
    alert("sayı 3'dır.");
    break;

case 4:
    alert("sayı 4'dır.");
    break;
    default:
        alert("Sayı belli değildir.");
}
///////////////////////////////////////
switch(new Date().getDay())
{
    case 0:
        alert("Bugün günlerden Pazar.");
        break;
    case 1:
        alert("Bugün günlerden Pazartesi.");
        break;
    case 2:
        alert("Bugün günlerden Salı.");
        break;
    case 3: 
        alert("Bugün günlerden Çarşamba.");
        break;
    case 4:
        alert("Bugün günlerden Perşembe.");
        break;
    case 5:
        alert("Bugün günlerden Cuma.");
        break;
    case 6:
        alert("Bugün günlerden Cumartesi.");
        break;            
    default:
        alert("Hatalı sonuç :(");
}
/////////////////////
<input id="bilgi" type="text" value="Karpuz">
        <button onclick="kontrol()">Meyve Kontrol Et</button>
        <p id="goster"></p>
         
        <script>
        function kontrol() {
        var yazi;
        var meyve = document.getElementById("bilgi").value;
         
        switch(meyve) {
        case "Karpuz":
        yazi = "Karpuz Güzeldir!";
        break;
        case "Armut":
        yazi = "Armutu pek sevmem";
        break;
        case "Kiraz":
        yazi = "Mevsimi kısa ama tatlı bir meyvedir kiraz";
        break;
        default:
        yazi = "Üzgünüm! Yazdığın meyveyi tanımıyorum";
        }
        document.getElementById("goster").innerHTML = yazi;
        }
        </script>

        //////
var meyve='AT';
switch(meyve)
{
    case 'Elma':
    case 'Ayva':    
    case 'Kivi':    
    case 'Karpuz':
    alert("Evet bu yazdığın bir meyvedir.")
    break;
    case 'Domates':
    default:
        alert('Hayır bu bir meyve olamaz');
        console.log('Hayır bu bir meyve olamaz');    
}
//
<p id="demo"></p>
<script>
var text;
switch (new Date().getDay()) {
	case 1:
	case 2:
	case 3:
    case 4:
    case 5:
        text = "Hafta ici";
        break;
    case 0:
    case 6:
        text = "Hafta sonu";
        break;
    default:
        text = "Tanımsız";
}
document.getElementById("demo").innerHTML = text;
</script>
*/
//FONKSİYONLAR
/*
//Parametresiz Fonksiyon
var kullanicisayisi1=prompt("Lütfen ilk sayıyı giriniz:","");
var kullanicisayisi2=prompt("Lütfen ikinci sayıyı giriniz:","");
alert(parseInt(kullanicisayisi1)+parseInt(kullanicisayisi2));
//Parametresiz Fonksiyon
function topla()
{
   var kullanicisayisi1=prompt("Lütfen ilk sayıyı giriniz","");
   var kullanicisayisi2=prompt("Lütfen ikinci sayıyı giriniz","");
   alert(parseInt(kullanicisayisi1)+parseInt(kullanicisayisi2));
}
topla();
//Parametreli Fonksiyonlar
        function topla(ilksayi,ikincisayi)
{
    alert(Number(ilksayi)+Number(ikincisayi));
}
topla("4","5");

function topla(ilksayi,ikincisayi)
{
    alert(ilksayi+ikincisayi);
}
topla(4,5);
//RETURN DEYİMİ
function farkhesaplama(ilk,son)
{
    if(ilk<son)
    {
        alert("Ters giden birşeyler var")
      return;  
    }
    
    else
    {
      alert(ilk-son);
    }
}
farkhesaplama(15,20);
//Hazır Fonksiyonlar
var a=12;
var b="8";
document.write(a+eval(b));
//Callback Fonksiyon
function adimiyaz(ad,Callbak)
{
    setTimeout(function()
    {
        console.log("Adiniz: "+ad);
        Callbak('Demircan');
    },1000);
}
function soyadimiyaz(soyad)
{
    setTimeout(function()
    {
        console.log("Soyadiniz: "+ soyad);
    },500);    
}
adimiyaz("Emrullah",soyadimiyaz); 
function kareAl(data) {
    return new Promise((resolve, reject) => {

        if (data < 100)
            resolve(data * data);
        else
            reject('Aldın başını gidiyorsun !');
    });
}
kareAl(2).then((data)=>{
    console.log(data);
    return kareAl(data);
}).then((data)=>{
    console.log(data);
    return kareAl(data);
}).then((data)=>{
    console.log(data);
    return kareAl(data);
}).catch((err)=>{
    console.log(err);
});*/
/*function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg(); // Message: 🤡 <-- after 2 seconds
  function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 200);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    });
  }
  
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg();
 function merhaba(isim, mesaj)
 {
     alert("Merhaba "+isim);
     alert(mesaj);
 } 
 setTimeout(function(){
     merhaba("Emrullah DEMİRCAN","emrulahdemircan.com.tr");
 }, 1000);
  <button onclick="zamanla();">Zamanla</button>
    <button onclick="iptal();">İptal</button>
    <script>
      var zaman;
      function zamanla() {
        zaman = setTimeout(function() {
          alert("5 sn geçti");
        }, 5000);
      }
    
      function iptal() {
        clearTimeout(zaman);
      }
    </script>
    ////////////////////////////////////////////////////////
    Her 3 saniyede mesaj veriyor.!!!!!!!!!!!!!!
    setInterval(function(){
        alert("Merhaba");},3000);*/
        
        
