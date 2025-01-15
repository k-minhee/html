// 자바스크립트 동적기능에 의해서 요소가 생성될 경우 createElement();

/* =======================================================변수 생성 위치 */
const new_child = document.createElement('div'); // 태그명만 작성
const new_p = document.createElement('p');
const new_a = document.createElement('a');
const child2 = document.querySelector('.child2');
const parent = document.querySelector('#parent');
const childNode = document.querySelectorAll('.child'); // 012 Nodes
const li = document.querySelectorAll('.list li');
const addBtn = document.querySelector('#add');
const onoffBtn = document.querySelector('#onoff');
const reBtn = document.querySelector('#re');

/* =======================================================콘솔로그 확인용 위치 */
console.log(new_child, parent, new_p, childNode, li, addBtn, onoffBtn, reBtn);
console.log(parent.children[0]);
console.log(parent.children[2].previousElementSibling);


/* ======================================================innerHTML 넣는 위치 */

// 기준이 되는 부모변수.appendChild(마지막 자식 위치에 추가하고 싶은 노드 변수)
new_child.innerText = 'new 요소 1'; // 삽입 전 태그 내부내용 작성 후 태그 생성하기
new_p.innerHTML = 'new 요소 2';
new_a.innerHTML = 'new 요소 3';

/* ======================================================실제 적용하는 위치 */

/* ==============================================(1. appendChild) */
child2.previousElementSibling.appendChild(new_p);
document.body.appendChild(new_p);
parent.children[2].previousElementSibling.appendChild(new_child);
// 기준부모변수.insertBefore(추가요소, 기준요소);
parent.insertBefore(new_p, childNode[2]);
parent.insertBefore(new_a, childNode[0]);
parent.insertBefore(new_a, childNode[1]);


/* ==============================================(2. remove, add) */
// 삭제대상변수.remove();
// 숨기는 개념이 아닌 요소 삭제 개념. 쇼핑몰 장바구니 삭제 등으로 이용
// childNode[0].remove();
// 숨기는대상의부모변수.removeChild(부모의n번째자식변수);
parent.removeChild(childNode[0]);
// style 속성을 이용한 css (최종 적용 속성이 1~2개 정도로 소수일 경우)
li[0].style.backgroundColor = 'coral';
li[0].style.fontSize = '2rem';
// 동시에 적용해야하는 CSS 속성이 3개 이상 많은 경우 class를 이용한다.
// 처음부터 적용된 클래스가 아닌 JS 동적결과에 의해 나중에 적용되는 디자인에 이용
li[1].classList = 'set1';
li[1].classList += ' set2';
li[2].classList.add('set1', 'set2');
li[2].classList.remove('set1');
li[3].classList.add('set1', 'set3');
li[4].classList = 'set4';
li[4].classList.remove('set4');
// style 시트에서 작성한 클래스의 순서대로 적용됨(값이 중복되는 경우)
li[5].classList.add('set1', 'set3', 'set4');


/* ==============================================(3. 버튼으로 제어하는 classList) */
addBtn.addEventListener('click', ()=>{
    li[6].classList.add('set1');
})
onoffBtn.addEventListener('click',()=>{
    li[7].classList.toggle('set2');
})
reBtn,addEventListener('click', ()=>{
    li[8].classList.replace('set2', 'set1'); // 기존 set2를 set1로 변경(remove와 add를 동시에)
})