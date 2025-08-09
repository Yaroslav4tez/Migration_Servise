const aNav = document.querySelectorAll('.animate__animated');

aNav.forEach(x => {
  x.addEventListener('click', () => {
    x.classList.remove('animate__fadeOutLeft'); 
    void x.offsetWidth;
    x.classList.add('animate__fadeOutLeft');
  });

  x.addEventListener('animationend', () => {
    x.classList.remove('animate__fadeOutLeft');
  });
});

