// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const dFn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
    fm : x => `${x.getFullYear()}-${
            x.getMonth()+1 < 10 ?
            '0' + (x.getMonth() + 1) :
            x.getMonth() + 1
        }-${
            x.getDate() < 10 ?
            '0' + x.getDate() : x.getDate()
        }(${week[x.getDay()]})`
}; ///////// dFn 객체 //////////
    
// 요일변경배열 ////
const week = ["일","월","화","수","목","금","토"];

// 달력함수 호출
makeDallyeok();

function makeDallyeok(){
    dFn.cg('달력만들어!');

    // 1. 변수셋팅 ////////////////////
    // (1) 변경할 현재날짜 객체
    const currDate = new Date();
    // (2) 오늘날짜 객체
    const today = new Date();
    // (3) 년도요소 : .yearTit
    const yearTit = dFn.qs('.yearTit');
    // (4) 월요소 : .monthTit
    const monthTit = dFn.qs('.monthTit');
    // (5) 날짜요소 : .dates
    const dates = dFn.qs('.dates');
    // (6) 날짜넣을 배열변수
    const dateSet = [];

    // dFn.cg(yearTit);
    // dFn.cg(monthTit);
    // dFn.cg(dates);

    // 2. 함수 만들기 ///////////////////
    // (1) 달력 초기화구성 함수 ///////
    const initDallyeok = () => {
        // 현재년
        let cYr = currDate.getFullYear();
        // 현재달
        let cMt = currDate.getMonth();

        // [선택달  끝날짜, 첫날짜 알아오기]
        // new Date(년도,월,옵션)
        // (1) 년도
        // (2) 월
        // (3) 옵션 : 0 - 선택달끝날짜 / 1 - 다음달첫날짜

        // 1. 전달 마지막 날짜(옵션:0) 
        // -> 달력처음 전달끝쪽날짜표시
        const prevLast = 
        new Date(cYr,cMt+1,0);

        dFn.cg('전달끝날짜:'+dFn.fm(prevLast));

        // 2. 현재달 첫째날짜(옵션:1->전달로 셋팅)
        // -> 달력 전달셋팅을 위한 요일 구하기 위해!
        const thisFirst = 
        new Date(cYr,cMt+1,1);
            
        dFn.cg('현재달 첫째날짜:'+dFn.fm(thisFirst));

        // 3. 현재달 마지막날짜(옵션:0)
        const thisLast = new Date(cYr,cMt+2,0);
        
        dFn.cg('현재달 마지막날짜:'+dFn.fm(thisLast));

        // 4. 년도표시하기
        yearTit.innerHTML = cYr;

        // 5. 월표시하기
        monthTit.innerHTML = cMt + 2;

        // 6. 날짜 데이터 태그 구성하기
        // 6-1. 전달 날짜 앞쪽 채우기
        // 조건: 현재달 첫날짜 요일이 0이 아니면 내용있음!
        // -> 왜0인가? 0은 일요일 이므로 0이면 앞에 내용없음!
        dFn.cg('이번달첫날요일:'+thisFirst.getDay());


    }; /////// initDallyeok 함수 ////////


    // 초기셋팅함수 호출!
    initDallyeok();

} /////////////// makeDallyeok함수 ////////////