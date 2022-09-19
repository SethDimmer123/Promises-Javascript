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

const statusRef = document.querySelector('.status')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

// 1. Then method
// getSubscriptionStatus().then(response => console.log(response))


// 2. Async/Await Method
async function main(){
    // console.log(getSubscriptionStatus())
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status
}


main();



// Promises problem starts at 23:24

/**
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new Promise inside of the function that:
 *      -if "VIP" resolve ("show video")
 *      -if "FREE" resolve("show trailer")
 *      -otherwise reject("no video")
 * 4. console.log the result of getVideo(status) in main()
 */


