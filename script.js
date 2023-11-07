document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var confirmationMessage = document.getElementById("confirmationMessage");
    var readAloudButton = document.getElementById("readAloudButton");

    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar o envio padrão do formulário

        // Exibir a mensagem de confirmação
        confirmationMessage.textContent = "Seu currículo foi enviado com sucesso!";
        alert("Seu currículo foi enviado com sucesso!");
    });

    // Função para ler em voz alta o conteúdo da página
    readAloudButton.addEventListener("click", function () {
        var pageContent = document.body.textContent;
        var utterance = new SpeechSynthesisUtterance(pageContent);
        window.speechSynthesis.speak(utterance);
    });
});
