function checkField(field) {
    if (field == null || field.length <= 0) {
        return false
    } else {
        return true
    }
}
function checkLength(field) {
    if (field.length < 8) {
        return false
    } else {
        return true
    }
}
function checkMail(field) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.text(field) == false) {
        return false
    } else {
        return true
    }
}
let name_input = document.getElementById("name").value
let email_input = document.getElementById("email").value
let phone_input = document.getElementById("phone").value
let password_input = document.getElementById("password").value
let confirmpw_input = document.getElementById("confirm-pw").value
function checkRegister() {
    if (checkField(name_input) == false ||
        checkField(email_input) == false ||
        checkField(phone_input) == false ||
        checkField(password_input) == false ||
        checkField(confirmpw_input) == false) {
        alert("One or more fields are empty")
        return
    } else if (checkLength(name_input) == false ||
        checkLength) {
        alert("Name or password must have 8 characters length")
        return
    } else if (checkMail(email_input) == false ||
        checkLength) {
        alert("Wrong email format")
        return
    } else {
        alert("Register successfully!")
        return
    }
}