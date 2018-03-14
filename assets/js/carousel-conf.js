 $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    stagePadding: 0,
    autowidth: false,
    autoplay:true,
    autoplayTimeout:2000,
    navText: ['<i class="fa fa-arrow-circle-left" title="Anterior"></i>','<i class="fa fa-arrow-circle-right" title="Siguiente"></i>'],
    responsive: {
        0: {
            items:1,
            margin:10
        },
        500: {
            items:2,
            margin:20,
            stagePadding:10
        },
        850: {
            items: 3,
            margin: 20,
            stagePadding: 10
        }
    }

})