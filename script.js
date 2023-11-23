document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault();

       var targetElement = document.querySelector(this.getAttribute('href'));
       var offset = -100; // Ajuste o valor conforme necessário

       if (targetElement) {
           var targetPosition = targetElement.offsetTop + offset;

           window.scrollTo({
               top: targetPosition,
               behavior: 'smooth'
           });
       }
   });
});