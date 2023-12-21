$(function(){
        $('#menu').slicknav({
        label:"",
        brand:"Nitin Kumar"
        });

    });

$(document).ready(function() {
  $(".skitter-large").skitter(/*{
    dots:false,
    navigation:true,

  }*/);
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
     loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
  });
});


$(document).ready(function(){
    $(".progress-bar-html").animate({"width":"90%"},1000,function(){
        $(".progress-bar-css2").animate({"width":"85%"},1000,function(){
            $(".progress-bar-css3").animate({"width":"80%"},1000,function(){
                $(".progress-bar-js").animate({"width":"75%"},1000,function(){
                    $(".progress-bar-jquery").animate({"width":"80%"},1000)
                })
            })
        })
    })
})