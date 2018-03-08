$(document).ready(function() {
    //modal open setup
    function addModalOpen(){
$('body').addClass('modal-open');
      $('.modal').on('hidden.bs.modal', function () {
          $('body').addClass('modal-open');
      });
    }
    $('.modal-opener').click(function(){
        var id=$(this).attr('data');
        if ($(window).innerWidth() <= 768) {

            if(id=="bookNow"){

              $('#bookNow').fadeIn(500,function(){
                addModalOpen();
              });
            }
            if(id=="addToCart"){
              $('#addToCart').fadeIn(500,function(){
                addModalOpen();
                $('#bookNow').hide();
              });
            }
            if (id=="checkout"){
              $('body').removeClass('modal-open');
                $('#checkout').show();
                $('header').addClass('over');
                $('header, #main').addClass('coming-in');
                setTimeout(function(){
                    $('#addToCart').modal('hide');
                },500);
                $('#home').hide();
                $('#addToCart').hide();

            }
        }else{
          //desktop
          $('.modal').modal('hide');
          $(this).parents('.modol').fadeIn();
        }

                             });
 $('#addToCart .close , #addToCart .cancel').click(function(){
   $('#addToCart').fadeOut();
});
$('#checkout .cancel').click(function(){
  $('header').removeClass('over');
  $('header, #main').removeClass('coming-in');
  $('#home').fadeIn();
  $('#checkout').fadeOut();
});
    //1- listen for popup opener clicked
    //2- get its ID
    //3- check if desktop --> fade in and out popup
    //4 - if mobile start animation depending on the ID
    //5 - close any other opened popups

    //remove item from cart
    $('.delete-item').click(function(){
        $(this).parents('.cart-card').slideUp(400, function() {

            $(this).parents('.cart-card').remove();
        });
    });
    if ($(window).innerWidth() <= 768) {
        $('#bookNow .close').click(function() {
            popupClose($(this))
        })
        $('#bookNow .cancel').click(function() {
            popupClose($(this))
        })
    }

    //popup close
    function popupClose(clicked) {

        clicked.removeAttr('data-dismiss');
        $('html, body').animate({
            scrollTop: ($('body').offset().top)
        }, 0)

        $('body').addClass('closing');
        setTimeout(function() {
            $('#bookNow').hide().removeClass('in');
            $('body').removeClass('closing');
            $('body').removeClass('modal-open');
            $('body').removeClass('closing');
            $('body').addClass('trans');

            setTimeout(function() {
                $('body').addClass('closed');
                $('body').removeClass('trans');
                $('body').removeClass('closed');
                $('#bookNow').modal('hide');
            }, 1000);
        }, 1000);

    }
    //toggle selected for popups
    $('.item-radio').click(function() {
        $(this).parents('.book-now').find('.item').removeClass('selected');
        $(this).parents('.item').addClass('selected');
    });
    initSlider();
    if ($(window).innerWidth() >= 1025) {
        $('.slider').hide();
        $('.slider').slick('unslick');
        //$('.trending .card').attr('style', 'width:'+getSlideWidth() +'!important');
        $('.slider').show();
    }
});

function initSlider() {
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        infinite: false,
        variableWidth: true,
        initialSlide: 2,
        arrows: false,
        slidesToShow: 5,
        infinite: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                initialSlide: 2,
                slidesToShow: 2
            }
        },
                     {
                         breakpoint: 769,
                         settings: {
                             initialSlide: 2,
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

function getSlideWidth() {
    var sliderWidth = ($('.trending').outerWidth() - 10) * .83;
    var slideWhidth = ((sliderWidth - 30) / 5) - 6;
    return slideWhidth;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    $('.closebtn').css('display', 'block');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.closebtn').hide();
}
$(window).resize(function() {

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
