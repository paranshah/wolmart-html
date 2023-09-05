
// menu bar fix part start===============================================================

var navoff = $('#main-menu').offset().top;

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > navoff){
    $('#main-menu').addClass('menu_fix')
  }

  else{
    $('#main-menu').removeClass('menu_fix')
  }

});

// menu bar fix part end===============================================================




$(function () {
    // top menu search box part start====================

    $(".default_option").click(function () {
        $(".dropdown ul").addClass("active");
    });

    $(".dropdown ul li").click(function () {
        var text = $(this).text();
        $(".default_option").text(text);
        $(".dropdown ul").removeClass("active");
    });

    var lolol = $('.search-bar').offset().top;

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
    
      if(scrolling > lolol){
        $('.search-bar').addClass('search-barfix')
      }
    
      else{
        $('.search-bar').removeClass('search-barfix')
      }
    
    });



    var lolo = $('#search').offset().top;

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > lolo){
    $('#search').addClass('search-fix')
  }

  else{
    $('#search').removeClass('search-fix')
  }

});

    // ============================top menu search box end

    /*-------- banner slider start ---------*/
    $('.banner_slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 1,
        dots: false,
    })
    /*-------- banner slider end -----------*/

    /*-------- support slider start -----------*/
    $('.support_items_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 4,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop: true,
                autoplay: true,
                margin: 10,
            },
            576:{
                items:2,
                nav:false,
                loop: true,
                autoplay: true,
            },
            768:{
                items:3,
                nav:false,
                loop:true,
                autoplay: true,
            },
            992:{
                items:3,
                nav:false,
                loop:false,
                autoplay: true,
            },
            1200:{
                items:4,
                nav:false,
                loop:true,
                autoplay: true,
            }
        }
    })
    /*-------- support slider end -----------*/

    /*-------- service slider start -----------*/
    $('.service_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 8,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                loop: true,
                nav:false,
                dots: true,
                autoplay: true,
                margin: 10,
            },
            576:{
                items:3,
                nav:false,
                dots: true,
                autoplay: true,
            },
            768:{
                items:4,
                nav:false,
                loop:false,
                dots: true,
                autoplay: true,
            },
            992:{
                items:6,
                nav:false,
                loop:false,
                dots: true,
                autoplay: true,
            },
            1200:{
                items:7,
                nav:false,
                loop:true,
                dots: false,
                autoplay: true,
            },
            1400:{
                items:8,
                nav:false,
                loop:true,
                dots: false,
                autoplay: true,
            },
        }
    })
    /*-------- service slider end -----------*/

    // /*-------- deals of day slider start -----------*/
    $('.dealsday_slider').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1500,
      items: 5,
      dots: false,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
              margin: 10,
          },
          576:{
              items:3,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,

          },
          768:{
              items:4,
              nav:false,
              loop:true,
              dots: true,
              autoplay: true,
          },
          992:{
              items:4,
              nav:false,
              loop:true,
              dots: false,
              autoplay: true,
            },
          1200:{
              items:5,
              nav:false,
              loop:true,
              dots: false,
              autoplay: true,
          }
      }
  })
  // /*-------- deals of day slider end -----------*/
  
    /*-------- vendor slider start -----------*/
    $('.vendor_slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 3,
        dots: false,
        responsiveClass:true,
        responsive:{
          0:{
              items:2,
              nav:false,
              loop: true,
              autoplay: true,
          },
          576:{
              items:3,
              nav:false,
              loop: true,
              autoplay: true,
          },
          768:{
              items:3,
              nav:false,
              loop:true,
              autoplay: true,
          },
          992:{
              items:2,
              nav:false,
              loop:true,
              autoplay: true,
          },
          1200:{
              items:2,
              nav:false,
              loop:true,
              autoplay: true,
          },
          1400:{
              items:3,
              nav:false,
              loop:true,
              autoplay: true,
          },
      }
    })
    /*-------- vendor slider end -----------*/

    /*-------- trand slider start -----------*/
    $('.trand_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 3,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop: true,
                dots: true,
                margin: 10,
                autoplay: true,
            },
            576:{
                items:1,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            768:{
                items:2,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            992:{
              items:2,
              nav:false,
              loop: true,
              dots: false,
              autoplay: true,
            },
            1200:{
              items:3,
              nav:false,
              loop: true,
              dots: false,
              autoplay: true,
            },
        }
    })
    /*-------- trands slider end -----------*/

    /*-------- clotheapprel slider start -----------*/
    $('.cna_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 4,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                loop: true,
                dots: true,
                margin: 10,
                autoplay: true,
            },
            576:{
                items:3,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            768:{
              items:4,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            992:{
              items:3,
              nav:false,
              loop: true,
              dots: false,
              autoplay: true,
            },
            1200:{
              items:4,
              nav:false,
              loop: true,
              dots: false,
              autoplay: true,
            },
        }
    })
    /*-------- clotheapprel slider end -----------*/

    /*-------- electronics slider start -----------*/
    $('.elect_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 4,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                loop: true,
                dots: true,
                margin: 10,
                autoplay: true,
            },
            576:{
                items:3,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            768:{
              items:4,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            992:{
                items:3,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            1200:{
                items:4,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
        }
    })
    /*-------- electronics slider end -----------*/

    /*-------- gift and gadgets slider start -----------*/
    $('.giftgad_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 4,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            576:{
                items:3,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            768:{
              items:4,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            992:{
                items:3,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            1200:{
                items:4,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            }
        }
    })
    /*-------- gift and gadgets slider end -----------*/

    /*-------- client  slider start -----------*/
    $('.client_slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 8,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            600:{
                items:3,
                nav:false,
                loop: true,
                dots: true,
                autoplay: true,
            },
            768:{
              items:4,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            992:{
                items:6,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            1200:{
               items:7,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            1400:{
               items:8,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
        }
    })
    /*-------- client  slider end -----------*/

    /*-------- wolmart product mixitup area start -----------*/

    var containerEl = document.querySelector('.product_wrapper');

    var mixer = mixitup(containerEl);

    /*-------- wolmart product mixitup end -----------*/

    /*-------- recentview  slider start -----------*/
    $('.recentview_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        items: 8,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                loop: true,
                dots: true,
                margin:10,
                autoplay: true,
            },
            768:{
              items:4,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            992:{
                items:6,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            1200:{
                items:7,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            1400:{
                items:8,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            }
        }
    })
    /*-------- recentview  slider end -----------*/
})


