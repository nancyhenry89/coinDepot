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
        breakpoint: 768,
        settings: {
          initialSlide:1,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
