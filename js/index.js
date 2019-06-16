window.onload = function(){
[
    '/animation.js',
    '/contactForm.js'
  ].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
  });
}