const submitBtn = document.getElementById("submitBtn")
const formEmail = document.getElementById("formEmail")
const formStatusMessage = document.getElementById("formStatusMessage")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    showErrorSuccess()
})

function showErrorSuccess () {
    showSubmitStatus()
    colorInputBorder()
}

function colorInputBorder() {
    if (formStatusMessage.textContent !== "Success!") {
        formEmail.style.border = "1px solid #f00"
    } else {
        formEmail.style.border = 'none'
    }
}

function showSubmitStatus () {
    let inputValue = formEmail.value

    if (inputValue.indexOf("@") > 0) {
        formStatusMessage.textContent = "Success!"
        formStatusMessage.classList.remove("red-text")
        formEmail.value = ""
    } else {
        formStatusMessage.textContent = "Check your email please"
        formStatusMessage.classList.add("red-text")
    }
}