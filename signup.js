let users = []

function register() {


    let name_input = document.getElementById('name-input').value
    let email_input = document.getElementById('email-input').value
    let CreatePass_input = document.getElementById('CreatePass-input').value
    let ConfirmPass_input = document.getElementById('ConfirmPass-input').value

    let user = {
        name: name_input,
        email: email_input,
        CreatePass: CreatePass_input,
        ConfirmPass: ConfirmPass_input,
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.getItem("users");

    document.getElementById('name-input').value = ""
    document.getElementById('email-input').value = ""
    document.getElementById('CreatePass-input').value = ""
    document.getElementById('ConfirmPass-input').value = ""

}


let userStorage = users
let i = 0
while (i < userStorage.length) {
    if (checkInputValue(email_input, userStorage[i].email)) {
        if (checkInputValue(CreatePass_input, userStorage[i].password)) {
            alert("Login successfully!")
            
        } else {
            alert("Wrong password!")

        }
    }
    i++
}


(async () => {
    // create and show the notification
    const showNotification = () => {
        // create a new notification
        const notification = new Notification('JavaScript Notification API', {
            body: 'This is a JavaScript Notification API demo',
            icon: './img/js.png'
        });

        // close the notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {

            window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/', '_blank');
        });
    }

    // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'You blocked the notifications';
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    granted ? showNotification() : showError();

})();

