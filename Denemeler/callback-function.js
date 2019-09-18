function adimiyaz(ad , callback) {
    setTimeout(() => {
        console.log("Adiniz: " + ad);
        callback("Demircan");
    }, 2000);
}

function soyadimiyaz(soyad) {
    setTimeout(() => {
        console.log("Soyadiniz: " + soyad);
    }, 1000);
}
adimiyaz("Emrullah",soyadimiyaz);