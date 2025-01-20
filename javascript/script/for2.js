// 반복문 forEach와 for..of
const list1Li = document.querySelectorAll('.list1 li');
const contentsP = document.querySelectorAll('.contents p')
console.log(list1Li, contentsP);
// 1. for..of 객체 요소 접근
for(let i of list1Li){
    console.log(i);
    i.style.backgroundColor = 'yellow';
    i.addEventListener('mouseover',()=> i.style.backgroundColor = 'aqua')
    i.addEventListener('mouseout',()=> i.style.backgroundColor = 'yellow')
    /* for..of를 이용한 DOM요소접근방법은 실제 요소 개수 상관없이 for의 변수를 이용하여 이벤트 및 속성, 메소드 등을 한 번에 해결가능하다. (for문 안에서 작성) */
}
console.log('============================================')
// 1. forEach 객체 요소, 인덱스, 배열 접근 반복문
// list1Li.forEach(function(){})
list1Li.forEach((target, index, array)=>{
    console.log(target, index, array);
    /* 요소 종류가 2개 이상일 때, 인덱스 개수가 일치할 때 */
    target.addEventListener('mouseover',()=>{
        target.style.borderTop = '2px dashed red';
        console.log(contentsP, index); /* list1의 index 순서이지만 contents와 객체 숫자가 같으므로 이용가능 */
        contentsP[index].style.backgroundColor = 'lime';
    })
})
console.log('============================================')
/* 탭 제목과 내용 자바스크립트 알고리즘 정리 */
// 1. (초기세팅)
// 1-1. "tabC" 탭 내용 모두 숨기기 -> 함수생성 "tabCHide"
// 1-2. 탭 내용 1 보이기
// 1-3. 탭제목 클래스 초기화 -> 함수생성 "tabClsReset"
// 1-4. 탭제목 1 클래스 적용
const tabC = document.querySelectorAll('.tab_contents > div');
const tabT = document.querySelectorAll('.tab_title > a');
console.log(tabC, tabT);

function tabCHide(){ /* 탭 내용 모두 숨기기 함수(생성) */
    for(let i of tabC) i.style.display = 'none';
}
function tabClsReset(){ /* 탭 제목 클래스 모두 초기화 함수(생성) */
    for(let i of tabT) i.classList.remove('active');
}
tabCHide(); /* 모두 숨기기 함수(호출) */
tabC[0].style.display = 'block';
tabClsReset(); /* 클래스 모두 초기화 함수(호출) */
tabT[0].classList.add('active');


// 2. "tabT" 탭제목을 클릭 했을 때(1,2,3,4 모두 가능)
// 2-1. 탭제목 클래스 초기화
// 2-2. 탭제목 클래스 적용(현재 이벤트 대상)
// 2-3. 탭내용 모두 숨기기
// 2-4. 탭내용 보이기(현재 이벤트대상과 같은 인덱스 탭내용)
tabT.forEach((target,index)=>{
    target.addEventListener('click',()=>{
        tabClsReset();
        target.classList.add('active');
        tabCHide();
        tabC[index].style.display='block';
    })
})

console.log('====================================중첩반복문')
// for(초기값; 조건식; 증감식){ for(초기값; 조건식; 증감식){} }
// 1단 for문이 한번 실행될 때 2단 for는 거짓이 될 때까지 모두 반복시킨다.
for(let i=1; i<3; i++){/* 1, 2 출력되는 1단 반복문 */
    for(let j=7; j<10; j++){ /* 7,8,9 출력되는 2단 반복문 */
        console.log(`1단 : ${i}, 2단 : ${j}`)
    }
}

// 구구단식
// 2x1=2
// 2X2=4
let danResult='';
const dan99 = document.querySelector('.dan99');

for(let i=2; i<=9; i++){ /* 2단~9단 for */
    for(let j=1; j<10; j++){
        danResult += `${i}x${j}=${i*j}<br>`
        // console.log(danResult);
    }
    danResult += `<hr>`;
}
dan99.innerHTML=danResult;

console.log('=======================다중반복문이용 태그생성하기')
/* ul>li*4 구조 생성 */
const testDiv = document.querySelector('.test');
const ul = document.createElement('ul');
console.log(ul);

for(let i=0; i<4; i++){
    ul.innerHTML += `<li>list ${i+1}</li>`;
}
testDiv.appendChild(ul)

console.log('================================while() 반복문')
// 주방장 입장
// 주문이 완료될 때까지 '주문요청' 무한반복
/* let orderFood = prompt('주문요청');
while(orderFood != 'y'){
    orderFood = prompt('주문요청');
} */

/* let quiz1 = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요')
while(quiz1 != 'x'){
    quiz1 = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요')
}
alert('정답입니다!'); */

// CSS 무한문제풀기
/* let quiz2 = prompt('fixed 포지션은 스크롤 길이와 관계없이 웹브라우저 위치에 고정된다.')
while(quiz2 != 'o'){
    quiz2 = prompt('fixed 포지션은 스크롤 길이와 관계없이 웹브라우저 위치에 고정된다.')
}
alert('정답입니다!'); */

console.log('==============================continue, break')
for(let i=1; i<=10; i++){
    //if(i==7) break;
    if(i==7) continue;
    console.log(i);
}