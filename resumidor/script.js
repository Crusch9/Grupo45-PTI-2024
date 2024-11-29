// Navegação entre telas
const screens = document.querySelectorAll('.screen');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Atualizar telas
    screens.forEach(screen => screen.classList.remove('active'));
    screens[index].classList.add('active');

    // Atualizar menu ativo
    menuItems.forEach(btn => btn.classList.remove('active'));
    item.classList.add('active');
  });
});

// Função para enviar texto e mostrar o resumo
document.getElementById('summarizeButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');

  if (inputText.trim() === '') {
    outputText.textContent = 'Por favor, insira um texto.';
    return;
  }

  fetch('http://localhost:3000/resumo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: inputText }),
  })
    .then(response => response.json())
    .then(data => {
      outputText.textContent = data.resumo || 'Erro ao gerar o resumo.';
    })
    .catch(() => {
      outputText.textContent = 'Erro ao se conectar ao servidor.';
    });
});

// Função para gerar outra versão do resumo
document.getElementById('generateAnotherButton').addEventListener('click', () => {
  alert('Gerando outra versão do resumo...');
  document.getElementById('outputText').textContent = 'Nova versão do resumo será gerada aqui.';
});

// Função para compartilhar o resumo
document.getElementById('shareButton').addEventListener('click', () => {
  const text = document.getElementById('outputText').textContent;
  if (navigator.share) {
    navigator.share({
      title: 'Resumo gerado',
      text: text,
    }).catch((error) => alert('Erro ao compartilhar: ' + error));
  } else {
    alert('O compartilhamento não é suportado neste navegador.');
  }
});

// Função para salvar o resumo em PDF
document.getElementById('savePdfButton').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const text = document.getElementById('outputText').textContent;

  if (text.trim() === '') {
    alert('Por favor, gere um resumo primeiro.');
    return;
  }

  doc.text(text, 10, 10);
  doc.save('resumo.pdf');
});
