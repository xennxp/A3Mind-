//document.querySelectorAll('.card-btn').forEach(btn => {
   // btn.addEventListener('click', (e) => {
     // e.preventDefault();
      //alert('Este jogo ainda será adicionado!');
   // });
  //});
  //document.querySelector('.hero .btn').addEventListener('click', () => {
    //alert('Você será redirecionado para uma jornada de aprendizado!');
  //});

  <script>
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const progressBar = document.querySelector('.progress-bar');

  const scrollAmount = 240;

  nextBtn.onclick = () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    updateProgress();
  };

  prevBtn.onclick = () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    updateProgress();
  };

  function updateProgress() {
    const progress = track.scrollLeft / (track.scrollWidth - track.clientWidth);
    progressBar.style.width = `${progress * 100}%`;
  }

  track.addEventListener('scroll', updateProgress);
</script>