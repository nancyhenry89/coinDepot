$(document).ready(function(){
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

});
function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    $('.closebtn').css('display','block');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.closebtn').hide();
}
