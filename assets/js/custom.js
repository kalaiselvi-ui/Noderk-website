var swiper = new Swiper(".swiper-container", {
    direction: 'horizontal',
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $(document).ready(function(){
      $(".dropdown").hover(function(){
          var dropdownMenu = $(this).children(".dropdown-menu");
          if(dropdownMenu.is(":visible")){
              dropdownMenu.parent().toggleClass("open");
          }
      });
  });     
