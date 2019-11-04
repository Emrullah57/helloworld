let metot1 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("metot1");
            resolve("");
        }, 25); 
    });
       
};

let metot2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("metot2");
            resolve("");
        }, 50); 
    });

};

let metot3 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("metot3");
            resolve("");
        }, 75); 
    });
       
};

metot1().then(() =>
metot2().then(() =>
metot3().then()
)
);

async function executeAsync(){
    await metot1();
    await metot2();
    await metot3();
}
executeAsync();

