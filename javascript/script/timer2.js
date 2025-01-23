// 일정시간 후 한 번 실행하고 끝나는 setTimeout 함수
// const 변수명 = setTimeout(실행함수, 시간)
// setTimeout(실행함수, 시간)
// setTimeout 내 함수를 별도로 생성하고 타이머 안에서 호출식으로도 많이 이용한다.
const timer1 = setTimeout(function(){
    console.log('한 번 실행하는 문구');
},2000)
const timer2 = setTimeout(test, 1000)
function test(){
    // return alert('한 번 실행하는 경고창')
}
const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    clearTimeout(timer2)
    console.log('timer2 정지') /* clearTimeout이 오류면 실행 안됨(확인용) */
    clearTimeout(timer1)
    console.log('timer1 정지')
})

// 무한으로 반복되며 올라가는 공지사항
// 최종목표: 공지1->2->3->4->1 (처음으로 다시 돌아가는 것이 반복되는 형태)
// 목표1. 공지 1->2->3->4
// 1. 어느방향으로 이동하는지, 그 방향에 따른 가로, 세로 크기는 무엇인지 체크
// 아래->위로 이동 == top, translateY, 크기 == 세로크기
// 좌->우로 이동 == left, translateX, 크기 == 가로크기
// 2. 가로 또는 세로크기가 결정됐다면? 이동요소 개수가 몇 개인지 인덱스 확인하기
// 세로로 이동한다면? (세로크기 * 인덱스) 계산해야함.
// 3. 변수 준비
// 공지 1,2,3,4를 모두 가지고 있는 움직이는 대상 ul "newsList"
// 개별요소 파악을 위한 li "newItems"
// 개별요소 크기 "itemsHeight"
// 인덱스 "currentIndex"

const newsList = document.querySelector('#list');
const newsItems = document.querySelectorAll('#list li');
const itemsHeight = newsItems[0].offsetHeight; //40;
let currentIndex = 0;
console.log(newsList, newsItems, itemsHeight, currentIndex);

const newsTimer = setInterval(()=>{
    currentIndex++;
    newsList.style.transform = `translateY(-${itemsHeight*currentIndex}px)`
    newsList.style.transition = 'transform 1s ease'
    
    // 모든 list가 이동했을 때 초기화하는 조건문과 setTimeout
    if(currentIndex == newsItems.length){
        console.log('초기화 조건문 실행')
        setTimeout(()=>{
            currentIndex = 0;
            newsList.style.transition = 'none';
            newsList.style.transform = 'translateY(0)'
        }, 1000) /* 트랜지션 시간과 동일하게 설정 */
    }

}, 1000)
