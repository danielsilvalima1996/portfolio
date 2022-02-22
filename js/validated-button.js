function validatedButton() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let btnSubmit = document.getElementById('btnSubmit');

    phone = phone.replace(/\D/g, "");

    if ((name.length >= 5 && name.length <= 50) &&
        (phone.length >= 10 && phone.length <= 11) &&
        (email.length >= 3 && email.length <= 255) &&
        (message.length >= 5 && message.length <= 400)) {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}