// const 변수명 = new Swiper('사용자정의클래스명', {속성:값, 속성:값})
// const 변수명 = new Swiper('사용자정의클래스명', {속성:{속성:값, 속성:값},})
const bestSwiper = new Swiper('.best_swiper', {
    // 속성:'값',
    // 속성:값,
    effect: 'fade',
    autoplay: { /* 1초 간격으로 넘어가기 */
        delay: 2000,
    },
});