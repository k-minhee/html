// const newSlide = new Swiper ('.new_slide_wrap');  <-- 기본형태
const newSlide = new Swiper ('.new_slide_wrap',{
    mousewheel:true, // 웹사이트 수직페이지 전환시에만 사용
    direction: 'vertical',
});

const snsSlide = new Swiper ('.sns_portfolio',{
    autoplay: {
        delay: 1500,
    },
    speed: 800,
    loop: 'true',
    effect: 'cube',
})