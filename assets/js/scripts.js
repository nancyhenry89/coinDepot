$(document).ready(function() {
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
            }, 500);
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