// footer email btn part start========================

function sendEmailDefault() {
    var email = "example@example.com";
    var subject = "Test Email";
    var msgBody = "Thank you for contacting us, we will get back to you in 24 hours!";
    window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

// ========================footer email btn part end




// ======================bigsale counter part start

$(function () {

    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 84;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {

                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's my birthday!";
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
                //seconds
            }, 0)
    }());
});


// ======================bigsale counter part end

// bannerwithsidebar productart satrt=========================

$('.categories-on').on('click', function () {
    $('.categories-on').css('opacity','0');
    $('.categories-on').css('z-index','-1');
    $('.categories-item').css('opacity','0');
    $('.rot').css('rotate', '40deg');
    $('.sidebar-all-Price-off').css('top','-410px');
    $('.sidebar-all-Price-on').css('top','-410px');
    $('.sidebar-all-Price-item').css('top','-380px');
    $('.sidebar-all-Price-item').css('z-index','-1');
    $('.sidebar-all-size-off').css('top','-450px');
    $('.sidebar-all-size-on').css('top','-450px');
    $('.sidebar-all-size-item').css('top','-410px');
    $('.sidebar-all-size-item').css('z-index','-1');

  });  

  $('.categories-off').on('click', function () {
    $('.categories-on').css('opacity','1');
    $('.categories-on').css('z-index','1');
    $('.categories-item').css('opacity','1');
    $('.rot').css('rotate', '0deg');
    $('.sidebar-all-Price-off').css('top','0px');
    $('.sidebar-all-Price-on').css('top','0px');
    $('.sidebar-all-Price-item').css('top','40px');
    $('.sidebar-all-size-off').css('top','0px');
    $('.sidebar-all-size-on').css('top','0px');
    $('.sidebar-all-size-item').css('top','40px');
    $('.sidebar-all-size-item').css('z-index','-1');
  });


