function getPost() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((post) => {
            for (let index = 0; index < 1; index++) {
                div.innerHTML += ` 
            
            ${post[con].complated}
            ${post[con].id}            
            `

                con = con + 1;
            }
        })
        .catch((eror) => {
            console.log(eror);
        })
}