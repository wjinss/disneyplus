$(".bg_img:eq(0)").addClass("active")
let timer=setInterval(fadeInOut,6000)

function fadeInOut(){
    let now_img=$(".bg_img:eq(0)")
    let next_img=$(".bg_img:eq(1)")
    next_img.addClass("active").css({opacity:0}).animate({opacity:1},1000, function(){
        now_img.removeClass("active")
        $(".visual_bg").append(now_img)  
    })
};

$(".qna_box").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        $(".answ").stop().slideUp()
    }else{
        $(".qna_box").removeClass("active")
        $(".answ").stop().slideUp()
        $(this).addClass("active")
        $(this).next().stop().slideDown()
    }
})

$(".btn_cta").click(function(){
    $(".modal").removeClass("disappear")
    $(".modal").addClass("appear")
})
$(".btn_close").click(function(){
    $(".modal").addClass("disappear")
    $(".modal").remove("appear")
})



 let swiper1 = new Swiper(".mySwiper1", {
slidesPerView: 2,
spaceBetween: 20,
centeredSlides: true,
loop:true,
autoplay: { delay: 4000, disableOnInteraction: false },
breakpoints: {
600: {
slidesPerView: 2.5,
spaceBetween: 25,
},
800: {
slidesPerView: 3.5,
spaceBetween: 20,
},
1100: {
slidesPerView: 4,
spaceBetween: 40,
},
1400: {
slidesPerView: 4,
spaceBetween: 50,
},
1700: {
slidesPerView: 4,
spaceBetween: 50,
},
},
});

let swiper2 = new Swiper(".mySwiper2", {
slidesPerView: 2,
spaceBetween: 20,
centeredSlides: false,
loop:true,
autoplay: { delay: 4000, disableOnInteraction: false },
breakpoints: {
600: {
slidesPerView: 2.5,
spaceBetween: 25,
},
800: {
slidesPerView: 3.5,
spaceBetween: 20,
},
1100: {
slidesPerView: 4,
spaceBetween: 40,
},
1400: {
slidesPerView: 4,
spaceBetween: 50,
},
1700: {
slidesPerView: 4,
spaceBetween: 50,
},
},
});

let swiper3 = new Swiper(".mySwiper3", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  loop:true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
  600: {
    coverflowEffect: {
    depth: 400,
    modifier: 2,
    slideShadows: true,
},},
1100: {
    coverflowEffect: {
    depth: 250,
    modifier: 3,
    slideShadows: true,
},},
},
});