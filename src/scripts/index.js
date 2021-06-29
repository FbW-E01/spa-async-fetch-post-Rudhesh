// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

console.log("x")

const form = document.querySelector("#submit-form")

const name = document.querySelector("#name")

const email = document.querySelector("#email")

const password = document.querySelector("#password")

const message = document.querySelector("#message")

const check = document.querySelector("#checkbox")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for submiting your details")

    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        check: check.value
    };
    
    console.log(user)

   

const getUser = async () => {
   try{ const response = await  fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(user)
    })
    const data = await response.json()
    console.log(data)
    return data;
} catch (myErrorVariable) {
    console.log(myErrorVariable)
    console.warn("An error happened")
}
}    
getUser()

    
})


