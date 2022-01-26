var swiper2 = new Swiper('.banner-2 .swiper', {
    slidesPerView: 1.6,//一次在螢幕上顯示多少張
    spaceBetween: 15,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    observer: true,
    observeParents: true,

    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: '.banner-2 .swiper-button-next',
        prevEl: '.banner-2 .swiper-button-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },
    // on:{
    //     click: function(e){
    //         // console.log(element.clickedIndex);
    //         // console.log((element.clickedIndex-5)%6);
    //         // console.log(this.dataset.index);

    //         console.log(e.matches(".swiper-slide.swiper-slide-3"));
    //         // if(element.t.matches(".swiper-slide")){
    //         // }
    //         // console.log(element.el.dataset.qw);
    //         big_prize_backgroung.style['display']="flex";
    //     },
    //   },
});
var swiper4 = new Swiper('.banner-4 .swiper', {
    slidesPerView: 1.4,
    spaceBetween: 11,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    observer: true,
    observeParents: true,

    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: '.banner-4 .swiper-button-next',
        prevEl: '.banner-4 .swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3.3,
            spaceBetween: 16,
        }
    },
    loop: true,
});
function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    return direction;
}