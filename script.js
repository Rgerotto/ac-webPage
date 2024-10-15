const button = document.querySelector('#submitBtn');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputSubject = document.querySelector('#subject');
const inputMessage = document.querySelector('#message');


button.addEventListener('click', (event) => {
  event.preventDefault();
  const name = inputName.value;
  const email = inputEmail.value;
  const phone = inputPhone.value;
  const subject = inputSubject.value;
  const message = inputMessage.value;

  const formattedMessage = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AAssunto: ${subject}%0AMensagem: ${message}`;

  const whatsappNumber = '+34685532955';
  window.open(`https://wa.me/${whatsappNumber}?text=${formattedMessage}`, '_blank');
})

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            
            if ([...sections].indexOf(entry.target) % 2 === 0) {
              entry.target.classList.add('reveal-right');
            } else {
              entry.target.classList.add('reveal-left');
            }
          } else {
            entry.target.classList.remove('reveal-left', 'reveal-right');
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  