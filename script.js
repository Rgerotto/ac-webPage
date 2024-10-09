// script.js
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Se está visível, aplica a animação
            if ([...sections].indexOf(entry.target) % 2 === 0) {
              entry.target.classList.add('reveal-right'); // Seções pares vêm da direita
            } else {
              entry.target.classList.add('reveal-left'); // Seções ímpares vêm da esquerda
            }
          } else {
            // Se não está mais visível, remove a classe de animação para desaparecer
            entry.target.classList.remove('reveal-left', 'reveal-right');
          }
        });
      },
      { threshold: 0.1 } // 10% de visibilidade para ativar
    );
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  