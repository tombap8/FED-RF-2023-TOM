// 어벤저스 JS - avengers.js

// 초기 데이터 셋팅하기
// 데이터 : 어벤저스 데이터 - data.js > character

// console.log(character);

// 공통 DOM 선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 어벤저스 캐릭터 박스 셋팅하기
// 1. 대상선정 : .avengers-box
const avengers = qs('.avengers-box');

console.log('대상:',avengers);

// 2. 데이터 자동 순회하여 태그만들기
// html코드 변수
let hcode = '';

for(let x in character){
    console.log(x);
} ///////// for in /////////////