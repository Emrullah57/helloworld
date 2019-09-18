var dizi= new Array("kiraz","karpuz","elma","armut","muz"); 


function _ara(array,ara){
var sonuc = new Array();
for(i=0;i<array.length;i++){
        a = array[i];
        if(a.search(new RegExp(ara, "i"))!=-1) {
        sonuc[i]=a;
        }
        else
        continue;
 
}
return sonuc;
}


console.log(_ara(dizi,"uz"))