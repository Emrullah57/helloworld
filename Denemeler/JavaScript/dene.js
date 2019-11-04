/*const stats= {
    max: 56.78, 
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    
    return function half({ max, min}) {
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));*/


///////////////////////////////////////////////////////////////

/*const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){

    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);*/

/////////////////////////////////////////////////////////////////

/*const [z, x, , y] = [1,2,3,4,5,6];
console.log(z, x, y);


let a = 8 , b = 6;
(() => {
    "use strict";
    [a,b] = [b,a]
})();

console.log(a);
console.log(b);*/

//////////////////////////////////////////////////////////////////////////

/*const LOCAL_FORECAST = {
    today:{ min:72, max:83 },
    tomorrow: { min:73.3, max:84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow: { max: maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));*/

///////////////////////////////////////////////////////////////////

/*let voxel = {x: 3.6, y: 7.4, z: 6.54};

let x = voxel.x;
let z = voxel.z;
let y = voxel.y;

const { x : a, y : b, z : c } = voxel;


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow: tempOfTomorrow} = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));*/

/////////////////////////////////////////////////////////////////////////////////////

/*const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);*/

////////////////////////////////////////////////////////////////////////////////////////

/*const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));* /

//////////////////////////////////////////////////////////////////////////////////////////////

/*const increment = (function() {
return function increment(number, value = 1) {
    return number + value;
};
})();
console.log(increment(5,2));
console.log(increment(5));*/

////////////////////////////////////////////////////////////////////////////////////////////////////

/*const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);*/

////////////////////////////////////////////////////////////////////

/*let myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));*/

///////////////////////////////////////////////////////////////////

/*const magic = () => new Date();*/

/////////////////////////////////////////////////////////////////////

/*function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI:3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);*/

/////////////////////////////////////////////////////////////////////

/*const s = [5,7,2];
function editInPlace() {
    "use strict";

    //s = [2,5,7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();

console.log(s);*/

/////////////////////////////////////////////////////////////////////

/*function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + "is cool!";

    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }

}
printManyTimes("freeCodeCamp");*/

/////////////////////////////////////////////////////////////////////

/*function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();*/

/////////////////////////////////////////////////////////////////////////////

/*let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();*/

//////////////////////////////////////////////////////////////////////////////

/*function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0));*/

/////////////////////////////////////////////////////////////////////////

/*function checkEqual(a, b) {
    return a === b ? true : false;

    return a === b;
}

checkEqual(1,2);*/

/////////////////////////////////////////////////////////////////////////

/*function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");*/

//////////////////////////////////////////////////////////////////////////

/*function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");*/

////////////////////////////////////////////////////////////////////////////

/*function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log(myRandom);*/

////////////////////////////////////////////////////////////////////////

/*let randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());*/

/////////////////////////////////////////////////////////////////

/*function randomFraction(){
    return Math.random();
}

console.log(randomFraction());*/

///////////////////////////////////////////////////////////////////

/*let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock","lastName");

console.log(data);*/

/////////////////////////////////////////////////////////

/*var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);*/

//////////////////////////////////////////////////////////

/*function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.lenght; i++) {
        for (var j=0; j < arr[i].lenght; j++) {
            product *= [i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);*/

/////////////////////////////////////////////////////////

/*var myArr = [2,3,4,5,6];
var total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];

}

console.log(total);*/

//////////////////////////////////////////////////////////

/*var myArray = [];

for (var i = 9; i > 0; i -= 2){
    myArray.push(i);
}

console.log(myArray);*/

//////////////////////////////////////////////////////////

/*var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);*/

//////////////////////////////////////////////////////////

/*var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":{
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439":{
        "album":"ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === "") {
        delete collection[id][prop];
    }else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }

    return collection;
}

updateRecords(2468,"tracks","test");
console.log(updateRecords(5439,"artist","ABBA"));*/