/*var metin = window.prompt("Metin girin");

for (var i = 0; i < 10; i++) {
    document.write("<span style='font-size:"+i+5+"px;'>"+metin+"<br>");
}*/
//////////////////////////////////////////////////////////////////////////
var yukseklik = window.prompt("Yüksekliği Girin");
var genislik = window.prompt("Genişliği Girin");
for (var i = 1; i <= yukseklik; i++) {
    for (var j = 1; j <= genislik; j++) {
        if (i == 1 || i == yukseklik)
            document.write("*");
        else
            if (j == 1 || j == genislik)
                document.write("*");
            else {
                document.write("&nbsp;");
                document.write("&nbsp;");
            }
    }
    document.write("<br>");
}