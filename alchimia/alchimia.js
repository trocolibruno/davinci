////////////////////////////////////////////////

// LOADING

///////////////////////////////////////////////

$(window).on('load', function () {
  $(".lds-ripple").fadeOut(function () {
    $('#loading').slideToggle(500, function () {
      
    });
  });
});

////////////////////////////////////////////////

// JQuery Autoscroll

///////////////////////////////////////////////

var velocity = 600;
jQuery(document).ready(function ($) {
  $('a[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 45
    }, velocity, function () {
      window.location.hash = target;
    });
  });
});

////////////////////////////////////////////////

// JQuery Modal

///////////////////////////////////////////////

function modal() {
  document.querySelector('.close').addEventListener('click', function () {
    $(".modal").hide();
  });
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
      $(".modal").hide();
    }
  });
}

