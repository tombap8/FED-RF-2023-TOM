// 자동스크롤 JS - auto_scroll.js

/********************************************** 
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태에서 마우스 휠 작동시
    아래와 같이 기능구현됨
    (1) 휠 내림 : 다음페이지로 이동
    (2) 휠 올림 : 이전페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동안함

    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생!
    (이전 이벤트명: mousewheel / DOMMouseScroll(파이어폭스))
**********************************************/

// 1. 전역변수 설정하기
// 1-1. 페이지변수
let pg_num = 0;
// 1-2. 휠상태변수
let sts_wheel = 0;
// 1-3. 전체페이지수
let total_pg;
// 1-4. 전체 .page 요소
let ele_page;

// 새로고침시 첫페이지로 리셋하기
// 브라우저 스크롤바 위치 캐싱때문에함!
setTimeout(()=>{window.scrollTo(0,0)},500);


// 2. 이벤트 등록하기 /////////////////
// 대상: window
window.addEventListener('wheel',wheelFn);
window.addEventListener('DOMContentLoaded',loadFn);

// 3. 이벤트 연결함수 /////////////////

// DOM선택함수 ///////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

/*************************************** 
    함수명 : loadFn
    기능 : html로딩후 실행코드구역
***************************************/
function loadFn(){
    // 호출확인
    console.log('로딩완료');

    // .page요소 담기
    ele_page = qsa('.page');

    // 전체페이지수 할당
    total_pg = ele_page.length;
    console.log('전체페이지수:',total_pg);

} ///////// loadFn 함수 ////////////////
/////////////////////////////////////////

/*************************************** 
    함수명: wheelFn
    기능 : 마우스 휠 작동시 페이지이동
***************************************/
function wheelFn(e){ // 이벤트전달변수(자동)
    // 함수호출확인!
    console.log('휠~~~!');
    
    // 0. 광휠금지설정 //////
    if(sts_wheel) return; // 여기서나감!
    sts_wheel = 1; // 잠금!
    setTimeout(()=>{sts_wheel=0},500);
    // 0.8초후 잠금 해제!

    // 함수호출확인!
    console.log('휠작동~~~!');

    // 1. 휠방향에 따른 페이지변수 변경하기
    // 휠방향은 wheelDelta 로 알아냄!
    let delta = e.wheelDelta;
    console.log('휠델타:',delta);
    
    // 음수(-)는 아랫방향, 양수(+)는 윗방향
    if(delta<0) pg_num++;
    else pg_num--;

    // 한계수체크(양끝페이지고정!)
    if(pg_num<0) pg_num=0;
    if(pg_num==total_pg) pg_num = total_pg-1;

    // 전체 페이지번호 확인
    console.log('페이지번호:',pg_num);

    // 2. 페이지이동하기
    // scrollTo(x축위치,y축위치)
    // 세로방향 이동은 두번째값만 주면된다!
    // 스크롤 애니메이션은 html{scroll-behavior:smooth}로처리
    // 화면단위로 이동하므로 윈도우 높이값을 기본값으로 처리
    // window.innerHeight -> window 높이값 구해온다!

    window.scrollTo(0,window.innerHeight*pg_num);

} /////////// wheelFn 함수 ////////////////
///////////////////////////////////////////





/********************************************************* 
    [ 모바일 이벤트처리 ]
    
    [ 모바일 터치 스크린에서 사용하는 이벤트 종류 ]
    1. touchstart - 손가락이 화면에 닿을때 발생
    2. touchend - 손가락이 화면에서 떨어질때 발생
    3. touchmove - 손가락이 화면에 닿은채로 움직일때 발생
    
    [ 화면터치 이벤트관련 위치값 종류 ]
    1. screenX, screenY : 
        디바이스 화면을 기준한 x,y 좌표
    2. clientX, clientY : 
        브라우저 화면을 기준한 x,y 좌표(스크롤미포함)
    3. pageX, pageY : 
        스크롤을 포함한 브라우저 화면을 기준한 x,y 좌표
*********************************************************/

// 1. 모바일 이벤트 등록하기 //////////
// 대상: window
window.addEventListener('touchstart',touchStart);
window.addEventListener('touchend',touchEnd);

// 2. 모바일 이벤트 함수 만들기 ///////////

// 터치 위치값 변수
let pos_start=0, pos_end=0;

// 2-1.터치시작 이벤트호출함수 ////////////
function touchStart(e){ // e - 이벤트 전달변수
    // 모바일 이벤트 화면 위치값 구하기
    // 모바일 오리저널 이벤트 객체 - originalEvent(제이쿼리에서만씀)
    // 하위 터치 이벤트 컬렉션 - touches[0]
    // 변경된 터치이벤트를 담는 컬렉션 - changedTouches[0]

    // 스크린 위치값 구하기
    // 제이쿼리는 originalEvent를 사용해야 나옴!
    // let scY = e.originalEvent.touches[0].screenY;
    pos_start = e.touches[0].screenY;

    // 함수호출확인
    console.log('터치시작~!',pos_start);

} ////////// mobileFn 함수 ///////////////
//////////////////////////////////////////

// 2-2.터치끝 이벤트호출함수 ////////////
function touchEnd(e){ // e - 이벤트 전달변수
    // 모바일 이벤트 화면 위치값 구하기
    // 모바일 오리저널 이벤트 객체 - originalEvent(제이쿼리에서만씀)
    // 하위 터치 이벤트 컬렉션 - touches[0]
    // 변경된 터치이벤트를 담는 컬렉션 - changedTouches[0]

    // 1. 스크린 위치값 구하기
    // 제이쿼리는 originalEvent를 사용해야 나옴!
    // let scY = e.originalEvent.touches[0].screenY;
    // 터치가 끝날때는 changedTouches[0] 를 사용해야함!
    pos_end = e.changedTouches[0].screenY;

    // 2. 터치방향 알아내기 ////
    // 원리: 시작위치-끝위치
    // 음수면 윗방향이동 양수면 아랫방향이동
    let result = pos_start - pos_end;

    // 함수호출확인
    console.log('터치끝~!',pos_end,'결과:',result);

    // return값이 차가 0이면 함수나감!
    if(result==0) return;

    // 이벤트 처리함수 호출
    // 양수면 1, 음수면 0을 넘겨준다!
    movePage(result>0?1:0);

} ////////// mobileFn 함수 ///////////////
//////////////////////////////////////////

//// 2-3. 이벤트 처리함수 : 화면이동 //////
function movePage(dir){ // dir은 방향값(1-아랫쪽,0-윗쪽)
    // 함수호출확인
    console.log('이동방향은?',dir);

    // 1. 페이지번호 변경 반영하기 /////
    // 1은(true) 아랫방향, 0은 윗방향
    // 1값은 true, 0값은 false로 처리됨!
    if(dir) pg_num++;
    else pg_num--;

    // 2. 페이지번호 한계수체크(양끝페이지고정!)
    if(pg_num<0) pg_num=0;
    if(pg_num==total_pg) pg_num = total_pg-1;

    // 3. 페이지 이동하기 ///////   
    // offsetTop 은 선택요소의 top위치값 리턴함! 
    window.scrollTo(0,ele_page[pg_num].offsetTop);
    console.log('여기야!',ele_page[pg_num].offsetTop);

} //////////// movePage함수 /////////////