//   $('.categories-off').on('click', function () {
//     $('.categories-off').css('top', '50px')
//   })

$('.sidebar-all-Price-on').on('click', function () {
    $('.sidebar-all-Price-on').css('opacity','0');
    $('.sidebar-all-Price-on').css('z-index','-1');
    $('.sidebar-all-Price-item').css('opacity','0');
    $('.rotprice').css('rotate', '40deg');
    $('.sidebar-all-size-off').css('top','-270px');
    $('.sidebar-all-size-on').css('top','-270px');
    $('.sidebar-all-size-item').css('top','-240px');
    $('.sidebar-all-size-item').css('z-index','-1');

  });

  $('.sidebar-all-Price-off').on('click', function () {
    $('.sidebar-all-Price-on').css('opacity','1');
    $('.sidebar-all-Price-on').css('z-index','1');
    $('.sidebar-all-Price-item').css('opacity','1');
    $('.rotprice').css('rotate', '0deg');
    $('.sidebar-all-size-off').css('top','0px');
    $('.sidebar-all-size-on').css('top','0px');
    $('.sidebar-all-size-item').css('top','40px');  
  });

$('.sidebar-all-size-on').on('click', function () {
    $('.sidebar-all-size-on').css('opacity','0');
    $('.sidebar-all-size-on').css('z-index','-1');
    $('.sidebar-all-size-item').css('opacity','0');
    $('.rotsize').css('rotate', '40deg');
  });

  $('.sidebar-all-size-off').on('click', function () {
    $('.sidebar-all-size-on').css('opacity','1');
    $('.sidebar-all-size-on').css('z-index','1');
    $('.sidebar-all-size-item').css('opacity','1');
    $('.rotsize').css('rotate', '0deg');    
  });
  
  $('.sidebar-all-color-on').on('click', function () {
    $('.sidebar-all-color-on').css('opacity','0');
    $('.sidebar-all-color-on').css('z-index','-1');
    $('.sidebar-all-color-item').css('opacity','0');
    $('.rotcolor').css('rotate', '40deg');
  });

  $('.sidebar-all-color-off').on('click', function () {
    $('.sidebar-all-color-on').css('opacity','1');
    $('.sidebar-all-color-on').css('z-index','1');
    $('.sidebar-all-color-item').css('opacity','1');
    $('.rotcolor').css('rotate', '0deg');    
  });

  $('.sidebar-all-brand-on').on('click', function () {
    $('.sidebar-all-brand-on').css('opacity','0');
    $('.sidebar-all-brand-on').css('z-index','-1');
    $('.sidebar-all-brand-item').css('opacity','0');
    $('.rotbrand').css('rotate', '40deg');
  });

  $('.sidebar-all-brand-off').on('click', function () {
    $('.sidebar-all-brand-on').css('opacity','1');
    $('.sidebar-all-brand-on').css('z-index','1');
    $('.sidebar-all-brand-item').css('opacity','1');
    $('.rotbrand').css('rotate', '0deg');    
  });

// ========================bannerwithsidebar product part end 


// ============================================== 

