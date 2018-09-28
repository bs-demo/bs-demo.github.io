$(function() {
  
  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
  
});


  var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("main-menu").style.top = "0";
      } else {
            document.getElementById("main-menu").style.top = "-100px";
      }

      prevScrollpos = currentScrollpos;

      }


      $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });