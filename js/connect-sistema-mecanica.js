const minhaUrl = "https://apirest-mecanica.herokuapp.com/api/login"
const json = { username: "teste@teste.com.br", password: "123456" }
fetch(
    minhaUrl,
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    }
).then(function (response) {

    return response.json();

}).then(function (data) {

    console.log(data);

}).catch(function () {

    console.log("Houve algum problema!");

});