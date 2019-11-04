/*Duzenli = /No+/;
        Sonuc1 = Duzenli.exec("myNoootlar.com");

        Sonuc2 = Duzenli.exec("myNotlar.com");
       
        Sonuc3 = Duzenli.exec("myNtlar.com");

        document.write(Sonuc1 + "<br>");
        document.write(Sonuc2 + "<br>");
        document.write(Sonuc3 + "<br>");*/

/*Duzenli = /m.N.tl.r.c.m/;
Sonuc1 = Duzenli.exec("myNoootlar.com");

Sonuc2 = Duzenli.exec("myNotlar.com");

Sonuc3 = Duzenli.exec("myNtlar.com");

document.write(Sonuc1 + "<br/>");
document.write(Sonuc2 + "<br/>");
document.write(Sonuc3 + "<br/>")*/

//Duzenli = /.*/;
//document.write(Duzenli.exec("myNotlar.com Türkçe JavaScript kaynağıdır!*"));

//Duzenli = /.*/;
//document.write(Duzenli.exec("myNotlar.com Türkçe JavaScript kaynağıdır!*"));  

/*Duzenli = /kaynağıdır!$/;
Sonuc1 = Duzenli.exec("myNotlar.com Türkçe JavaScript kaynağıdır!");

Sonuc2 = Duzenli.exec("Türkçe JavaScript kaynağı = myNotlar.com");

document.write(Sonuc1 + "<br/>");
document.write(Sonuc2 + "<br/>");*/

/*function EpostaKontrol() {
        let DuzenliEposta = /\w{4-10}/;

        let Giris = prompt("Lütfen şifre giriniz.");

        if (DuzenliEposta.test(Giris)) {
                alert("E-posta adresi geçerli!");
        }else{
                alert("Girişiniz geçerli bir e-posta adresi değil!");
        }

}*/

/*let metin ="Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli = new RegExp("Ba","m");

duzenli=/Ba/m;
if (duzenli.test(metin)) {
        document.write("bulundu");
}else{
        document.write("bulunamadı");
}*/

/*let metin = "Seyfettin KAHVECİ";
let duzenli = new RegExp("KAH","g");
if (duzenli.global == true) {
        document.write("g parametresi kullanılmış.");
}else{
        document.write("g parametresi kullanılmamış.");
}*/

/*let metin = "Seyfettin KAHVECİ";
let duzenli = new RegExp("EY","i");
if (duzenli.ignoreCase == true) {
        document.write("i parametresi kullanılmış.");
}else{
        document.write("i parametresi kullanılmamış.");
}*/

/*let metin = "Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli = new RegExp("Ba","m");
if (duzenli.multiline == true) {
        document.write("m parametresi kullanılmış.");
}else{
        document.write("m parametresi kullanılmamış.");
}*/

/*let metin = "Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli = new RegExp("Ba","g");
duzenli.test(metin);
document.write(RegExp.input);*/

/*let metin = "Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli = new RegExp("Ba","g");
duzenli.test(metin);
document.write(duzenli.lastIndex);*/

/*let metin="Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli=new RegExp("es","g");
duzenli.test(metin);
document.write(RegExp.lastMatch);*/

/*let metin = "Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli = new RegExp("es","g");
duzenli.test(metin);
document.write(RegExp.leftContext);*/

/*let metin = "Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli = new RegExp("es","g");
duzenli.test(metin);
document.write(RegExp.rightContext);*/

/*let metin = "Seyfettin \n KAHVECİ \n Balıkesir \n Üniversitesi";
let duzenli = new RegExp("es","g");
duzenli.compile("kah","gi");
if (duzenli.test(metin)) {
        document.write("kah bulundu");
}
else{
        document.write("kah bulunamadı");
}*/

/*let metin = "Seyfettin KAHVECİ Balıkesir Üniversitesi";
let duzenli = new RegExp("e","gi");
sonuc = duzenli.exec(metin);
document.write(sonuc);*/

