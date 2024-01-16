const form = document.querySelector("form");

const validateForm = (event) =>{

    event.preventDefault();
    console.log("Form Details");

    let uName = document.querySelector("#username").value;
    let pass = document.querySelector("#password").value;

    const passw = /^(?=.*\d)[A-Za-z0-9]{8,}$/
    let password = passw.test(pass)

    if(uName === "" || uName === " "){
        document.querySelector("#e1").innerHTML = "Username is required !";
    }
    if(pass === "" || pass === " "){
        document.querySelector("#e2").innerHTML = "Password is required !";
    }else if(!password){
        document.querySelector("#e2").innerHTML = "Password must have 8 characters and at least 1 digit";
    }
    if(uName !== "" && password){
        form.reset();
        document.querySelector("#success").innerHTML = "Form submitted succesfully!!"
    }

}

form.addEventListener("submit", validateForm);

const clearError = (error) => {
    error.innerHTML = "";
}
document.querySelector("#username").addEventListener('focus', () => {clearError(document.querySelector("#e1"))});
document.querySelector("#password").addEventListener("focus", () => {clearError(document.querySelector("#e2"))});