/* ===========================================================
 * jquery-endpage-box.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Display box when users scroll to the end of 
 * the page
 *
 * https://github.com/peachananr/endpage-scroll
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    animation: "fade",
    from: "50%",
    to: "110%",
    content: "Better Add something cool here."
	};
	
  $.fn.endpage_box = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        container = $(document),
        status = "off",
        new_from = "",
        new_to = "";
    
    if (el.length < 1) {
      el = $("<div id='endpage-box' class='endpage-box'>" + settings.content + "</div>");
      el.hide().appendTo("body");
    } else {
      el.hide();
    }
    el.attr("data-status", "off");
    
    if (settings.from.toString().indexOf('%') >= 0) {
      docHeight = container.height() - $(window).height();
      new_from = (parseInt(settings.from)/100) * docHeight
    } else {
      new_from = settings.from;
    }
    
    if (settings.to.toString().indexOf('%') >= 0) {
      docHeight = container.height() - $(window).height();
      new_to = (parseInt(settings.to)/100) * docHeight
    } else {
      new_to = settings.to;
    }
    
    $.fn.animationClassChange = function(display, settings, status) {
      
      var el = $(this)
      if(display == "show") {
        el.addClass("animation-" + settings.animation).show();
        el.one('webkitAnimationEnd animationend msAnimationEnd oAnimationEnd animationEnd', function(e) {
          status = "off"
          el.data("status", "off");
          el.removeClass("animation-" + settings.animation)
        });
      } else {
        var outAnimation = settings.animation.replace("In", "Out")
        el.addClass("animation-" + outAnimation);
        el.one('webkitAnimationEnd animationend msAnimationEnd oAnimationEnd animationEnd', function(e) {
          status = "off"
          el.data("status", "off");
          el.removeClass("animation-" + outAnimation).hide()
        });
      }
    }
    
    $.fn.animateBox = function(display, status, settings) {
      var el = $(this);
      var pos = el.position();
      
      switch (settings.animation) { 
        case false: 
          if(display == "show") {
            el.show("fast");
            status = "off";
            el.data("status", "off");
          } else {
            el.hide("fast");
            status = "off";
            el.data("status", "off");
          }
        break;
        case 'fade': 
          if(display == "show") {
            $(this).fadeIn("fast", function() {
              status = "off";
              el.data("status", "off");
            });
  
          } else {
          
            $(this).fadeOut("fast", function() {
              status = "off";
              el.data("status", "off");
            });
            
          }
        break;
        case 'slide': 
          if(display == "show") {
            el.slideDown("fast", function() {
              status = "off";
              el.data("status", "off");
            });
          } else {
            el.slideUp("fast", function() {
              status = "off";
              el.data("status", "off");
            });
          }
        break;
        default:
          el.animationClassChange(display, settings, status);
        break;
      }
      
    }
    
    $(window).resize(function() {
      if (settings.from.toString().indexOf('%') >= 0) {
        docHeight = container.height() - $(window).height();
        new_from = (parseInt(settings.from)/100) * docHeight
      }

      if (settings.to.toString().indexOf('%') >= 0) {
        docHeight = container.height() - $(window).height();
        new_to = (parseInt(settings.to)/100) * docHeight
      }
    });
    
   
    
    container.scroll(function(){
      var yPos = container.scrollTop();
      
      if (yPos >= new_from && yPos <= new_to) {
        if(el.is(":hidden") && el.data("status") == "off") {
          status = "on";
          el.data("status", "on");
          el.animateBox("show", status, settings);
        }
      } else {
        if(el.is(":visible") && el.data("status") == "off") {
          status = "on";
          el.data("status", "on");
          el.animateBox("hide", status, settings);
        }
      }
    
    });
  }
  
}(window.jQuery);


