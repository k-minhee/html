// 타이머함수
// 일정시간마다 반복하는 setInterval
// setInterval(실행함수, 실행시간)
// const 타이머변수 = setInterval(실행함수, 실행시간) 
// -> 타이머함수를 변수로 만들 수도 있음, 타이머함수 정지시킬 때 필요함
let num = 0;
const timerDiv = document.querySelector('.timer');
num = 5;
/*const timer1 = setInterval(function(){  // 1s=1000ms
    timerDiv.textContent = num;
    // console.log('timer'+num);
    //num--;
    //if(num==0) window.location.href = '../header_livart.html';
}, 1000); */

console.log('========================setInterval')
// 애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
const boxAni = document.querySelector('.box');
const boxTime = document.querySelector('.box_timer');
let box_num = 0;

let boxTimer = setInterval(timerFunc, 1000)
function timerFunc(){
    box_num++;
    boxTime.textContent = `진행시간 : ${box_num}초`
}

// STOP 버튼 클릭 시 진행시간, 애니메이션이 모두 정지
const stopBtn = document.querySelector('#stop');
const replayBtn = document.querySelector('#replay');

stopBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState = 'paused';
    clearInterval(boxTimer);
})
replayBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState = 'running';
    boxTimer = setInterval(timerFunc, 1000);
})

// 한 글자씩 작성하는 자바스크립트
const text = 'Portfolio 2025';
let i = 0; // 글자 인덱스 인식변수
const textSpan = document.querySelector('.container .text');
console.log(text,textSpan);

function writer(){
    if(i <= text.length){
        textSpan.innerHTML += text.charAt(i);
        i++;
        console.log(i, text.charAt(i));
    }
}
writer() //함수호출
// const textTimer = setInterval(writer, 250);

// 복습
const text2 = 'Portfolio 2025';
let j = 0;
const textSpan2 = document.querySelector('.container2 .text');

function writer2(){
    if(j<=text2.length){
        if(j==9) textSpan2.innerHTML += '<br>';
        textSpan2.innerHTML += text2.charAt(j);
        j++;
    }
}
const textTimer2 = setInterval(writer2, 250);