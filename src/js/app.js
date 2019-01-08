import sayHello from './lib/sayHello.js';
import slick from 'slick-carousel';
// import svgUseIt from 'svg-use-it';
// import setTouchClassName from './setTouchClassName.js';
import setSlider from './components/setSlider.js';
// import setPopup from './components/setPopup.js';
// import animateCorners from './components/animateCorners.js';
import  updateTransition from './components/animateOpacity.js';
import animateProgress from './components/animateProgress.js';
// import animateProgress from './components/animateProgress.js';
// import { scrollToElement, scrollToTop } from './components/scrollTo.js';

$(function() {
  sayHello();
//   setTouchClassName();
  // svgUseIt();
  // setSlider();
  // setPopup();
  // animateCorners();
    updateTransition();
    animateProgress();
//   scrollToElement();
//   scrollToTop();
});


$('.js-popup-open').each(function(){
  $(this).on('click', function(e) {
    e.preventDefault();
    
    let index = $(this).attr('data-index');
    let target = $(`.js-popup-open[data-index="${index}"]`);
    let popup = $(this).attr('data-popup-target');
    console.log(popup)
    showModal(`[data-popup="${popup}"]`);
    $(`.js-popup-open[data-index="${target}"]`).click();
    $('.js-slider').each(function(){
      const $slider = $('.js-slider')
      const $wrap = $(this).closest('.slider__wrap');
      const $prev = $wrap.find('.js-prev');
      const $next = $wrap.find('.js-next');
      const $dots = $wrap.find('.js-dots');
      $(this).slick({
        prevArrow: $prev,
        nextArrow: $next,
        appendDots: $dots,
        rows: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true
            }
          }
        ]
      });
      $slider.slick('slickGoTo',  index);
      $slider.addClass('no-animation');
    setTimeout(() => {
      $slider.removeClass('no-animation');
    }, 100);
  
  })
  });
})


function showModal(id) {
  $(id).addClass('is-active');
  console.log(id)
  $('body').css('overflow', 'hidden');
};


$('.js-popup-close').on('click', function(e) {
  let id = $(this).parents('.js-popup');
  hideModal(id);
  // unsetGalleryModalSlider(id);
  $('.js-slider').slick('unslick');
  return false;
});

function hideModal(id) {
  $(id).removeClass('is-active');
  $('body').css('overflow' , 'visible');
};

// $.fn.isFullyInViewport = function() {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();

//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();

//   return elementTop >= viewportTop && elementBottom <= viewportBottom;
// };

// $(window).on('resize scroll', function() {
//   $('.fadeIn "').each(function() {

//     if ($(this).isFullyInViewport()) {
//       $(this).addClass('is-animate')
//     } else {
//       $(this).removeClass('is-animate')
//     }
//   });
//   $('.zoomIn').each(function() {

//     if ($(this).isFullyInViewport()) {
//       $(this).addClass('is-animate')
//     } else {
//       $(this).removeClass('is-animate')
//     }
//   });
// });

// jQuery.expr.filters.offscreen = function(el) {
//   var rect = el.getBoundingClientRect();
//   return ((rect.top > 0 && rect.bottom <= document.documentElement.clientHeight) && (rect.left > 0 && rect.right <= document.documentElement.clientWidth))
// };



// // boolean returned if element is offscreen
// function addsClass() {
//   $('.fadeIn').each(function(){
//     if($('.fadeIn').is(':offscreen')){
//       $('.fadeIn').addClass('is-animate')
//     }
//   })
  
// }

// addsClass()

function parallax() {
  let object = $('#object')
  let layer = $('.hero__logo')
  layer.mousemove(function(e){
    let valueX = (e.pageX * -1 / 15);
    let valueY = (e.pageY * -1 / 15);
    object.css({
      'transform':'translate3d('+valueX+'px,'+valueY+'px,0)',
      'cursor':'pointer'
    });
  })
}
parallax()