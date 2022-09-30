let submitButton = document.getElementById("submit")
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email === "" || password === "") {
       return ShowAlert("All Feilds Are Required")

    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailRegex)){
        return ShowAlert("Please Enter A Valid Email Address")
    }

})


function ShowAlert(message) {
    let alertText = document.getElementById('alert-text').innerText = message
    let alertElement = document.getElementById("alert").style.opacity = "1"
}