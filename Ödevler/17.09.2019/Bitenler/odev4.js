const axios = require("axios");

function getPost(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((post)=>{
       console.log(post)
    })
    .catch((eror)=>{
        console.log(eror);
    })
}

getPost();