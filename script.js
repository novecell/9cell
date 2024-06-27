$(document).ready(function() {
  const interval = 5000; // 5 segundos
  let currentIndex = 0;
  const items = $('#carouselExampleFade .carousel-item');
  const itemAmt = items.length;

  function cycleItems() {
    const item = $('#carouselExampleFade .carousel-item').eq(currentIndex);
    items.removeClass('active');
    item.addClass('active');
  }

  function autoCycle() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  }

  let autoSlide = setInterval(autoCycle, interval);

  $('#carouselExampleFade').on('mouseenter', function() {
    clearInterval(autoSlide);
  }).on('mouseleave', function() {
    autoSlide = setInterval(autoCycle, interval);
  });

  $('.carousel-control-prev').on('click', function() {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  });

  $('.carousel-control-next').on('click', function() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  });

  cycleItems();
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const ip15promaxImage = document.querySelector('.ip15promax');

  function handleScroll() {
    const rect = ip15promaxImage.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      ip15promaxImage.classList.add('animate');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Verifique se a imagem já está visível ao carregar a página
});
document.addEventListener('DOMContentLoaded', function() {
  const ip15promaxImage = document.querySelector('.ip15promax');
  const shapeAzulImage = document.querySelector('.shapeazul');

  function handleScroll() {
    const rect = ip15promaxImage.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      ip15promaxImage.classList.add('animate');
      shapeAzulImage.classList.add('animate');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Verifique se a imagem já está visível ao carregar a página
});
