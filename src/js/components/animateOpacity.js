import {ANIMATE} from '../constants.js'
export default function updateTransition(){


        function visible(target, elTop) {
          let targetPosition = {
              top: window.pageYOffset + target.getBoundingClientRect().top + elTop,
              bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            windowPosition = {
              top: window.pageYOffset,
              bottom: window.pageYOffset + document.documentElement.clientHeight
            };
          if (targetPosition.top < windowPosition.bottom && targetPosition.bottom > windowPosition.top) {
            return true;
          }
          else {
            return false;
          }
      
        }
        function addClass(el, y) {
          $(window).on('scroll resize', () => {
            if (visible(el, y) && !$(el).hasClass(ANIMATE)) {
              $(el).addClass(ANIMATE);
            }
          });
      
          $(document).ready(() => {
            if (visible(el, y) && !$(el).hasClass(ANIMATE)) {
              $(el).addClass(ANIMATE);
            }
          });
        }
        $('.fadeIn').each((i, el)=>{
          const translate = $(el).data('animation-trigger-translate') || 0 ;
          addClass(el, translate)
        });
      }
    
  