$('.descriptionnav').on('click', function () {
    $('.descriptionshow').css('display','block');
    $('.specificationshow').css('display','none');
    $('.descriptionnav').css('color','');
    $('.specification').css('color','');
    $('.vendor-info').css('color','');
    $('.vendor-info-show').css('display','none');
    $('.descriptionnav').css('color','#000');
    $('.customer-reviewss').css('color','');
    $('.customer-reviews-show').css('display','none');
  });

  $('.specification').on('click', function () {
    $('.specificationshow').css('display','block');
    $('.descriptionshow').css('display','none');
    $('.specification').css('color','#000');
    $('.vendor-info-show').css('display','none');
    $('.vendor-info').css('color','');
    $('.descriptionnav').css('color','');
    $('.customer-reviewss').css('color','');
    $('.customer-reviews-show').css('display','none');
  });


  $('.vendor-info').on('click', function () {
    $('.vendor-info-show').css('display','block');
    $('.descriptionshow').css('display','none');
    $('.vendor-info').css('color','#000');
    $('.specificationshow').css('display','none');
    $('.descriptionnav').css('color','');
    $('.specification').css('color','');
    $('.customer-reviewss').css('color','');
    $('.customer-reviews-show').css('display','none');
    
  });


  $('.customer-reviewss').on('click', function () {
    $('.customer-reviews-show').css('display','block');
    $('.customer-reviewss').css('color','#000');
    $('.specification').css('color','');
    $('.descriptionshow').css('display','none');
    $('.specificationshow').css('display','none');
    $('.specification').css('color','');
    $('.vendor-info').css('color','');
    $('.vendor-info-show').css('display','none');
    $('.descriptionshow').css('color','');
    
  });


  // ==========================================off bag part satar

    $('.bagsss').on('click', function () {
    $('.off-bag').css('right', '0')
  })

  $('.off-bag').on('click', function () {
    $('.off-bag').css('right', '-100%')
  })

  // ==========================================off bag part 

  // =================================off-register part start

  $('.sin-colora2').on('click', function () {
    $('.register-all-item-two').css('display', 'block');
    $('.register-all-item').css('display', 'none');
    $('.sin-colora2').css('color', '#f14242');
    $('.sin-colora').css('color', '');
    $('.bhover').css('display', 'block');
    $('.bhoverone').css('display', 'none');

  })


  $('.sin-colora').on('click', function () {
    $('.register-all-item-two').css('display', 'none');
    $('.register-all-item').css('display', 'block');
    $('.bhoverone').css('display', 'block');
    $('.bhover').css('display', 'none');
    $('.sin-colora').css('color', '#f14242');
    $('.sin-colora2').css('color', '');

  })


  $('.remove-register').on('click', function () {
    $('.off-register').css('opacity', '0')
  })

  $('.sin').on('click', function () {
    $('.off-register').css('top', '0')
  })

  
  $('.remove-register').on('click', function () {
    $('.off-register').css('opacity', '0')
  })

  $('.register').on('click', function () {
    $('.off-register').css('top', '0');
  })

   // =================================off-register part end  
  
  // offcanvas menu part start========================

    
  $('.offmenucome').on('click', function () {
    $('.off-main-menu').css('left', '0')
  });

  $('.cros-left').on('click', function () {
    $('.off-main-menu').css('left', '-100%')
  });

  $('.off-text-categories').on('click', function () {
    $('.menu-all-link').css('display', 'none');
    $('.categories-off-menu-item').css('display', 'block');
    $('.off-text-categories').css('color', '#f14242');
    $('.off-text-categories-hover').css('opacity', '1');
    $('.off-text-main-menu').css('color', '#fff');
    $('.off-text-main-menu-hover').css('opacity', '0');
  });

  $('.off-text-main-menu').on('click', function () {
    $('.menu-all-link').css('display', 'block');
    $('.categories-off-menu-item').css('display', 'none');
    $('.off-text-main-menu').css('color', '#f14242');
    $('.off-text-categories').css('color', '#fff');
    $('.off-text-categories-hover').css('opacity', '0');
    $('.off-text-main-menu-hover').css('opacity', '1');
  });

// main shop start========================

  $('.other-menu-dwon').on('click', function () {
    $('.other-menu-two').css('display', 'block');
    $('.other-menu-dwon').css('display', 'none');
    $('.other-menu-up').css('display', 'block');
  })

  $('.other-menu-up').on('click', function () {
    $('.other-menu-two').css('display', 'none');
    $('.other-menu-dwon').css('display', 'block');
    $('.other-menu-up').css('display', 'none');
  })
  
