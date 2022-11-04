let form = document.querySelector("form"); 
let inputs = document.querySelectorAll("input"); 
let error = document.querySelectorAll(".error"); 
let errorMsg = document.querySelectorAll(".err-msg"); 

form.addEventListener("submit", (e) => {
    if (!inputs[0].value) {
        e.preventDefault(); 
        inputs[0].classList.add("pink-border")
        error[0].classList.remove("hidden")
        errorMsg[0].classList.remove("hidden")
    }
    if (!inputs[1].value) {
        e.preventDefault(); 
        inputs[1].classList.add("pink-border")
        error[1].classList.remove("hidden")
        errorMsg[1].classList.remove("hidden")
    }
    if (!inputs[2].value || !inputs[2].value.contains("@") || !inputs[2].value.contains(".")) {
        e.preventDefault(); 
        inputs[2].classList.add("pink-border")
        error[2].classList.remove("hidden")
        errorMsg[2].classList.remove("hidden")
    }
    if (!inputs[3].value) {
        e.preventDefault(); 
        inputs[3].classList.add("pink-border")
        error[3].classList.remove("hidden")
        errorMsg[3].classList.remove("hidden")
    }
})