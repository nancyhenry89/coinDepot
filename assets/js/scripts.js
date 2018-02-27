$(document).ready(function(){
  initSlider();
  if($(window).innerWidth() >= 1025 ) {
    $('.slider').hide();
    $('.slider').slick('unslick');
    //$('.trending .card').attr('style', 'width:'+getSlideWidth() +'!important');
    $('.slider').show();
  }
});
function initSlider(){
  $('.slider').slick({
    centerMode: true,
    slidesToShow: 3,
    infinite:false,
    variableWidth: true,
    initialSlide:2,
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          initialSlide:2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          initialSlide:2,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
}
function getSlideWidth(){
  var sliderWidth=($('.trending').outerWidth()-10)*.83;
  var slideWhidth=((sliderWidth-30)/5)-6;
  return slideWhidth;
}
function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    $('.closebtn').css('display','block');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.closebtn').hide();
}
$(window).resize(function(){

  /*if($(window).innerWidth() >= 1025 ) {
    $('.slider').hide();
    $('.slider').slick('unslick');
    $('.trending .card').attr('style', 'width:'+getSlideWidth() +'!important');
    $('.slider').show();
  }else{
    $('.slider').slick('unslick');
    initSlider();
  }*/
});
