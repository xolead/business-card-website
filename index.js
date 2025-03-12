document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollAboutMe');
    const targetSection = document.getElementById('containte_about_me');
  
    if (scrollButton && targetSection) {
      scrollButton.addEventListener('click', function(event) {
        event.preventDefault();  // Предотвращаем стандартное поведение кнопки (например, отправку формы)
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollWorks');
    const targetSection = document.getElementById('container_works');
  
    if (scrollButton && targetSection) {
      scrollButton.addEventListener('click', function(event) {
        event.preventDefault();  // Предотвращаем стандартное поведение кнопки (например, отправку формы)
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollContact');
    const targetSection = document.getElementById('container_contact');
  
    if (scrollButton && targetSection) {
      scrollButton.addEventListener('click', function(event) {
        event.preventDefault();  // Предотвращаем стандартное поведение кнопки (например, отправку формы)
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  });