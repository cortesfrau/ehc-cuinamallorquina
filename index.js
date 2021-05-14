// Custom Functions
import {headerToggle} from './src/js/custom';
import {activeLinks} from './src/js/custom';

// Simple LightBox
import SimpleLightbox from 'simplelightbox';


window.onload = function() {
  headerToggle();
  activeLinks();


  // Lightbox
  var lightbox = new SimpleLightbox('.gallery-item');



  // Is Element Visible?
  var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
// read the link on how above code works

  var findMe = document.querySelectorAll('.animated');

  window.addEventListener('scroll', function(event) {
// add event on scroll
    findMe.forEach(element => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add('animate');
      }
    });
  }, false);
}
