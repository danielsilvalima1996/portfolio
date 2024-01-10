// Chamada da função para enviar mensagem
sendMessage(`Alguém visitou seu portfólio em ${new Date()}`);

function sendMessage(text) {
  // Substitua 'SEU_TOKEN' pelo token fornecido pelo BotFather
  const token = "6950991991:AAHKtB2hQZVxALvDEl-T0G-e1mWuT1Li53M";
  const chatId = "650115584";

  const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const json = {
    chat_id: chatId,
    text: text,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json),
  })
    .then(function (data) {
      console.log("enviou: ", data);
      doc.innerHTML = JSON.stringify(data);
    })
    .catch(function () {
      console.log("error");
      doc.innerHTML = JSON.stringify(data);
    });
}
