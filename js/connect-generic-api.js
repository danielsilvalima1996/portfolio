const urlGenericApi = "https://generic-api-daniel.herokuapp.com/api/contact/status";
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