$(function(){
    
    /*-------- About counterup  start -----------*/
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });
    /*-------- About counterup  slider end -----------*/
    
    /*-------- about counter_slider  slider start -----------*/
    $('.counter_slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: false,
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
                margin:10,
                autoplay: true,
            },
            576:{
              items:2,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            768:{
                items:3,
                nav:false,
                loop: true,
                dots: false,
                autoplay: false,
            },
        }
    })
    /*-------- about counter_slider  slider end -----------*/

    /*-------- about award  slider start -----------*/
    $('.award_silder').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: false,
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
                dots: true,
                margin:10,
                autoplay: true,
            },
            576:{
              items:2,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            768:{
                items:3,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            992:{
                items:4,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
        }
    })
    /*-------- about award  slider end -----------*/

    /*-------- about leader   slider start -----------*/
    $('.leader_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autoplay: false,
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
                dots: true,
                margin:10,
                autoplay: true,
            },
            576:{
              items:2,
              nav:false,
              loop: true,
              dots: true,
              autoplay: true,
          },
            768:{
                items:3,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
            992:{
                items:4,
                nav:false,
                loop: true,
                dots: false,
                autoplay: true,
            },
        }
    })
    /*-------- about leader  slider end -----------*/

        /*-------- beacome a vendor seller  slider start -----------*/
        $('.seller_slider').owlCarousel({
            loop: false,
            margin: 20,
            nav: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplaySpeed: 1500,
            items: 2,
            dots: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop: true,
                    dots: true,
                    margin:10,
                    autoplay: true,
                },
                576:{
                  items:2,
                  nav:false,
                  loop: true,
                  dots: true,
                  autoplay: true,
              },
                768:{
                    items:2,
                    nav:false,
                    loop: true,
                    dots: false,
                    autoplay: true,
                },
                992:{
                    items:2,
                    nav:false,
                    loop: true,
                    dots: false,
                    autoplay: true,
                },
            }
        })
        /*-------- recenbeacome a vendor seller tview  slider end -----------*/

        /*-------- contact_slider slider start -----------*/
        $('.contact_slider').owlCarousel({
            loop: false,
            margin: 20,
            nav: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplaySpeed: 1500,
            items: 4,
            dots: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop: true,
                    dots: true,
                    margin:10,
                    autoplay: true,
                },
                576:{
                  items:2,
                  nav:false,
                  loop: true,
                  dots: true,
                  autoplay: true,
              },
                768:{
                    items:3,
                    nav:false,
                    loop: true,
                    dots: false,
                    autoplay: true,
                },
                992:{
                    items:4,
                    nav:false,
                    loop: true,
                    dots: false,
                    autoplay: true,
                },
            }
        })
        /*-------- contact_slider  slider end -----------*/
          
})