// one

  $('.other-menu-dwon-one-shop-pages').on('click', function () {
    $('.other-menu-two-in-one').css('display', 'block');
    $('.other-menu-dwon-one-shop-pages').css('display', 'none');
    $('.other-menu-up-two-shop-pages').css('display', 'block');
  })

  $('.other-menu-up-two-shop-pages').on('click', function () {
    $('.other-menu-two-in-one').css('display', 'none');
    $('.other-menu-dwon-one-shop-pages').css('display', 'block');
    $('.other-menu-up-two-shop-pages').css('display', 'none');
  })
  
// two

$('.other-menu-dwon-one-shop-layouts').on('click', function () {
  $('.other-menu-two-in-two').css('display', 'block');
  $('.other-menu-dwon-one-shop-layouts').css('display', 'none');
  $('.other-menu-up-two-shop-layouts').css('display', 'block');
})

$('.other-menu-up-two-shop-layouts').on('click', function () {
  $('.other-menu-two-in-two').css('display', 'none');
  $('.other-menu-dwon-one-shop-layouts').css('display', 'block');
  $('.other-menu-up-two-shop-layouts').css('display', 'none');
})

// threee

$('.other-menu-dwon-one-product-pages').on('click', function () {
  $('.other-menu-two-in-three').css('display', 'block');
  $('.other-menu-dwon-one-product-pages').css('display', 'none');
  $('.other-menu-up-two-product-pages').css('display', 'block');
})

$('.other-menu-up-two-product-pages').on('click', function () {
  $('.other-menu-two-in-three').css('display', 'none');
  $('.other-menu-dwon-one-product-pages').css('display', 'block');
  $('.other-menu-up-two-product-pages').css('display', 'none');
})

// four

$('.other-menu-dwon-one-product-layouts').on('click', function () {
  $('.other-menu-two-in-four').css('display', 'block');
  $('.other-menu-dwon-one-product-layouts').css('display', 'none');
  $('.other-menu-up-two-product-layouts').css('display', 'block');
})

$('.other-menu-up-two-product-layouts').on('click', function () {
  $('.other-menu-two-in-four').css('display', 'none');
  $('.other-menu-dwon-one-product-layouts').css('display', 'block');
  $('.other-menu-up-two-product-layouts').css('display', 'none');
})

// main shop end========================

// vendor part start======================

$('.other-menu-vendor-dwon').on('click', function () {
  $('.other-menu-vendor').css('display', 'block');
  $('.other-menu-vendor-dwon').css('display', 'none');
  $('.other-menu-vendor-up').css('display', 'block');
});

$('.other-menu-vendor-up').on('click', function () {
  $('.other-menu-vendor').css('display', 'none');
  $('.other-menu-vendor-dwon').css('display', 'block');
  $('.other-menu-vendor-up').css('display', 'none');
});

// one

$('.other-menu-dwon-one-vendor').on('click', function () {
  $('.other-menu-two-in-one-vendor').css('display', 'block');
  $('.other-menu-dwon-one-vendor').css('display', 'none');
  $('.other-menu-up-two-vendor').css('display', 'block');
})

$('.other-menu-up-two-vendor').on('click', function () {
  $('.other-menu-two-in-one-vendor').css('display', 'none');
  $('.other-menu-dwon-one-vendor').css('display', 'block');
  $('.other-menu-up-two-vendor').css('display', 'none');
  })

  // two

  $('.other-menu-dwon-one-vendor-one').on('click', function () {
    $('.other-menu-two-in-one-vendor-two').css('display', 'block');
    $('.other-menu-dwon-one-vendor-one').css('display', 'none');
    $('.other-menu-up-two-vendor-two').css('display', 'block');
  })
  
  $('.other-menu-up-two-vendor-two').on('click', function () {
    $('.other-menu-two-in-one-vendor-two').css('display', 'none');
    $('.other-menu-dwon-one-vendor-one').css('display', 'block');
    $('.other-menu-up-two-vendor-two').css('display', 'none');
    })

// vendor part end======================

// blog part start====================

$('.other-menu-blog-dwon').on('click', function () {
  $('.other-menu-blog').css('display', 'block');
  $('.other-menu-blog-dwon').css('display', 'none');
  $('.other-menu-blog-up').css('display', 'block');
});

