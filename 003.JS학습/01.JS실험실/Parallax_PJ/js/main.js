// 패럴렉스 PJ JS - main.js

// 부드러운 스크롤 불러오기
import {startSS,setPos} from "./smoothScroll20.js";
// DOM함수 불러오기
import dFn from "./dom.js";

// 부드러운 스크롤 호출
startSS();

/******************************************** 
    [ 패럴렉스 기능구현하기 ]
    1. 정의 : 패럴렉스란 스크롤 작동시 같은 방향으로
    요소가 다른속도를 가지고 움직임으로
    사용자가 공간감을 느낄 수 있게 하는 구현방법

    2. 방법 : 
        (1) 범위 - 요소가 화면에 등장하여
        보일동안 스크롤될때 이동함
        (2) 움직일 크기 설정이 필요함
        (3) 범위체크를 위한 JS 메서드를 사용함
        -> getBoundingClientRect().top

    3. 이벤트 : scroll
    4. 패럴렉스 대상 : 특정클래스 지정
        (1) 글자박스 대상 : .txt
        (2) 아이콘이미지 대상 : .icon

********************************************/

// 0. 새로고치면 스크롤바 위치캐싱후 맨위로 이동
setTimeout(() => {
    // 윈도우 스크롤 맨위로!
    window.scrollTo(0,0);
    // 부드러운 스크롤 위치값 반영!
    setPos(0);
    // 안하면 원래 위치로 스크롤시 튐!
}, 400);

// 1. 대상선정 ///////////////
// 1-1. 글자박스
const txtBox = dFn.qsa('.txt');
// 1-2. 아이콘박스
const icon = dFn.qsa('.icon');

// console.log(txtBox,icon);

// 2. 이벤트 설정하기 ////////////
// 대상: window / 이벤트종류: scroll
dFn.addEvt(window,'scroll',scrollFn);

// 3. 함수 만들기 ////////////////
// 3-1. 스크롤 이벤트 함수 ////
function scrollFn(){
    console.log('스크롤~~~!');

} /////////// scrollFn 함수 ////////


