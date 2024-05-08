
window.addEventListener('DOMContentLoaded', function (){

  if (document.querySelector('.examples__slider')) {
 
     const reviewsSwiper = new Swiper('.examples__slider', {
       // Optional parameters
       direction: 'horizontal',
       loop: true,
       speed:500,
       // centeredSlides: true,
      //  pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      //  },
       // Navigation arrows
       navigation: {
         nextEl: '#next-btn',
         prevEl: '#prev-btn',
       },
       clikable: true,
       setWrapperSize: true,
       // autoHeight: true,
       // Default parameters
       slidesPerView: 2.18,
       spaceBetween: 8,
       breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          // centeredSlides: true,
        },
        870: {
          slidesPerView: 1.7,
          spaceBetween: 40,
          // centeredSlides: true,
        },
       
        1350: {
          slidesPerView: 2.2,
          spaceBetween: 45,
        },
      },
  
     });
   };


  if (document.querySelector('.hero__slider')) {
 
     const reviewsSwiper = new Swiper('.hero__slider', {
       // Optional parameters
       direction: 'horizontal',
       loop: true,
       speed:400,
       // centeredSlides: true,
      //  pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      //  },
       // Navigation arrows
       navigation: {
         nextEl: '#hero-btn-next',
         prevEl: '#hero-btn-prev',
       },
       clikable: true,
       setWrapperSize: true,
       // autoHeight: true,
       // Default parameters
       slidesPerView: 1,
       spaceBetween: 8,
       // Responsive breakpoints
           
      //    autoplay: {
      //    delay: 4000,
      //    //отключение автоплей при управлении пользователем: disableOnInteraction: true,
      //    disableOnInteraction: false,
      //  },
       // effect: 'flip',
     });
   };


  if (document.querySelector('.promotion__slider')) {
 
     const reviewsSwiper = new Swiper('.promotion__slider', {
       // Optional parameters
       direction: 'horizontal',
       loop: true,
       speed:400,
       // centeredSlides: true,
      //  pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      //  },
       // Navigation arrows
       navigation: {
         nextEl: '#promotion-next-btn',
         prevEl: '#promotion-prev-btn',
       },
       clikable: true,
       setWrapperSize: true,
      //  autoHeight: true,
       // Default parameters
       
       // Responsive breakpoints
       breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        767: {
          slidesPerView: "auto",
          spaceBetween: 24,
          autoHeight: false,
          // centeredSlides: true,
        },
        
      },
      //    autoplay: {
      //    delay: 4000,
      //    //отключение автоплей при управлении пользователем: disableOnInteraction: true,
      //    disableOnInteraction: false,
      //  },
       // effect: 'flip',
     });
   };


  if (document.querySelector('.application__slider')) {
 
     const reviewsSwiper = new Swiper('.application__slider', {
       // Optional parameters
       direction: 'horizontal',
      //  loop: true,
       speed:400,
       // centeredSlides: true,
      //  pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      //  },
       // Navigation arrows
       navigation: {
         nextEl: '.application-form__btn-next',
        //  prevEl: '#promotion-prev-btn',
       },
       clikable: true,
       setWrapperSize: true,
      //  autoHeight: true,
       // Default parameters
        slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
          centeredSlides: true,
       // Responsive breakpoints
      //  breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,          
      //     centeredSlides: true,
      //   },
      //   767: {
      //     slidesPerView: 1,
      //     spaceBetween: 24,
      //     autoHeight: true,          
      //   },        
      // },
      //    autoplay: {
      //    delay: 4000,
      //    //отключение автоплей при управлении пользователем: disableOnInteraction: true,
      //    disableOnInteraction: false,
      //  },
       // effect: 'flip',
     });
   };


  if (document.querySelector('.reviews__slider')) {
 
     const reviewsSwiper = new Swiper('.reviews__slider', {
       // Optional parameters
       direction: 'horizontal',
       loop: true,
       speed:400,
       // centeredSlides: true,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
       // Navigation arrows
       navigation: {
         nextEl: '#reviews-btn-next',
         prevEl: '#reviews-btn-prev',
       },
       clikable: true,
       setWrapperSize: true,
       // autoHeight: true,
       // Default parameters
       slidesPerView: "auto",
       spaceBetween: 54,
       // Responsive breakpoints
       breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 30,
          // centeredSlides: true,
        },
        870: {
          slidesPerView: "auto",
          spaceBetween: 40,
          // centeredSlides: true,
        },
       
        1350: {
          slidesPerView: "auto",
          spaceBetween: 54,
        },
      },
      //    autoplay: {
      //    delay: 4000,
      //    //отключение автоплей при управлении пользователем: disableOnInteraction: true,
      //    disableOnInteraction: false,
      //  },
       // effect: 'flip',
     });
   };










 } 
 
 );
 