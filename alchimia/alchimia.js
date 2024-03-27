// Include HTML
function alchimia() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("magica");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "App not found."; }
          elmnt.removeAttribute("magica");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
alchimia();

// Autoscroll
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.hash.substring(1);
      var targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      var targetOffset = targetElement.offsetTop;
      var initialScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      var duration = 500;
      var startTime = null;

      function scrollToTarget(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = progress / duration;
        var easing = function(t) { return t * t }; // de https://easings.net/#easeInQuad
        var easePercentage = easing(Math.min(percentage, 1));

        window.scrollTo(0, initialScroll + easePercentage * (targetOffset - initialScroll));

        if (progress < duration) {
          window.requestAnimationFrame(scrollToTarget);
        } else {
          window.location.hash = targetId;
        }
      }

      window.requestAnimationFrame(scrollToTarget);
    });
  });
});

