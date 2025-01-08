// =============DOM(Document Object Model -> 인터넷 창에서 보이는 요소들) 변수대입복습
// =============변수가 변하지 않는 고정 데이터라면? 
// const 변수명 대입연산자 반복되는 대입값;(DOM)
// =============변수가 변할 수 있는 수동 데이터라면?
// let 변수명 대입연산자 반복되는 대입값;
// var 변수명 대입연산자 반복되는 대입값;
// =============변수대입 DOM요소가 태그노드라면? -> 선언 후 배열형태확인 사용
// const 변수명 대입연산자 document.getElementsByTagName('태그');
// =============변수대입 DOM요소가 클래스노드라면?
// const 변수명 대입연산자 document.getElementsByClassName('클래스명');
// ============================배열형태 노드라면 직접 사용 시 [0] 인덱스 숫자 이용
// =============변수대입 DOM요소가 아이디노드라면?
// const 변수명 대입연산자 document.getElementById('아이디명');
const headerTag = document.getElementsByTagName('header');
console.log(headerTag); // 단순 테스트 확인 시 배열 전체 확인 가능
// 애니메이션 및 동적, 디자인 기능 등 직접 적용 시에는 배열 직접 접근(인덱스 활용)
headerTag[0].style = 'background-color:yellow'; // 객체.속성
console.log(typeof headerTag); //object

const logo = document.getElementsByTagName('h1')[0]; // 아예 첫 번째 h1을 변수선언하면, 속성으로 꾸밀 때 인덱스 입력 안해도 됨. 진짜 딱 하나만 쓰고싶을 때
logo.style = 'color:red';

const searchDiv = document.getElementsByClassName('search')[0];
searchDiv.style = 'border-bottom: 2px solid black';

const searchInput = document.getElementById('txt');
console.log(searchInput);
searchInput.style = 'background-color: lime'; // 아이디는 하나이기 때문에 배열 선언 안해도 됨
// 이렇게 적용하면 인라인으로 적용되므로 우선순위가 가장 높음

const searchBtn = document.getElementById('btn');
console.log(searchBtn);
searchBtn.style = 'border-radius:40px';

// querySelector 메소드는 body태그에 작성한 태그 순서상 먼저 시작한 대상을 인식한다.
const hea = document.querySelector('header');
console.log(hea);
hea.style='background-image:url(https://i.pinimg.com/736x/4b/bd/f4/4bbdf4f4fe9f53e1cd1d233a818c2a1b.jpg)';

// querySelector는 getElement명령어처럼 class, id, tag 선언이 함게 하지 않기 때문에 querySelector의 메소드괄호 안에서 class, id, tag를 구분할 수 있는 표시를 함께 한다. 태그라면 태그이름만, 클래스라면 .클래스명, 아이디라면 #아이디명으로 작성해서 구분한다.
const sear = document.querySelector('.search'); //클래스라는 선언이 없으므로, 이름을 알려줄 때 . 붙여야함
console.log(sear);
sear.style = 'opacity:0.5';

const searTxt = document.querySelector('#txt');
console.log(searTxt);
searTxt.style = 'color:red';

const gnb = document.querySelector('.gnb');
gnb.querySelector('a').style = 'background-color: black';

const gnbLi = document.querySelectorAll('.gnb li');
console.log(gnbLi);
gnbLi[0].style = 'background-color:lime';
gnbLi[1].style = 'background-color:coral';
gnbLi[2].style = 'background-color:yellow';
gnbLi[3].style = 'background-color:white';

// const gnbA = document.querySelectorAll('.gnb a');
const gnbA = gnb.querySelectorAll('a');
// documnet.querySelector('.gnb').querySelectorAll('a') 위와 동일
console.log(gnbA);
/* gnbLiA[0].style = 'background-color: red'; */
gnbA[1].style = 'font-size: 1.5rem';
gnbA[2].style = 'border: 5px solid red';
gnbA[3].style = 'color: red';