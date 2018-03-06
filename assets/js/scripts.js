$(document).ready(function(){
  $('header').append(
  '<div class="sticky"> <div class="container"> <button onclick="openNav()" type="button" class="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <div class="nav-cont"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> <nav id="mySidenav" class="sidenav"> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class="navbar-collapse" id="bs-example-navbar-collapse-1"> <div class="dropdown lang"> <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">EN <span class="caret"></span></button> <ul class="dropdown-menu"> <li><a href="#">AR</a></li> <li><a href="#">FR</a></li> </ul> </div> <div class="account menu-group"> <ul class="nav navbar-nav"> <li class="register"><a href="#">Register</a></li> <li><a href="#">login</a></li> </ul> </div> <div class="menu-group"> <div class="title">Title</div> <ul class="nav navbar-nav"> <li><a href="#">menu link</a></li> <li><a href="#">menu link</a></li> <li><a href="#">menu link</a></li> </ul> </div> <div class="menu-group"> <div class="title">Title</div> <ul class="nav navbar-nav"> <li><a href="#">menu link</a></li> <li><a href="#">menu link</a></li> <li><a href="#">menu link</a></li> </ul> </div> </div> <!-- /.navbar-collapse --> </div> <!-- /.container-fluid --> </nav> </div> <div class="logo"> <img class="img" src="assets/img/logo.png" alt="Coin Depot"/> <h1 class="text">Coin<b>Depot</b></h1> </div> <div class="cart"> <svg class="icon"> <use xlink:href="#icon-bag" /> </svg> </div> </div> </div> <div class="slogan">The most <b>simple</b>, <b>fast</b> & <b>safe</b> way to buy crypto currencies</div> '
);
$('footer').append(
  ' <div class="container"> <div class="link-set"> <a class="footer-link" href="#f-one">footer header</a> <ul id="f-one" class="footer-sub"> <li><a href="#">Link link</a></li> <li><a href="#">Link</a></li> <li><a href="#">Link</a></li> <li><a href="#">Link link</a></li> </ul> </div> <div class="link-set"> <a class="footer-link" href="#f-two">footer header</a> <ul id="f-two" class="footer-sub"> <li><a href="#">Link link</a></li> <li><a href="#">Link</a></li> <li><a href="#">Link</a></li> <li><a href="#">Link link</a></li> </ul> </div> <div class="link-set"> <a class="footer-link" href="#f-three">footer header</a> <ul id="f-three" class="footer-sub"> <li><a href="#">Link link</a></li> <li><a href="#">Link</a></li> <li><a href="#">Link</a></li> <li><a href="#">Link link</a></li> </ul> </div> <div class="subscribe"> <div class="footer-header" href="#f-three">footer header</div> <input class="sub-inpt" type="text" placeholder="Your Email"/> <a class="btn go">GO</a> </div> </div>'
)
//toggle selected for popups
$('.item-radio').click(function(){
$(this).parents('.book-now').find('.item').removeClass('selected');
$(this).parents('.item').addClass('selected');
});
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
    infinite:true,
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
