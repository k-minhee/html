// 관리자정보 ID:admin / PW:admin1234
let userId = 'admin';
let userPw = 'admin1234';

if(userId === 'admin' && userPw == 'admin1234'){
    console.log('관리자님 어서오세요');
} else{
    console.log('로그인 실패');
}

// ====================================
// 비교연산자와 논리연산자를 이용한 게임만들기
// W(전진) S(후진) A(좌) D(우)
/* const charMove = prompt('이동방향을 입력하세요 WSAD');
console.log(charMove);
if(charMove == 'W' || charMove == 'S' || charMove == 'A' || charMove == 'D'){
    alert(`${charMove}로 1칸 이동`);
}else{
    alert('잘못 입력했습니다.');
}  */

// =========== 점수에 따라 등급 출력
// 100~90 A
// 89~80 B
// 79~70 C
// 69~60 D80
// 59 이하면 F
const score = prompt('0~100사이 시험점수를 입력하세요');
if(score >= 0 && score <= 100){
    if(score > 89){
        alert('A');
    }else if(score > 79){
        alert('B');
    }else if(score > 69){
        alert('C');
    }else if(score > 59){
        alert('D');
    }else{alert('F');}
}else{
    alert('잘못 입력했습니다.');
}