$('.other-menu-blog-up').on('click', function () {
  $('.other-menu-blog').css('display', 'none');
  $('.other-menu-blog-dwon').css('display', 'block');
  $('.other-menu-blog-up').css('display', 'none');
});

// one

$('.other-menu-dwon-one-blog').on('click', function () {
  $('.other-menu-two-in-one-blog').css('display', 'block');
  $('.other-menu-dwon-one-blog').css('display', 'none');
  $('.other-menu-up-two-blog').css('display', 'block');
})

$('.other-menu-up-two-blog').on('click', function () {
  $('.other-menu-two-in-one-blog').css('display', 'none');
  $('.other-menu-dwon-one-blog').css('display', 'block');
  $('.other-menu-up-two-blog').css('display', 'none');
  })

// two

$('.other-menu-dwon-one-blog-one').on('click', function () {
  $('.other-menu-two-in-one-blog-two').css('display', 'block');
  $('.other-menu-dwon-one-blog-one').css('display', 'none');
  $('.other-menu-up-two-blog-two').css('display', 'block');
})

$('.other-menu-up-two-blog-two').on('click', function () {
  $('.other-menu-two-in-one-blog-two').css('display', 'none');
  $('.other-menu-dwon-one-blog-one').css('display', 'block');
  $('.other-menu-up-two-blog-two').css('display', 'none');
  })

// three

$('.other-menu-dwon-one-blog-three').on('click', function () {
  $('.other-menu-two-in-one-blog-three').css('display', 'block');
  $('.other-menu-dwon-one-blog-three').css('display', 'none');
  $('.other-menu-up-two-blog-three').css('display', 'block');
})

$('.other-menu-up-two-blog-three').on('click', function () {
  $('.other-menu-two-in-one-blog-three').css('display', 'none');
  $('.other-menu-dwon-one-blog-three').css('display', 'block');
  $('.other-menu-up-two-blog-three').css('display', 'none');
  })

// blog part end================

// pages part start=====================

$('.other-menu-pages-dwon').on('click', function () {
  $('.other-menu-pages').css('display', 'block');
  $('.other-menu-pages-dwon').css('display', 'none');
  $('.other-menu-pages-up').css('display', 'block');
});

$('.other-menu-pages-up').on('click', function () {
  $('.other-menu-pages').css('display', 'none');
  $('.other-menu-pages-dwon').css('display', 'block');
  $('.other-menu-pages-up').css('display', 'none');
});

// pages part end======================

// elements part start==================

$('.other-menu-elements-dwon').on('click', function () {
  $('.other-menu-elements').css('display', 'block');
  $('.other-menu-elements-dwon').css('display', 'none');
  $('.other-menu-elements-up').css('display', 'block');
});

$('.other-menu-elements-up').on('click', function () {
  $('.other-menu-elements').css('display', 'none');
  $('.other-menu-elements-dwon').css('display', 'block');
  $('.other-menu-elements-up').css('display', 'none');
});

// elements part end================


// Categories part start============================

$('.fashion-down').on('click', function () {
  $('.fashion-itemss').css('display', 'block');
  $('.fashion-down').css('display', 'none');
  $('.fashion-up').css('display', 'block');
});

$('.fashion-up').on('click', function () {
  $('.fashion-itemss').css('display', 'none');
  $('.fashion-down').css('display', 'block');
  $('.fashion-up').css('display', 'none');
});

// women main part start========================

$('.fashion-down-women').on('click', function () {
  $('.women-item').css('display', 'block');
  $('.fashion-down-women').css('display', 'none');
  $('.fashion-up-women').css('display', 'block');
});

$('.fashion-up-women').on('click', function () {
  $('.women-item').css('display', 'none');
  $('.fashion-down-women').css('display', 'block');
  $('.fashion-up-women').css('display', 'none');
});

// man part sart==================================

$('.fashion-down-men').on('click', function () {
  $('.men-item').css('display', 'block');
  $('.fashion-down-men').css('display', 'none');
  $('.fashion-up-men').css('display', 'block');
});

