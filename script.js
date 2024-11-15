let senha = document.getElementById("senhaMed");
let senhaBtn = document.getElementById("senhaBtn");

let paciente = document.getElementById("pacienteMed");
let sala = document.getElementById("salaMed");

let resultado = document.getElementById("resultado");

let dados = [];

// Captura a hora atual
let horario = new Date();
let horas = horario.getHours();
let minutos = horario.getMinutes();
let tempo = `${horas}:${minutos}`;

// Evento para armazenar dados ao clicar no botão "Confirmar"
senhaBtn.addEventListener("click", function () {
  // Captura os valores dos campos
  dados = [senha.value, paciente.value, sala.value, tempo];

  // Exibe os dados na página
  resultado.textContent = dados.join(", ");
});

// Função para salvar os dados no sessionStorage
function salvarDados() {
  // Recupera os dados existentes ou inicializa um array vazio
  let dadosExistentes = JSON.parse(sessionStorage.getItem('meuArray')) || [];

  // Adiciona os novos dados ao array existente
  dadosExistentes.push(dados);

  // Armazena os dados no sessionStorage
  sessionStorage.setItem('meuArray', JSON.stringify(dadosExistentes));

  // Redireciona para a página de exibição de senhas
  window.location.href = 'index.html';
}

// Adiciona um evento ao botão "Ir para a Página de Senhas"
document.querySelector("a").addEventListener("click", salvarDados);
