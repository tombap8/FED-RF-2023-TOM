// JS6-1.Date객체와 Math객체 JS

// DOM 함수 모듈
import dFn from './dom.js';

// 1. 요구사항: 화면에 시간을 찍으시오
// 2. 대상: .tt
const tt = dFn.qsa('.tt');
console.log(tt);

// 3. 시간찍기
// JS 시간날짜 객체 : Date() 객체
const today = new Date();
// new 키워드로 내장객체의 인스턴스를 생성함!

// 3-1. 년도찍기 : getFullYear()
tt[0].innerText = today.getFullYear();
// 참고: getYear()는 1900년을 뺀 년도가 나옴

// 3-2. 월찍기 : getMonth()
// let monthName = ["하하월","파파월","카카월","토토월","코코푸월","싹스월","칸단월","차즈민월","라우딘월","차호호월","테테월","상그리아월"];
// tt[1].innerText = monthName[today.getMonth()];
tt[1].innerText = today.getMonth()+1;
// 찍어보면 기존달보다 1작다
// 이것은 배열순번에 넣고 찍기 좋도록
// 월순번이 리턴된다!
// -> 따라서 숫자월을 찍고싶으면 +1함!

// 3-3.일찍기 : getDate()
tt[2].innerText = today.getDate();
// 날짜는 그대로 숫자로 리턴됨!

// 3-4. 요일찍기 : 
const week = ['일','월','화','수','목','금','토'];
tt[3].innerText = week[today.getDay()];
// 요일은 순번을 리턴함(0부터)
// 각 나라별요일을 배열로 넣고 출력함!
// 순번은 일요일 부터 시작!
