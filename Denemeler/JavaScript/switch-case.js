/*switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
}
document.write(day);
///////////////////////////////////////////////////////////////////

<input id="bilgi" type="text" value="Karpuz">
    <button onclick="kontrol()">Meyve Kontrol Et</button>
    <p id="goster"></p>

function kontrol() {
    var yazi;
    var meyve = document.getElementById("bilgi").value;

    switch (meyve) {
        case "Karpuz":
            yazi = "Karpuz güzeldir!";
            break;
        case "Armut":
            yazi = "Armutu pek sevmem";
            break;
        case "Kiraz":
            yazi = "Mevsimi kısa ama tatlı bir meyvedir kiraz";
            break;
        default:
            yazi = "üzgünüm yazdığın meyveyi tanımıyorum";
    }
    document.getElementById("goster").innerHTML = yazi;
}
var meyve = 'Kivi';
switch (meyve) {
    case 'Elma':
    case 'Ayva':
    case 'Kivi':
    case 'Karpuz':
        alert("Evet bu yazdığın bir meyvedir.")
        break;
    case 'Domates':
    default:
        console.log('Hayır bu bir meyve olamaz');
}*/