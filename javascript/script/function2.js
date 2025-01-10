// 250110 - 구구단 함수 복습
// 1. "danInput" input 요소에 사용자가 원하는 구구단 입력 후
// 2. "danBtn" button 요소 클릭 시
// 3. "dan99" 2번 조건 달성 시 호출할 수 있는 구구단 함수 생성
// 3-1. (함수 안) 함수 실행 시 마다 위 1번의 입력값을 받기 위해 '매개변수' 생성
// 3-2. (함수 안) 매개변수를 이용 구구단 식 제작 2x1=2
// 3-3. (함수 안) 출력하기 위한 "danResult" 변수 생성
// 3-4. (함수 안) 위 변수에 대입
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn');
const danResult = document.querySelector('.danResult');
console.log(danInput, danBtn, danResult); // 에러, undefined, null 체크

danBtn.addEventListener('click', function(){ dan99(Number(danInput.value)); })

function dan99(dan){
    let total = '';
    total = `${dan}x1 = ${dan*1}<br>`;
    total += `${dan}x2 = ${dan*2}<br>`;
    total += `${dan}x3 = ${dan*3}<br>`;
    total += `${dan}x4 = ${dan*4}<br>`;

    return danResult.innerHTML = total;

    /* danResult.innerHTML = `${dan}x1 = ${dan*1} <br>`;
    danResult.innerHTML += `${dan}x2 = ${dan*2} <br>`;
    danResult.innerHTML += `${dan}x3 = ${dan*3} <br>`;
    danResult.innerHTML += `${dan}x4 = ${dan*4} <br>`;
    return danResult.innerHTML += `${dan}x5 = ${dan*5}`; */
};