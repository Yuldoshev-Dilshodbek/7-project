let card = document.querySelector(".card");
let elImage =  document.querySelector(".card__image");
let elBtn = document.querySelector(".dark-light-mode");
let body = document.body;

elBtn.addEventListener("click" , () => {
    body.classList.toggle('dark');
}) 

fetch ("https://jsonplaceholder.typicode.com/users").then((item) => {
    return item.json();
}).then((data) => {
    console.log(data);
    // document.write(data)
    return (    
        data.map(item => {
            card.innerHTML += `
            <h1>${item.name}</h1>
            <h1>${item.username}</h1>
            <h1>${item.email}</h1>
            <h1>${item.address.street}</h1>
            `
        })

    )











})