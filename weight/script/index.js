// "userHeight", 사용자의 키를 받아올 변수
// "userWeight", 사용자의 몸무게를 받아올 변수
// "goals", 사용자의 적정 체중을 출력할 변수
// "normal_w", 초과값 계산값을 출력할 변수
// "btn", 사용자가 클릭 조건을 만족시켰을 때
// "result", 초과값을 계산할 변수
const userHeight = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const goals = document.querySelector('.goals');
const normal_w = document.querySelector('.normal_w');
const btn = document.querySelector('.btn');
let result_normal = '?';
let result_over = '?';

// console.log(typeof(userHeight.value));
goals.innerHTML = result_normal;
normal_w.innerHTML = result_over;


btn.addEventListener('click', function(){
    result_normal = ((Number(userHeight.value) - 100) * 0.9);
    goals.innerHTML = result_normal;
    result_over = Number(userWeight.value) - result_normal;
    normal_w.innerHTML = result_over;
})



