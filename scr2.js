let teste = document.getElementById('historico');
let box = document.querySelector(".senhasChamando");

// Recupera os dados armazenados no sessionStorage
let array = JSON.parse(sessionStorage.getItem('meuArray')) || [];

console.log(array);  // Verifica se os dados estão sendo carregados corretamente

// Evento para mostrar o histórico de senhas chamadas
teste.addEventListener('click', function () {
  // Limpa o histórico atual
  box.innerHTML = '';

  // Verifica se há dados no array
  if (array.length > 0) {
    // Percorre o array de dados e cria as novas linhas na tabela
    array.forEach(dado => {
      let nvLinha = document.createElement('div');
      nvLinha.className = 'tabela';
      box.appendChild(nvLinha);

      let sn = document.createElement('div');
      sn.className = 'senha';
      nvLinha.appendChild(sn);
      sn.textContent = dado[0];  // Senha

      let pc = document.createElement('div');
      pc.className = 'paciente';
      nvLinha.appendChild(pc);
      pc.textContent = dado[1];  // Paciente

      let sl = document.createElement('div');
      sl.className = 'sala';
      nvLinha.appendChild(sl);
      sl.textContent = dado[2];  // Sala

      let hr = document.createElement('div');
      hr.className = 'horario';
      nvLinha.appendChild(hr);
      hr.textContent = dado[3];  // Horário
    });
  } else {
    // Caso não haja senhas chamadas
    let msg = document.createElement('p');
    msg.textContent = "Nenhuma senha chamada ainda.";
    box.appendChild(msg);
  }
});
