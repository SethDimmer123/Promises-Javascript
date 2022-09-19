// console.log(fetch("https://jsonplaceholder.typicode.com/users/1")) /*this is the promise in the console*/
// const emailRef = document.querySelector(".email");
// console.log(emailRef)

// 1. Then Method
// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    //  console.log(response.json())
    // response.json().then(data => {
        // console.log(data)
        // emailRef.innerHTML = data.email;
    // })
// })












// New Cleaner way of what is above starts at
// 9:10
// console.log(1)
// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    // return response.json()
// })
// .then(data => {
    // console.log(2)
    // emailRef.innerHTML = data.email
// });
// console.log(3)















// 2. Async/Await
async function main() {
console.log(1)
const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
console.log(2)
 const data = await response.json()
console.log(3)
emailRef.innerHTML = data.email
} 

main()


// This part ends at 18:58

// How to create and use a promise starts at 19:05

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

console.log(getSubscriptionStatus())


