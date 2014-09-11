(function() {
  var portfolioItem, servicesCircle, staticHeader;

  $(function() {
    $("table.sns td img").hover(function() {
      return $(this).attr('src', $(this).data('c-src'));
    }, function() {
      return $(this).attr('src', $(this).data('d-src'));
    });
    $(window).scroll(function() {
      if ($(".navbar").offset().top > 30) {
        $(".navbar-fixed-top").addClass("sticky");
      } else {
        $(".navbar-fixed-top").removeClass("sticky");
      }
    });
    if ($(".flexslider").length) {
      $(".flexslider").flexslider();
    }
    servicesCircle.initialize();
    staticHeader.initialize();
    portfolioItem.initialize();
    $(".dropdown-toggle").click(function(e) {
      e.preventDefault();
      setTimeout($.proxy(function() {
        if ("ontouchstart" in document.documentElement) {
          $(this).siblings(".dropdown-backdrop").off().remove();
        }
      }, this), 0);
    });
  });

  portfolioItem = {
    initialize: function() {
      var $bigPics, $container, $thumbs;
      $container = $("#portfolio_tem .left_box");
      $bigPics = $container.find(".big img");
      $thumbs = $container.find(".thumbs .thumb");
      $bigPics.hide().eq(0).show();
      $thumbs.click(function(e) {
        var index;
        e.preventDefault();
        index = $thumbs.index(this);
        $bigPics.fadeOut();
        $bigPics.eq(index).fadeIn();
      });
    }
  };

  staticHeader = {
    initialize: function() {
      if ($(".navbar-static-top").length) {
        $("body").css("padding-top", 0);
      }
    }
  };

  servicesCircle = {
    initialize: function() {
      var $circles, $container, $texts;
      $container = $(".services_circles");
      $texts = $container.find(".description .text");
      $circles = $container.find(".areas .circle");
      $circles.click(function() {
        var index;
        index = $circles.index(this);
        $texts.fadeOut();
        $texts.eq(index).fadeIn();
        $circles.removeClass("active");
        $(this).addClass("active");
      });
    }
  };

}).call(this);
