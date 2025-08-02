window.addEventListener('load', function() {
  const loader = document.querySelector('.loader-wrapper');

  setTimeout(() => {
    loader.classList.add('fade-out');
    

    setTimeout(() => {
      loader.style.display = 'none';
    }, 300); 
  }, 1500); 
});