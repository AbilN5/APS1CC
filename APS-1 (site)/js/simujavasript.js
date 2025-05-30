document.addEventListener('DOMContentLoaded', function () {
document.getElementById('simu').addEventListener('click', function() {
  console.log("element clicked");
  document.getElementById("simulador-overlay").style.visibility = "visible";
  document.getElementById("simulador-overlay").style.opacity = "1";
});

document.getElementById('fecharSimulador').addEventListener('click', function() {
  document.getElementById("simulador-overlay").style.visibility = "hidden";
  document.getElementById("simulador-overlay").style.opacity = "0";
});


function abrirSimulador() {
  document.body.innerHTML
}

document.getElementById('formSimulador').addEventListener('submit', function(event) {
  event.preventDefault();

  const cultura = document.getElementById('cultura').value;
  const solo = document.getElementById('solo').value;
  const regiao = document.getElementById('regiao').value;

  if (!cultura || !solo || !regiao) {
    document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  // Simulação simples baseada em combinações
  let economia = 0;

  if (solo === 'argiloso') economia += 10;
  if (regiao === 'sul' || regiao === 'sudeste') economia += 15;
  if (cultura === 'soja') economia += 20;
  if (cultura === 'milho') economia += 10;

  // Ajuste aleatório de 5%
  economia += Math.floor(Math.random() * 5);

  document.getElementById('resultado').textContent = 
    `Com base na sua escolha, a estimativa de economia de recursos naturais é de aproximadamente ${economia}%`;
});
});
