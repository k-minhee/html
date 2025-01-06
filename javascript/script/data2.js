// ==============================1월2일 복습
// 날짜 관련 메소드
// getMonth()
// getDate()
// getFullYear()
// 위 날짜 메소드를 실행하기 위한 초기세팅으로 new Date() 메소드 반드시 선언!
// 자바스크립트는 숫자를 0부터 처리한다. 그래서 getMonth로 월(만 그럼) 출력 시 +1을 반드시 작성해야 한다.
let now = new Date(); // 메소드를 객체로 만들어서 사용하기 위함
let mon = now.getMonth()+1; // 자바 스크립트 특성 상 숫자를 0부터 인식하므로 +1을 해줘야함
let day = now.getDate();
let ye = now.getFullYear();

console.log(now);
console.log(`${mon}월`);
console.log(`${day}일`);
console.log(`${ye}년`);
// 오늘은 ?년 ?월 ?일 입니다.
console.log(`오늘은 ${ye}년 ${mon}월 ${day}일 입니다.`);
console.log(`오늘은 ${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`);
// 메소드와 속성을 작성할 때는 반드시 앞에 객체(object)선언이 되어야 한다.
// 객체.메소드();
// 객체.속성;
// ==============================배열과 객체
// 배열 이전 형태 기본 변수
let box1 = 10;
let box2 = 20;
const num = 1;
box1 = box2+6;
console.log(`box1의 값은 ${box1}이다.`); //box1의 값은 20이다.
// 배열 기본 문법과 활용
let yoil = ['일','월','화','수','목','금','토']
console.log(yoil);
// 배열의 개별 데이터 인덱스는 0부터 인식한다.
// 배열의 개별 인덱스 호출하는 방법(개별 호출을 안하면 무조건 전체 출력만 된다.)
console.log(yoil[5]+'요일');
console.log(`내일은 ${yoil[6]}요일입니다.`); // 내일은 토요일입니다.
// 배열의 전체 개수 length 속성은 1부터 인식한다.
console.log(yoil.length);
// yoil 배열 데이터 개수는 7개다.
console.log(`yoil 배열 데이터 개수는 ${yoil.length}개다.`);
// 배열 생성과 호출 연습
let colorSet = ['초록', '회색', '검정', '하양', '베이지', '하늘'];
console.log(colorSet[3], colorSet[2], colorSet[5]);
let fruits = ['바나나', '딸기', '사과', '귤', '수박', '오렌지', '복숭아'];
// 지금 주문하신 상품은 복숭아, 오렌지, 수박, 귤, 사과, 딸기, 바나나 총 7개 입니다.
console.log(`지금 주문하신 상품은 ${fruits[6]}, ${fruits[5]}, ${fruits[4]}, ${fruits[3]}, ${fruits[2]}, ${fruits[1]}, ${fruits[0]} 총 ${fruits.length}개 입니다.`);
// 배열 추가 메소드 공부
// push(), pop(), shift(), unshift()
// 객체.push() 배열의 끝 위치에 값 추가
// 객체.pop() 배열의 끝 위치에서 값 1개 제거
// 객체.unshift() 배열의 시작 위치에 값 추가
// 객체.shift() 배열의 시작 위치에서 값 1개 제거
let numbers = [5,6,7,8];
console.log(numbers.length) //4
console.log(numbers[3]) //8
numbers.push(9); // 배열의 끝에 9 숫자데이터 삽입
console.log(numbers); // 5 6 7 8 9
numbers.pop(); // 배열의 끝에 값 1개 제거
console.log(numbers); // 5 6 7 8
numbers.unshift(4); // 배열의 시작에 4 숫자데이터 삽입
console.log(numbers); // 4 5 6 7 8
numbers.shift(); // 배열의 시작에 값 1개 제거
console.log(numbers); // 5 6 7 8
numbers.push(9);
numbers.push(10);
console.log(numbers); // 5 6 7 8 9 10
numbers.pop();
numbers.pop();
console.log(numbers); // 5 6 7 8
numbers.unshift(3, 4);
console.log(numbers); // 3 4 5 6 7 8
numbers.push(9, 10, 11);
console.log(numbers); // 3 4 5 6 7 8 9 10 11
// 메가박스 빠른 예매 시스템 이해
// 1. 인원 선택 안할 시 좌석은 빈 값으로 빈 배열로 시작한다.
// 2. 인원 추가에 따라 배열에 좌석값이 들어갈 수 있는 저장소가 추가된다.
// 3. 추가된 인원이 희망좌석을 선택하면 해당 좌석정보가 위 2번 저장소에 대입된다.
let megabox = [];
const megaboxPrice = 10000;
console.log(megabox);
// 상황 예시1. 성인 인원 1 추가
megabox.push(''); // 빈 문자열 == ''
console.log(megabox);// 성인 1에 대한 빈 좌석 정보 제공
// 상황 예시2. 성인 좌석 선택(A5좌석)
megabox[0] = 'A5';
console.log(megabox);
// 상황 예시3. 성인B 인원 1 추가
megabox.push('');
console.log(megabox);
// 상황 예시4. 성인B F5 좌석 선택
megabox[1]= 'F5';
console.log(megabox);
// 상황 예시5. 성인A 예매 취소
// megabox.shift();
console.log(megabox);
// 총 인원은 ?명이고, 최종 결제 금액은 ?원입니다.
console.log(`총 인원은 ${megabox.length}명이고, 최종 결제 금액은 ${megabox.length*megaboxPrice}원입니다.`);
console.log('================================');
// 카페 제공 메뉴와 장바구니
const coffeeMenu = ['아메리카노', '카페라떼', '녹차라떼', '돌체라떼', '콜드브루'];
let cart = [];
const coffeePrice = 5000;
// 아메리카노 1잔 구입
cart.push(coffeeMenu[0]);
console.log(cart);
// 카페라떼 1잔 구입
cart.push(coffeeMenu[1]);
console.log(cart);
// 아메리카노 1잔 구입
cart.push(coffeeMenu[0]);
console.log(cart);
// 콜드브루 1잔 구입
cart.push(coffeeMenu[4]);
console.log(cart);
// 콜드브루 취소
cart.pop();
console.log(cart);
// 돌체라떼 1잔 구입
cart.push(coffeeMenu[3]);
console.log(cart);
// 장바구니 총 ?개
console.log(`장바구니 총 ${cart.length}개`);
// 최종 결제 금액은 ?원입니다.
console.log(`최종 결제 금액은 ${cart.length*coffeePrice}원입니다.`);
console.log('================================');
let array1 = [1,2,3,4]; // 가장 많이 사용하는 문법
let array2 = new Array(5,6,7,8); // 새로운 배열 생성
let array3 = new Array(4); // 값 4가 아닌 배열 4자리를 준비한다.
console.log(array1);
console.log(array2);
console.log(array3);