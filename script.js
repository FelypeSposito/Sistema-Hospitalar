let senha = document.getElementById("senhaMed");
let senhaBtn = document.getElementById("senhaBtn");

let paciente = document.getElementById("pacienteMed");
let pacienteBtn = document.getElementById("pacienteBtn");

let sala = document.getElementById("salaMed");
let salaBtn = document.getElementById("salaBtn");

let resultado = document.getElementById("resultado");

let dados = [];

let horario = new Date()

let horas = horario.getHours();
let minutos = horario.getMinutes();

let historico = document.getElementById('historico')

//
let tempo = [`${horas}:${minutos}`]
// VARIAVEL COM O TEMPO FORMATADO

senhaBtn.addEventListener("click", function () {
  dados.push(senha.value);
  dados.push(paciente.value);

  dados.push(sala.value);
  dados.push(tempo)
  resultado.textContent = dados.join(", ");

  let pri = dados[0];
  let seg = dados[1];
  let tri = dados[2];
  let qua = dados[3];
});


function passarArray() {
  // Armazena o array 'dados' no localStorage
  localStorage.setItem('meuArray', JSON.stringify(dados));
  window.location.href = 'usomedico.html';  // Redireciona para a página 2
}