// Header Toggle
export function headerToggle() {
  document.getElementById('header-toggle').onclick = function() {
    this.classList.toggle('opened');
    document.getElementById('mobile-nav').classList.toggle('show');
    document.getElementById('body-overlay').classList.toggle('show');
    document.body.classList.toggle('fixed');
  }
}

// Active header links
export function activeLinks() {
  var current = location.pathname.split('/')[1];
  if (current === "") return;
  var menuItems = document.querySelectorAll('.menu li a');
  for (var i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
      menuItems[i].className += "active";
    }
  }
}
