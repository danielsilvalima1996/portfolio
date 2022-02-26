const urlGenericApi = "https://apirest-controle-chamados.herokuapp.com/api/status";
fetch(
    urlGenericApi,
    {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }
).then(function (response) {

    return response.json();

}).then(function (data) {

    console.log(data);

}).catch(function () {

    console.log("Houve algum problema!");

});