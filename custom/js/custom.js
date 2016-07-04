$(document).ready(function () {
  function hypercommnet () {

    var interval = setInterval(function() {
      var hypercommentsWidget = $('.js-hypercomments-widget');
      if(hypercommentsWidget.children().length) {
        hypercommentsWidget = hypercommentsWidget.remove();
        hypercommentsWidget.appendTo('.js-hypercomments-container');
        hypercommentsWidget.removeClass("invisible");
        clearInterval(interval);
      }
    }, 100)

    _hcwp = window._hcwp || [];
    _hcwp.push({widget:"Stream", social:"facebook, vk, google, twitter", widget_id: 74671});
    (function() {
      HC_LOAD_INIT = true;
      var lang = "uk";
      $("script[src*='w.hypercomments.com/widget']").remove();
      $("script[src*='static.hypercomments.com/widget/hcembed']").remove();
      var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
      hcc.src = ("https:" == document.location.protocol ? "https" : "http")+"://w.hypercomments.com/widget/hc/74671/"+lang+"/widget.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hcc, s.nextSibling);
    })();
  }
  function init () {
    
    var href, $lastLink;
    $("a[aria-label=Search]").remove();
    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    $lastLink.remove();
    $("img#map1").hide();
    $("img#map2").hide();
    $("img#map3").hide();
    $(document).on('click', '.show-map', function() {
      if($('input#map1').prop( "checked" ))
        $("img#map1").show();
      if(!$('input#map1').prop( "checked" )){
        $("img#map1").hide();
      }
      if($('input#map2').prop( "checked" ))
        $("img#map2").show();
      if(!$('input#map2').prop( "checked" )){
        $("img#map2").hide();
      }
      if($('input#map3').prop( "checked" ))
        $("img#map3").show();
      if(!$('input#map3').prop( "checked" )){
        $("img#map3").hide();
      }
    });
    $(".articles .chapter>span").css("color", "lightgray");
    if ($("#hypercomments_widget").length > 0) {
      hypercommnet();
    }
  }
  

  init();

  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init)
  });
});

/* Hypercomment */
