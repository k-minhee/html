/* 태어난 달에 따른 꽃, 꽃말 배열 */
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

/* 알고리즘 */
// 1. 사용자 생일 월, btn DOM 연결
// 2. 사용자에게 생년월일 입력받고 버튼 클릭하기
// 3. 월을 담는 변수 조건에 따른 꽃과 꽃말 연결시키기 (if else문 활용)
// 4. 태어난 달, 꽃 이름, 꽃말을 innerText를 이용해 나타내기
/* 변수 */
const userY = document.querySelector('#user_y');
const userM = document.querySelector('#user_m');
const userD = document.querySelector('#user_d');

const monthP = document.querySelector('.month');
const flowerP = document.querySelector('.flower');
const meaningP = document.querySelector('.meaning');
const btn = document.querySelector('.btn');

//console.log(userM, monthP, flowerP, meaningP, btn);
//console.log(birthday_flower[0].month);
/* alert('잘못된 입력입니다.');
monthP.innerText = '?'
flowerP.innerText = '?';
meaningP.innerText = '?' */

function setting(y, m, d){
    if(y < 1900 || y > 2025){
        alert('연도를 잘못 입력하셨습니다.');
        monthP.innerText = '?'
        flowerP.innerText = '?'
        meaningP.innerText = '?'
    }else if(m < 0 || m > 12){
        alert('월을 잘못 입력하셨습니다.');
        monthP.innerText = '?'
        flowerP.innerText = '?'
        meaningP.innerText = '?'
    }else if(d < 1 ||d > 31){
        alert('날짜를 잘못 입력하셨습니다.');
        monthP.innerText = '?'
        flowerP.innerText = '?'
        meaningP.innerText = '?'
    }
}

function match(m){
    if(m == 1){
        monthP.innerText = userM.value;
        userM.innerText = userM.value;
        flowerP.innerText = birthday_flower[0].flower;
        meaningP.innerText = birthday_flower[0].content;
    }else if(m == 2){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[1].flower;
        meaningP.innerText = birthday_flower[1].content;
    }else if(m == 3){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[2].flower;
        meaningP.innerText = birthday_flower[2].content;
    }else if(m == 4){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[3].flower;
        meaningP.innerText = birthday_flower[3].content;
    }else if(m == 5){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[4].flower;
        meaningP.innerText = birthday_flower[4].content;
    }else if(m == 6){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[5].flower;
        meaningP.innerText = birthday_flower[5].content;
    }else if(m == 7){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[6].flower;
        meaningP.innerText = birthday_flower[6].content;
    }else if(m == 8){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[7].flower;
        meaningP.innerText = birthday_flower[7].content;
    }else if(m == 9){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[8].flower;
        meaningP.innerText = birthday_flower[8].content;
    }else if(m == 10){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[9].flower;
        meaningP.innerText = birthday_flower[9].content;
    }else if(m == 11){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[10].flower;
        meaningP.innerText = birthday_flower[10].content;
    }else if(m == 12){
        monthP.innerText = userM.value;
        flowerP.innerText = birthday_flower[11].flower;
        meaningP.innerText = birthday_flower[11].content;
    }
}

btn.addEventListener('click',()=>{
    // console.log(userM.value);
    setting(userY.value, userM.value, userD.value);
    match(userM.value);
})