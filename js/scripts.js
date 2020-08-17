$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});
$(document).ready(function() {
  var lastScrollTop = 0;
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;
  mywindow.scroll(function () {
      newscroll = mywindow.scrollTop();
      if (newscroll > mypos && !up) {
          $('header').addClass('active');
          up = !up;
      } else if(newscroll < mypos && up) {
          $('header').removeClass('active');
          up = !up;
      }
      mypos = newscroll;
  });
  $(window).scroll(function(event) {
    var lastScrollTop = 0;
    var st = $(this).scrollTop();
    if (st > lastScrollTop && pageYOffset > 0){
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
   lastScrollTop = st;
  });
});
$(document).ready(function(){
  var button = $('.login-btn');
  var form = $('.login-popup');
  var close = $('.login-popup .close');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(document).ready(function(){
  var button = $('.signup-btn');
  var form = $('.signup-popup');
  var close = $('.signup-popup .close');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(document).ready(function(){
  var pass = $('.label-password input');
  $('.label-password .show-password').mouseup(function() {
    pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
  });
});
$(document).ready(function(){
  var button = $('.burger-btn');
  var form = $('header');
  var overlay = $('.overlay');
  var body = $('body');
  var close = $('header .close');

  button.click(function(){
    form.addClass("open");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("open");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    button.removeClass('active');
    form.removeClass("open");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(window).on('load resize', function() {
   if ($(window).width() > '992') {

      $("header .topbar__account").hover(function() {
        $(this).children('.submenu').toggleClass('active');
        $(this).children('.topbar__account__btn').toggleClass('active');
      }); 
      $("header .nav-menu .with-submenu").parent('li').hover(function() {
        $(this).children('.submenu').toggleClass('active');
        $(this).children('.with-submenu').toggleClass('active');
      }); 
   }
   if ($(window).width() <= '992') {
      $("header .topbar__account").click(function() {
        $(this).children('.submenu').slideToggle();
        $(this).children('.topbar__account__btn').toggleClass('active');
      }); 
      $(".login-btn, .signup-btn").click(function() {
        $('header').removeClass('open');
      }); 
      
      $("header .nav-menu .with-submenu").click(function() {
        $(this).siblings('.submenu').toggleClass('active');
        $(this).siblings('.with-submenu').toggleClass('active');
      }); 
   }
});
$(".tabs-nav li").click(function() {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).parent().siblings('.tabs-dropdown').removeClass('active');
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).addClass('active');
});
$(window).on('load', function() {
   if ($(window).width() <= '992') {
    $('header .tabs-dropdown.active, header .tabs-nav li').removeClass('active');
    $(".header-tabs-close").click(function() {
      $(this).parent('.tabs-dropdown').removeClass('active');
    });
   }
});
$('.choose-us-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: '<div class="choose-us-slider_arrow-prev choose-us-slider_arrow"></div>',
  nextArrow: '<div class="choose-us-slider_arrow-next choose-us-slider_arrow"></div>',
  responsive: [
    {
      breakpoint: 993,
      settings: {
       slidesToShow: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
       slidesToShow: 1,
      }
    },
  ],
});
$(document).ready(function(){
  var overlay = $('.overlay');
  var body = $('body');
  var video, src;
  var s = 2;
  $('.video-btn, .video-gallery-wrap__item').click(function(){
    var button = $(this);
    var activeTab = button.attr("rel");
    var form = $("#"+activeTab+".video__modal");
    video = $(form).children('iframe'),
      src = video.attr('src');
    video.attr('src', src + '?autoplay=1');
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');

    overlay.click(function(){
      video.attr('src', src);
      $('.video__modal.active').removeClass("active");
      overlay.removeClass('active');
      body.removeClass('no-scroll');
    });
  });
});

$(document).ready(function(){
  var button = $('.choose-us-slider__item__image .gallery-btn');
  var form = $('.choose-us-slider__item__popup');
  var close = $('.choose-us-slider__item__popup .close');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$("footer .menu-btn").click(function() {
  $(this).toggleClass("active");
  $(this).siblings('.menu-col').slideToggle();
});
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).siblings('.amount-input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).siblings('.amount-input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
$("#checkout .selection-item").click(function() {
  $(this).parent('.selection').children('.selection-item').removeClass('active');
  $(this).addClass('active');
});
$("#product .product-additions .title").click(function() {
  $(this).siblings('.dropdown').slideToggle();
  $(this).toggleClass('active');
});
$(document).ready(function() {
  $('.products-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
        },
      }
    ],
  });
  var number = $('.products-slider .slick-dots li').length;
  $('.products-slider .slick-dots li').width(100 / number + '%');
});
$(document).ready(function(){
  var button = $('.request-btn');
  var form = $('.request-popup');
  var overlay = $('.overlay');
  var body = $('body');
  var close = $('.request-popup .close');

  button.click(function(){
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    button.removeClass('active');
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(document).ready(function(){
  var button = $('');
  var form = $('.thanks-popup');
  var overlay = $('.overlay');
  var body = $('body');
  var close = $('.thanks-popup .close');

  button.click(function(){
    form.addClass("active");
    overlay.addClass('active');
    body.addClass('no-scroll');
  });
  close.click(function(){
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
  overlay.click(function(){
    button.removeClass('active');
    form.removeClass("active");
    overlay.removeClass('active');
    body.removeClass('no-scroll');
  });
});
$(".service-tabs__item .title").click(function() {
  $(this).siblings('.dropdown').slideToggle();
  $(this).toggleClass('active');
});
$(document).ready(function() {
  $('.service-price__table select').niceSelect();

  $('.service-price__table__price#size1').addClass('active');
  $(".service-price__table .option").click(function() {
    var activeTab = $(this).attr("data-value");
    $(this).closest('.service-price__table__header')
    .siblings('.service-price__table__item')
    .children('.service-price__table__price').removeClass('active');
    $(this).closest('.service-price__table__header')
    .siblings('.service-price__table__item')
    .children("#"+activeTab+'.service-price__table__price').addClass('active');
  });
});
$(document).ready(function() {
  $('.calculator-wrap select').niceSelect();
});
jQuery(function($){
   $('input[type="tel"]').mask("+9 (999) 999 99 99");
   $('input[type="tel"]').attr("placeholder", "+_ (___) ___ __ __")
});