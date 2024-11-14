let teste = document.getElementById('teste');
const array = JSON.parse(localStorage.getItem('meuArray'));  // Recupera o array do localStorage

// Verifica se o array foi encontrado
teste.addEventListener('click', function () {
  if (array) {
    alert('Array encontrado: ' + array.join(", "));
  } else {
    alert('Array não encontrado');
  }
});
