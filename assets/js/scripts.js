$(document).ready(function() {
    //scan doc init
    //-------------------
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("DE98C274D1023E4A95FBA2096D33E218");
    var lib = comp.getLibrary();
    handleComplete({}, comp);
    //--------------------
    //logo go to home
    //______________________
    $('.logo *').click(function() {
        goToHome();
    })
    //______________________
    //logo go to home end

    //go to home
    function goToHome() {
        //  $('.small-sponsors').hide();
        $('.modal,.page-popup').fadeOut();
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
            //--------------------------------------------------
            //mobile popups start
            //--------------------------------------------------
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
            if (id == "payment") {
                $('#payment').fadeIn(500, function() {
                    addModalOpen();

                });
            }
            if (id == "checkout") {
                $('.modal,.page-popup').hide();
                if ($(this).attr('point') == "header") {
                    $('#checkout').slideDown(600, function() {
                        $('body').addClass('cart-slide');
                    });
                } else {
                    $('body').addClass('coming-in');
                }
                $('body').removeClass('modal-open');
                $('#checkout').show();
                $('header').addClass('over');
                setTimeout(function() {
                    $('body').addClass('came-in');
                    $('#addToCart').hide();
                }, 500);
                $('#home').hide();
                $('#addToCart').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            }
            if (id == "createAccount") {
                $('.modal,.page-popup').hide();
                $('body').removeClass('page-opened');
                $('body').addClass('modal-open');
                $('#createAccount').slideDown();

            }
            if (id == "login") {
                $('.modal,.page-popup').hide();
                //$('body').removeClass('page-opened');
                $('body').addClass('modal-open');
                $('#login').fadeIn();

            }
            if (id == "accountCreated") {
                $('.modal,.page-popup').hide();
                $('#accountCreated').show();
                $('#home').hide();

            }
            if (id == "accountCreated") {
                $('.modal,.page-popup').hide();
                //$('body').removeClass('modal-open');
                $('#accountCreated').show();
                $('#home').hide();
                $('#checkout').show();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            }
            if (id == "myProfile") {
                $('.modal,.page-popup').hide();
                $('body').removeClass('modal-open');
                $('body').addClass('page-opened');
                $('#myProfile').fadeIn();
                setTimeout(function() {
                    $('#accountCreated').modal('hide');
                }, 500);
                $('#home').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)

            }
            if (id == "verifyData") {
                $('body').addClass('modal-open');
                $('#verifyData').fadeIn();
                setTimeout(function() {
                    $('#verifyData .scanning').hide();
                    $('#verifyData .scan-success').fadeIn();
                }, 4000);
            }
            if (id == "paymentMethods") {
                $('body').removeClass('modal-open');
                $('body').addClass('page-opened');
                $('.modal').fadeOut();
                $('#myProfile').hide();
                $('#paymentMethods').fadeIn(500, function() {
                    $('#verifyData .scanning').show();
                    $('#verifyData .scan-success').hide();
                });

            }
            if (id == "orderComplete") {
                $('body').attr('class', '');
                $('body').addClass('page-opened');
                $('#orderComplete').fadeIn();

                    $('#payment').fadeOut();
                    $('#paymentMethods').fadeOut();

                $('#home').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            }
            if (id == "changePassword") {
                $('.modal,.page-popup').hide();
                $('body').addClass('modal-open');
                $('#changePassword').fadeIn();

            }
            //--------------------------------------------------
            //mobile popups end
            //--------------------------------------------------
        } else {
            //desktop
            if (id == "checkout") {
                $('.modal,.page-popup').hide();
                $('body').removeClass('modal-open');
                $('body').addClass('page-opened');
                $('#checkout').fadeIn();
                setTimeout(function() {
                    $('#addToCart').modal('hide');
                }, 500);
                $('#home').hide();
                $('#addToCart').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            } 

            else if (id == "createAccount") {
                $('.modal,.page-popup').hide();
                //  $('body').removeClass('modal-open');
                $('body').removeClass('page-opened');
                $('#createAccount').fadeIn();
                setTimeout(function() {
                    $('#checkout').modal('hide');
                    $('body').addClass('modal-open');
                }, 500);
                $('#home').show();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            } 

            else if (id == "payment") {
                $('#payment').fadeIn();
            } 

            else if (id == "orderComplete") {
                $('body').attr('class', '');
                $('body').addClass('page-opened');
                $('#orderComplete').fadeIn();
                $('#payment').fadeOut();
                $('#paymentMethods').fadeOut();
                $('#home').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            } 

            else if (id == "accountCreated") {
                $('.modal,.page-popup').hide();
                //$('body').removeClass('modal-open');
                $('#accountCreated').show();
                $('#home').hide();
                $('#checkout').show();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            } 

            else if (id == "myProfile") {
                $('.modal,.page-popup').hide();
                $('body').removeClass('modal-open');
                $('body').addClass('page-opened');
                $('#myProfile').fadeIn();
                setTimeout(function() {
                    $('#accountCreated').modal('hide');
                }, 500);
                $('#home').hide();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
            } 

            else if (id == "verifyData") {
                $('body').addClass('modal-open');
                $('#verifyData').fadeIn();
                $('html, body').animate({
                    scrollTop: ($('body').offset().top)
                }, 0)
                setTimeout(function() {
                    $('#verifyData .scanning').hide();
                    $('#verifyData .scan-success').fadeIn();
                }, 4000);

            } 

            else if (id == "paymentMethods") {
              $('body').removeClass('modal-open');
              $('body').addClass('page-opened');
              $('.modal').fadeOut();
              $('#myProfile').hide();
              $('#home').hide();
              $('#paymentMethods').fadeIn(500, function() {
                  $('#verifyData .scanning').show();
                  $('#verifyData .scan-success').hide();
              });

            }

            else if (id == "changePassowrd") {

                $('.modal,.page-popup').hide();
                $('body').addClass('modal-open');
                $('#chnagePassowrd').fadeIn();

            }
            else {
                $('.modal').modal('hide');
                $('.page-popup').modal('hide');
                $('#bookNow .close , #bookNow .cancel').click(function() {
                    $('body').removeClass('modal-open');
                    $('#bookNow').fadeOut();


                });
                $('.modal').fadeOut();
                $('.page-popup').fadeOut();
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
    $('#verifyData .cancel').click(function() {
        $('body').removeClass('modal-open');
        $('#verifyData').fadeOut();
    });
    $('#accountCreated .close').click(function() {
        $('body').removeClass('modal-open');
        $('#accountCreated').fadeOut();
    });
    $('#payment .close , #payment .cancel').click(function() {
        $('body').removeClass('modal-open');
        $('#payment').fadeOut();
    });
    $('#checkout .cancel').click(function() {
        goToHome();
        $('#checkout').fadeOut();
    });
    $('#createAccount .close').click(function() {
        goToHome();
        $('#createAccount').fadeOut();
    });
    $('#login .close').click(function() {
        $('#login').fadeOut();
        $('#createAccount').fadeIn();
    });
        $('#changePassword .close').click(function() {
        $('#changePassword').fadeOut();
        $('#login').fadeIn();
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

    //popup close book now special animation
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
    $('#createAccount .checkbox input').click(function() {
        $(this).parents('.checkbox').toggleClass('selected');
    });
    $('#login .checkbox input').click(function() {
        $(this).parents('.checkbox').toggleClass('selected');
    });
    //focus on input show label
    $('.form-item .form-input').focus(function() {
        $(this).siblings('.form-label').css('opacity', '1');
    });
    $('.form-item .form-input').blur(function() {
        if (!this.value) {
            $(this).siblings('.form-label').css('opacity', '0');
        } else {
            $(this).siblings('.form-label').css('opacity', '1');
        }
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




//file uploader
$("#uploadFile").change(function() {
    var formData = new FormData();
    formData.append('file', this.files[0]);

    $("#files").append($("#fileUploadProgressTemplate").tmpl());
    $("#fileUploadError").addClass("hide");

    $.ajax({
        url: '/echo/json/',
        type: 'POST',
        xhr: function() {
            var xhr = $.ajaxSettings.xhr();
            if (xhr.upload) {
                xhr.upload.addEventListener('progress', function(evt) {
                    var percent = (evt.loaded / evt.total) * 100;
                    $("#files").find(".progress-bar").width(percent + "%");
                }, false);
            }
            return xhr;
        },
        success: function(data) {
            $("#files").children().last().remove();
            $("#files").append($("#fileUploadItemTemplate").tmpl(data));
            $("#uploadFile").closest("form").trigger("reset");
        },
        error: function() {
            $("#fileUploadError").removeClass("hide").text("An error occured!");
            $("#files").children().last().remove();
            $("#uploadFile").closest("form").trigger("reset");
        },
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    }, 'json');
});


//scan doc function
//___________________
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    exportRoot = new lib.Scan_Docs();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(true, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
