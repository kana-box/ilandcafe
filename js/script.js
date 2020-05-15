$(function(){
 $(".header-open-button").click(function(){
    $(".main-navigation").fadeIn();
    $(this).hide();
    return false;
  })
  $(".header-close-button").click(function(){
    $(".main-navigation").fadeOut();
    $(".header-open-button").show();
    return false;
  })

});

// スラオドパネル
$(function(){
  $(".pcnavi ul li").mouseover(function(){
    $(this).find(".sub").show();
  })
  $(".pcnavi ul li").mouseout(function(){
    $(this).find(".sub").hide();
  })
  
});
