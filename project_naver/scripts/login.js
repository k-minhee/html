/* QR코드 메세지 팝업 X 닫기 기능 */
// 1. "messageX" X 클릭했을 때
// 2. "messagePopup" QR코드 메세지 팝업 숨기기
const messageX = document.querySelector('.title .message .close');
const messagePopup = document.querySelector('.title .message');
console.log(messagePopup, messageX);

messageX.addEventListener('click',()=>{
    // messagePopup.style.display = 'none';
    messageX.parentElement.style.display = 'none';
})

// 로그인 탭&내용 JS
// 0.초기세팅 'ID로그인 제목 활성화디자인', 일회용&QR내용 숨기기, ID로그인 내용 보이기
const loginTitle = document.querySelectorAll('.title h2');
const loginContent = document.querySelectorAll('.login_box');
console.log(loginContent, loginTitle);
// 0-1. 제목 활성화(ID)/비활성화(일회,QR) ==  active클래스 활성기준
loginTitle[0].classList.add('active');
loginTitle[1].classList.remove('active');
loginTitle[2].classList.remove('active');
// 0-2. 내용 (ID)보이기/내용(일회,QR) 숨기기
loginContent[0].style.display = 'block'
loginContent[1].style.display = 'none'
loginContent[2].style.display = 'none'

function titleHide(){
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
}

function contentHide(){
    loginContent[0].style.display = 'none'
    loginContent[1].style.display = 'none'
    loginContent[2].style.display = 'none'
}

// 1. 일회용번호 제목 클릭
loginTitle[1].addEventListener('click',()=>{
    // 모든 제목 활성화 디자인 해제하기
    titleHide();
    // 일회용번호 제목 활성화 디자인 적용하기
    loginTitle[1].classList.add('active');
    // 2. 모든 내용 숨기기
    contentHide();
    // 3. 일회용 번호 내용 보이기
    loginContent[1].style.display = 'block'
})

// 1. QR코드 제목 클릭
// 2. 모든 내용 숨기기
// 3. QR코드 내용 보이기
loginTitle[2].addEventListener('click',()=>{
    titleHide();
    loginTitle[2].classList.add('active');
    contentHide();
    loginContent[2].style.display = 'block'
})

// 1. ID로그인 제목 클릭
// 2. 모든 내용 숨기기
// 3. ID로그인 번호 내용 보이기

loginTitle[0].addEventListener('click',()=>{
    titleHide();
    loginTitle[0].classList.add('active');
    contentHide();
    loginContent[0].style.display = 'block'
})

// ==========================아이디&비밀번호 유효성 검사
// 1. 아이디 입력 오류 "아이디를 입력해 주세요"
// 1-1. "userId" 사용자가 아이디를 입력 안하고 (빈문자열) ""
// 1-2. "loginBtn" 로그인 버튼 클릭 시
// 1-3. "errorMsg" 오류 메세지 출력 "아이디를 입력해 주세요."
// 2. 비밀번호 입력 오류 "비밀번호를 입력해주세요"
// 2-1. (선행조건) 아이디 입력하고 비밀번호는 입력안했을 경우
// 2-2. "userPw" 사용자가 아이디는 입력하고 비밀번호를 입력 안하고
// 2-3. "loginBtn" 로그인 버튼 클릭 시
// 2-4. "errorMsg" 오류 메세지 출력 "비밀번호를 입력해주세요"
// 3. 로그인 오류 "아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요."
// 3-1. (선행조건) 아이디와 비밀번호를 모두 입력했을 때 기준
// 3-2. "userPw, userId" 사용자가 아이디와 비밀번호를 모두 입력 후
// 3-3. "loginBtn" 로그인 버튼 클릭 시
// 3-4. "errorMsg" 오류 메세지 출력 "아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요."

// 일회용 로그인 오류 메시지 "일회용 로그인 번호를 입력하세요"

const userId = document.querySelector('.id_login #user_id');
const userPw = document.querySelector('#user_pw');
const userNum = document.querySelector('#one_time_num');
const loginBtn = document.querySelector('.login_btn #login');
const loginOnceBtn = document.querySelector('.once_btn #login');
const errorMsg = document.querySelector('.error_message');
const errorOnce = document.querySelector('.error_once');
console.log(userId,loginBtn,errorMsg, userPw);

errorMsg.style.color = '#f00';
errorMsg.style.fontSize = '0.88rem';
errorMsg.style.margin = '12px 0';

errorOnce.style.color = '#f00';
errorOnce.style.fontSize = '0.88rem';
errorOnce.style.margin = '12px 0';

loginBtn.addEventListener('click',()=>{
    if(userId.value === '') errorMsg.textContent = '아이디를 입력해 주세요.';
    // userId값이 빈문자열인가(거짓)일 때 인식하는 두 번째 조건식(아래)
    else if(userPw.value === '') errorMsg.textContent = '비밀번호를 입력해주세요';
    // userId값이 빈문자열인가(거짓) userPw값이 빈문자열인가 (거짓)
    else errorMsg.textContent = '아이디와 비밀번호가 잘못되었습니다. 다시 확인해주세요.';
})

loginOnceBtn.addEventListener('click', ()=>{
    if(userNum.value === '') errorOnce.textContent = '일회용 로그인 번호를 입력하세요';
    else errorOnce.textContent = '일회용 로그인 번호를 확인한 후 다시 입력해 주세요.';
})

// ==============IP 보안 ON/OFF 글자 변경 JS
// 0. check #ip_on 체크되어있는 경우 ON / 체크해제 경우 OFF
// 1. ON 기본 활성화 (html, css 준비)
// 2. "ipCheckBox" 체크박스의 상태를 변경했을 때
// 3. "switchState" 체크가 되어있었다면 switch_state 글자를 ON -> OFF
// 4. 체크가 해제상태라면 switch_state 글자를 OFF -> ON

const ipCheckBox = document.querySelector('.ip_state #ip_on');
const switchState = document.querySelector('.ip_state label .switch_state');
console.log(ipCheckBox, switchState);

ipCheckBox.addEventListener('change',()=>{
    console.log('상태변경')
    switchState.textContent = ipCheckBox.checked ? 'ON' : 'Off';
})