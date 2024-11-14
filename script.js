let senha = document.getElementById("senhaMed");
let senhaBtn = document.getElementById("senhaBtn");

let paciente = document.getElementById("pacienteMed");
let pacienteBtn = document.getElementById("pacienteBtn");

let sala = document.getElementById("salaMed");
let salaBtn = document.getElementById("salaBtn");

let resultado = document.getElementById("resultado");

let dados = [];

let horario = new Date();
let horas = horario.getHours();
let minutos = horario.getMinutes();

// Formata o tempo como uma string "hora:minuto"
let tempo = `${horas}:${minutos}`;

// Evento para armazenar dados ao clicar no botão "Salvar Dados"
senhaBtn.addEventListener("click", function () {
  dados = [senha.value, paciente.value, sala.value, tempo];

  // Exibe os dados na página
  resultado.textContent = dados.join(", ");
});

// Função para armazenar os dados no localStorage e redirecionar para a página 2
function passarArray() {
  // Armazena o array 'dados' no localStorage
  localStorage.setItem('meuArray', JSON.stringify(dados));

  // Redireciona para a página 2
  window.location.href = 'usomedico.html';
}
