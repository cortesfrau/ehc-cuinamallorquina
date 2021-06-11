// Custom Functions
import {headerToggle} from './src/js/custom';
import {activeLinks} from './src/js/custom';

// Simple LightBox
import SimpleLightbox from 'simplelightbox';

// Lazy Load
import LazyLoad from 'vanilla-lazyload';

window.onload = function() {
  headerToggle();
  activeLinks();

  // Lazy Load
  const lazyLoad = new LazyLoad({
    elements_selector: '.lazy',
  });

  // Lightbox
  const lightbox = new SimpleLightbox('.gallery-item');

  // Dinamic class for elements in viewport
  var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  var findMe = document.querySelectorAll('.animated');
  findMe.forEach(element => {
    if(isInViewport(element)){
      element.classList.add('animate');
    }
  });
  window.addEventListener('scroll', function(event) {
    findMe.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate');
      }
    });
  }, false);

}