/*let metin = "Seyfettin KAHVECİ";
let duzenli = new RegExp("KAH","g");
if (duzenli.test(metin)) {
        document.write("bulundu");
}else{
        document.write("bulunamadı");
}*/

/*let metin = "Seyfettin KAHVECİ Balıkesir Üniversitesi";
let duzenli = new RegExp("ec","gi");
sonuc = metin.search(duzenli);
document.write(sonuc);*/

/*let metin = "Seyfettin KAHVECİ Balıkesir Üniversitesi";
var duzenli = new RegExp("^sey","gi");
duzenli.test(metin);
document.write(duzenli.lastIndex);*/

/*let metin = "Seyfettin KAHVECİ Balıkesir Üniversitesi";
let duzenli = new RegExp("tesi$","gi");
duzenli.test(metin);
document.write(duzenli.lastIndex);*/

/*let metin = "Seyfettin KAHVECİ Balıkesir Üniversitesi";
let duzenli = /\bBa/;
document.write(metin.search(duzenli) - 1);*/


/*let metin = "Seyfettin KAHVECİ Balıkesir Üniversitesi";
let duzenli = /\Bfet/;
document.write(metin.search(duzenli));*/

/*let metin = "Seyfettin KAHVECİ Seyfettin";
let duzenli = new RegExp("in(?! KAH)","gi");
document.write(metin.search(duzenli));*/

/*let metin = "Seyfettin KAHVECİ Seyfettin";
let duzenli = new RegExp("in(?= Kah)","gi");
document.write(metin.search(duzenli));*/

/*let metin = "Seyfettin KAHVECİ\n Seyfettin";
let duzenli = new RegExp("\n");
document.write(metin.search(duzenli));  */

//[sey]
/*let metin = "Seyfettin KAHVECİ\t Seyfettin";
let duzenli = new RegExp("[eai]","gi");
document.write(metin.match(duzenli));*/

//[s-z]
/*let metin = "Seyfettin KAHVECİ Seyfettin";
let duzenli = new RegExp("[s-z]","gi");
document.write(metin.match(duzenli));*/

//[^sey]
/*let metin = "Seyfettin KAHVECİ Seyfettin";
let duzenli = new RegExp("[^eai]","gi");
document.write(metin.match(duzenli));*/

//[^s-z]
/*let metin = "Seyfettin KAHVECİ Seyfettin";
let duzenli = new RegExp("[^s-z]","gi");
document.write(metin.match(duzenli));*/

//.(nokta)
/*let metin = "Seyfettin KAHVECİ Seyfettin";
let duzenli = new RegExp("s.y","gi");
document.write(metin.match(duzenli));*/

//\w
/*let metin = "Seyfettin KAHVECİ Seyfettin"
let duzenli =/\w/gi;
document.write(metin.match(duzenli));*/

//\W
/*let metin = "Seyfettin KAHVECI Seyfettin -_";
let duzenli = /\W/gi;
document.write(metin.match(duzenli));*/

//\d
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = /\d/g;
document.write(metin.match(duzenli));*/

//\D
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = /\D/g;
document.write(metin.match(duzenli));*/

//\s
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = /\s/g;
document.write(metin.match(duzenli));*/

//{x}
/*let metin ="Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = new RegExp("9{2}","g");
document.write(metin.match(duzenli));*/

//{x,y}
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = new RegExp("9{1,2}","g");
document.write(metin.match(duzenli));*/

//{x,}
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli  = new RegExp("e{1,}","g");
document.write(metin.match(duzenli));*/

//+
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = new RegExp("e+","g");
document.write(metin.match(duzenli));*/

//?
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = new RegExp("e?","g");
document.write(metin.match(duzenli));*/

//*
/*let metin = "Seyfettin KAHVECİ Seyfettin 1992";
let duzenli = new RegExp("e*","g");
document.write(metin.match(duzenli));*/