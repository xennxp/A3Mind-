document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Este jogo ainda será adicionado!');
    });
  });
  document.querySelector('.hero .btn').addEventListener('click', () => {
    alert('Você será redirecionado para uma jornada de aprendizado!');
  });