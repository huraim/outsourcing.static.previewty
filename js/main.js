window.addEventListener('load', function(){
    console.log('ok');

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });





});