$('.fashion-up-men').on('click', function () {
  $('.men-item').css('display', 'none');
  $('.fashion-down-men').css('display', 'block');
  $('.fashion-up-men').css('display', 'none');
});

// carden part start===============================

$('.carden-down').on('click', function () {
  $('.carden-itemss').css('display', 'block');
  $('.carden-down').css('display', 'none');
  $('.carden-up').css('display', 'block');
});

$('.carden-up').on('click', function () {
  $('.carden-itemss').css('display', 'none');
  $('.carden-down').css('display', 'block');
  $('.carden-up').css('display', 'none');
});

// Bedroom part start=========================

$('.fashion-down-Bedroom').on('click', function () {
  $('.Bedroom-item ').css('display', 'block');
  $('.fashion-down-Bedroom').css('display', 'none');
  $('.fashion-up-Bedroom').css('display', 'block');
});

$('.fashion-up-Bedroom').on('click', function () {
  $('.Bedroom-item ').css('display', 'none');
  $('.fashion-down-Bedroom').css('display', 'block');
  $('.fashion-up-Bedroom').css('display', 'none');
});

// room part start==================================

$('.fashion-down-Room').on('click', function () {
  $('.Room-item').css('display', 'block');
  $('.fashion-down-Room').css('display', 'none');
  $('.fashion-up-Room').css('display', 'block');
});

$('.fashion-up-Room').on('click', function () {
  $('.Room-item').css('display', 'none');
  $('.fashion-down-Room').css('display', 'block');
  $('.fashion-up-Room').css('display', 'none');
});

// office part start========================

$('.fashion-down-office').on('click', function () {
  $('.office-item').css('display', 'block');
  $('.fashion-down-office').css('display', 'none');
  $('.fashion-up-office').css('display', 'block');
});

$('.fashion-up-office').on('click', function () {
  $('.office-item').css('display', 'none');
  $('.fashion-down-office').css('display', 'block');
  $('.fashion-up-office').css('display', 'none');
});

// kitchen part start=================================

$('.fashion-down-kitchen').on('click', function () {
  $('.kitchen-item').css('display', 'block');
  $('.fashion-down-kitchen').css('display', 'none');
  $('.fashion-up-kitchen').css('display', 'block');
});

$('.fashion-up-kitchen').on('click', function () {
  $('.kitchen-item').css('display', 'none');
  $('.fashion-down-kitchen').css('display', 'block');
  $('.fashion-up-kitchen').css('display', 'none');
});

// electronics part start==========================

$('.electronics-down').on('click', function () {
  $('.electronics-itemss').css('display', 'block');
  $('.electronics-down').css('display', 'none');
  $('.electronics-up').css('display', 'block');
});

$('.electronics-up').on('click', function () {
  $('.electronics-itemss').css('display', 'none');
  $('.electronics-down').css('display', 'block');
  $('.electronics-up').css('display', 'none');
});

// LAPTOPS & COMPUTERS part start===================


$('.fashion-down-Computers').on('click', function () {
  $('.Computers-item').css('display', 'block');
  $('.fashion-down-Computers').css('display', 'none');
  $('.fashion-up-Computers').css('display', 'block');
});

$('.fashion-up-Computers').on('click', function () {
  $('.Computers-item').css('display', 'none');
  $('.fashion-down-Computers').css('display', 'block');
  $('.fashion-up-Computers').css('display', 'none');
});

// DIGITAL CAMERAS part start=================

$('.fashion-down-Cameras').on('click', function () {
  $('.Cameras-item').css('display', 'block');
  $('.fashion-down-Cameras').css('display', 'none');
  $('.fashion-up-Cameras').css('display', 'block');
});

$('.fashion-up-Cameras').on('click', function () {
  $('.Cameras-item').css('display', 'none');
  $('.fashion-down-Cameras').css('display', 'block');
  $('.fashion-up-Cameras').css('display', 'none');
});

// CELL PHONES part start================================

