// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email");
console.log

// 1. Then

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    //  console.log(response.json())
    response.json().then(data => {
        console.log(data)
        emailRef.innerHTML = data.email;
    })
})

// New Cleaner way of what is above starts at
// 9:10
fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    return response.json()
})
.then(data => {
    console.log(data)
});



// 2. Async/Await


