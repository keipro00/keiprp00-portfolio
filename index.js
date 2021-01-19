window.addEventListener("load", function () {

  // Smooth-scroll
  $(function () {
    $('a[href^="#"]:not(a.carousel-control-prev, a.carousel-control-next, a.nav-link, a[data-toggle="collapse"], a[data-toggle="tab"])').click(function () {
      var adjust = 0;
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });

  // back-color-scroll
  window.onscroll = function () {
    var scrollTop = window.pageYOffset; //スクロール量を取得
    if (scrollTop > 800) {
      $('header').css('background-color', '#f2f2f2');
      $('header').css('transition', '1.3s')
    }
    if (scrollTop < 500) {
      $('header').css('background-color', '');
      $('header').css('transition', '1.0s')
    }
    if (scrollTop > 1600) {
      $('header').css('background-color', '');
      $('header').css('transition', '1.3s')
    }
    if (scrollTop > 2400) {
      $('header').css('background-color', '#f2f2f2');
      $('header').css('transition', '1.3s')
    }
  }

  // ham-menu
  const ham = document.getElementById('ham');
  const menu_wrapper = document.getElementById('menu_wrapper');
  ham.addEventListener('click', function () {
    ham.classList.toggle('clicked');
    menu_wrapper.classList.toggle('clicked');
  });

  // top-message
  function typing(str = "") {
    let buf = document.getElementById("typing").innerHTML;
    let writed = buf.length;
    let write = "";
    if (writed < str.length) {
      write = str.charAt(writed);
    } else {
      buf = "";
    }
    document.getElementById("typing").innerHTML = buf + write;
  }
  const str = document.getElementById("typing").innerHTML;
  const delay = 150
  document.getElementById("typing").innerHTML = "";
  window.setInterval(function () {
    typing(str);
  }, delay);
})