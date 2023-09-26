// JS6-1.Date객체와 Math객체 JS

// DOM 함수 모듈
import dFn from "./dom.js";

// 1. 요구사항: 화면에 시간을 찍으시오
// 2. 대상: .tt
const tt = dFn.qsa(".tt");
console.log(tt);

// 3. 시간찍기

/************************************** 
 함수명 : showTime
 기능 : 시간을 1초간격으로 보여줌
 **************************************/
// 요일 배열
const week = ["일", "월", "화", "수", "목", "금", "토"];

// 앞에 0 자릿수를 추가하는 함수만들기
const addZero = (num) => (num < 10 ? "0" + num : num);

// 인터발호출하기
setInterval(showTime,1000);
// 최초호출
showTime();

function showTime(){
    // console.log('시찍!');
    
    // JS 시간날짜 객체 : Date() 객체
    const today = new Date();
    // new 키워드로 내장객체의 인스턴스를 생성함!

    // 3-1. 년도찍기 : getFullYear()
    tt[0].innerText = today.getFullYear();
    // 참고: getYear()는 1900년을 뺀 년도가 나옴
    
    // 3-2. 월찍기 : getMonth()
    // let monthName = ["하하월","파파월","카카월","토토월","코코푸월","싹스월","칸단월","차즈민월","라우딘월","차호호월","테테월","상그리아월"];
    // tt[1].innerText = monthName[today.getMonth()];
    tt[1].innerText = today.getMonth() + 1;
    // 찍어보면 기존달보다 1작다
    // 이것은 배열순번에 넣고 찍기 좋도록
    // 월순번이 리턴된다!
    // -> 따라서 숫자월을 찍고싶으면 +1함!
    
    // 3-3.일찍기 : getDate()
    tt[2].innerText = today.getDate();
    // 날짜는 그대로 숫자로 리턴됨!
    
    // 3-4. 요일찍기 : getDay()
    
    tt[3].innerText = week[today.getDay()];
    // 요일은 순번을 리턴함(0부터)
    // 각 나라별요일을 배열로 넣고 출력함!
    // 순번은 일요일 부터 시작!
    
    ///////// 시간찍기 /////////////
    // -> 시간은 보통 한자리숫자일때 앞에 0자리표시함
    // 01,02,... -> 이것은 숫자가 아니고 문자임!
    
    
    
    // 3-5. 시간출력 : getHours()
    let H = today.getHours();
    // 테스트용
    // H = 14;
    tt[5].innerText = addZero(H > 12 ? H - 12 : H);
    // 12보다 크면 12를 빼주고 한자리일때 0처리는 항상해줌!
    
    // 3-6. 오전/오후 출력
    // 기준은 12시보다 크면 오후, 작으면 오전
    tt[4].innerText = H >= 12 ? "오후" : "오전";
    
    // 3-7. 분출력 : getMinutes()
    let M = today.getMinutes();
    // 테스트용
    // M = 7;
    tt[6].innerText = addZero(M);
    
    // 3-8. 분출력 : getMinutes()
    let S = today.getSeconds();
    // 테스트용
    // S = 7;
    tt[7].innerText = addZero(S);

} //////////// showTime 함수 ///////////


