
$(function(){

    var cursor=$(".cursor");
    var stalker=$(".follower");
    
    $(document).on("mousemove",function(e){
      var x=e.clientX;
      var y=e.clientY;
      cursor.css({
        "opacity":"1",
        "top":(y-10) + "px",
        "left":(x-10) + "px",
      });
      setTimeout(function(){
        stalker.css({
          "opacity":"1",
          "top":y+"px",
          "left":x+"px"
        });
      },100);
      
    });


    $(".hamburgur").on("click",function(){
      $(".hamburgur").toggleClass("open");
  });
  });
  
  $(function(){
    $('#js-slider').slick({
      arrows:false,
      dots:false,
      autoplay:true,
      autoplaySpeed:0,
      speed:10000,
      cssEase:'linear',
      slidesToShow:1,
      variableWidth:true,

    });
  });