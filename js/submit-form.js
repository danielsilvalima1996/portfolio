function submitForm() {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let phoneInput = document.getElementById('phone');
    let messageInput = document.getElementById('message');
    let successMessage = document.getElementById('success-message');
    let errorMessage = document.getElementById('error-message');
    let btnSubmit = document.getElementById('btnSubmit');    

    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let message = messageInput.value;

    phone = phone.replace(/\D/g, "");

    if (
        (name.length >= 5 && name.length <= 50) &&
        (phone.length >= 10 && phone.length <= 11) &&
        (email.length >= 3 && email.length <= 255) &&
        (message.length >= 5 && message.length <= 400)

    ) {


        let ddd = phone.substr(0, 2);
        phone = phone.substr(2);

        const token = "6950991991:AAHKtB2hQZVxALvDEl-T0G-e1mWuT1Li53M";
        const chatId = "650115584";

        const json = {
            chat_id: chatId,
            text: `Nome: ${name} | E-mail: ${email} | Telefone: (${ddd}) ${phone} | message: ${message}`,
          };
      
        const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;
        fetch(
            apiUrl,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
            }
        ).then(function (data) {

            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            messageInput.value = '';
            
            successMessage.hidden = false;

            setTimeout(() => {
                successMessage.hidden = true;
            }, 4000);

            btnSubmit.disabled = true;


        }).catch(function () {

            errorMessage.hidden = false;

            setTimeout(() => {
                errorMessage.hidden = true;
            }, 4000);

        });
    }
}