$('.fashion-down-Phones').on('click', function () {
  $('.Phones-item').css('display', 'block');
  $('.fashion-down-Phones').css('display', 'none');
  $('.fashion-up-Phones').css('display', 'block');
});

$('.fashion-up-Phones').on('click', function () {
  $('.Phones-item').css('display', 'none');
  $('.fashion-down-Phones').css('display', 'block');
  $('.fashion-up-Phones').css('display', 'none');
});

// TV & Video part start=============================

$('.fashion-down-Video').on('click', function () {
  $('.Video-item').css('display', 'block');
  $('.fashion-down-Video').css('display', 'none');
  $('.fashion-up-Video').css('display', 'block');
});

$('.fashion-up-Video').on('click', function () {
  $('.Video-item').css('display', 'none');
  $('.fashion-down-Video').css('display', 'block');
  $('.fashion-up-Video').css('display', 'none');
});


// Furniture part start=======================

$('.Furniture-down').on('click', function () {
  $('.Furniture-itemss').css('display', 'block');
  $('.Furniture-down').css('display', 'none');
  $('.Furniture-up').css('display', 'block');
});

$('.Furniture-up').on('click', function () {
  $('.Furniture-itemss').css('display', 'none');
  $('.Furniture-down').css('display', 'block');
  $('.Furniture-up').css('display', 'none');
});

// Furniture-f part start=================

$('.fashion-down-Furniture-f').on('click', function () {
  $('.Furniture-f-item').css('display', 'block');
  $('.fashion-down-Furniture-f').css('display', 'none');
  $('.fashion-up-Furniture-f').css('display', 'block');
});

$('.fashion-up-Furniture-f').on('click', function () {
  $('.Furniture-f-item').css('display', 'none');
  $('.fashion-down-Furniture-f').css('display', 'block');
  $('.fashion-up-Furniture-f').css('display', 'none');
});

// Lighting part start==========================

$('.fashion-down-Lighting').on('click', function () {
  $('.Lighting-item').css('display', 'block');
  $('.fashion-down-Lighting').css('display', 'none');
  $('.fashion-up-Lighting').css('display', 'block');
});

$('.fashion-up-Lighting').on('click', function () {
  $('.Lighting-item').css('display', 'none');
  $('.fashion-down-Lighting').css('display', 'block');
  $('.fashion-up-Lighting').css('display', 'none');
});

// HOME ACCESSORIES part satrt=========================

$('.fashion-down-Accessories').on('click', function () {
  $('.Accessories-item').css('display', 'block');
  $('.fashion-down-Accessories').css('display', 'none');
  $('.fashion-up-Accessories').css('display', 'block');
});

$('.fashion-up-Accessories').on('click', function () {
  $('.Accessories-item').css('display', 'none');
  $('.fashion-down-Accessories').css('display', 'block');
  $('.fashion-up-Accessories').css('display', 'none');
});

// GARDEN & OUTDOORS part start========================

$('.fashion-down-Outdoors').on('click', function () {
  $('.Outdoors-item').css('display', 'block');
  $('.fashion-down-Outdoors').css('display', 'none');
  $('.fashion-up-Outdoors').css('display', 'block');
});

$('.fashion-up-Outdoors').on('click', function () {
  $('.Outdoors-item').css('display', 'none');
  $('.fashion-down-Outdoors').css('display', 'block');
  $('.fashion-up-Outdoors').css('display', 'none');
});

// Categories part end============================




  // ===============================offcanvas menu end

  

   //  coming soon part start============================

   const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secondsEl = document.getElementById("seconds");
  
  const newYears = "1 Jan 2023";
  
  function countdown() {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();
  
      const totalSeconds = (newYearsDate - currentDate) / 1000;
  
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;
  
      daysEl.innerHTML = days;
      hoursEl.innerHTML = formatTime(hours);
      minsEl.innerHTML = formatTime(mins);
      secondsEl.innerHTML = formatTime(seconds);
  }
  
  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }
  
  // initial call
  countdown();
  
  setInterval(countdown, 1000);

    // =======================coming soon part end
