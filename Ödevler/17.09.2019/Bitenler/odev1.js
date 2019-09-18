let dizi = [
    {meyve: "kiraz"},
    {meyve: "karpuz"},
    {meyve: "elma"},
    {meyve: "armut"},
    {meyve: "muz"}
];

// filter() ile yaz meyvelerini filtreleyelim

let yazmeyveleri = dizi.filter((elmn) =>{
    if(elmn.meyve != "elma"){
        return true;
    }
});

yazmeyveleri.forEach((sezonluk) =>{
    console.log(sezonluk.meyve);
    
});