$(document).ready(function() {

    //logo go to home
    //______________________
    $('.logo *').click(function() {
        goToHome();
    })
    //______________________
    //logo go to home end

    //go to home
    function goToHome() {
        $('.modal').fadeOut();
        $('.page-popup').fadeOut();
        $('body').attr('class', '');
        $('header').removeClass('over');
        $('#home').fadeIn();
        $('html, body').animate({
            scrollTop: ($('body').offset().top)
        }, 0)
    }
    //modal open setup
    function addModalOpen() {
        $('body').addClass('modal-open');
        $('.modal').on('hidden.bs.modal', function() {
            $('body').addClass('modal-open');
        });
    }
    $('.modal-opener').click(function() {
        var id = $(this).attr('data');
        if ($(window).innerWidth() <= 768) {

            if (id == "bookNow") {

                $('#bookNow').fadeIn(500, function() {
                    addModalOpen();
                });
            }
            if (id == "addToCart") {
                $('#addToCart').fadeIn(500, function() {
                    addModalOpen();
                    $('#bookNow').hide();
                });
            }
            if (id == "checkout") {
                if ($(this).attr('point') == "header") {
                    $('body').addClass('cart-slide');
                    $('#checkout').slideDown(600);
                } else {
                    $('body').addClass('coming-in');
                }
                $('body').removeClass('modal-open');
                $('#checkout').show();
                $('header').addClass('over');
                setTimeout(function() {
                    $('#addToCart').modal('hide');
                }, 500);
                $('#home').hide();
                $('#addToCart').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            }
        } else {
            //desktop
            if (id == "checkout") {
                $('body').removeClass('modal-open');
                $('body').addClass('cart-opened');
                $('#checkout').fadeIn();
                setTimeout(function() {
                    $('#addToCart').modal('hide');
                }, 500);
                $('#home').hide();
                $('#addToCart').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)


            } else {
                $('.modal').modal('hide');
                $('#bookNow .close , #bookNow .cancel').click(function() {
                    $('body').removeClass('modal-open');
                    $('#bookNow').fadeOut();


                });
                $('.modal').fadeOut();
                $('#' + id).fadeIn(500, function() {
                    addModalOpen();
                });
            }
        }

    });
    $('#addToCart .close , #addToCart .cancel').click(function() {
        $('body').removeClass('modal-open');
        $('#addToCart').fadeOut();
    });
    $('#checkout .cancel').click(function() {
        goToHome();
        $('#checkout').fadeOut();
    });

    //remove item from cart
    $('.delete-item').click(function() {
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