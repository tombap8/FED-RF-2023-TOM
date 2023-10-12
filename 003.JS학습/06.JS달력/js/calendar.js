// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const dFn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
    addZero : x => x < 10 ? '0' + x : x,
    fm : x => `${x.getFullYear()}-${
        dFn.addZero(x.getMonth()+1)}-${
        dFn.addZero(x.getDate())}(${week[x.getDay()]})`
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
        new Date(cYr,cMt,0);

        dFn.cg('전달끝날짜:'+dFn.fm(prevLast));

        // 2. 현재달 첫째날짜(옵션:1->전달로 셋팅)
        // -> 달력 전달셋팅을 위한 요일 구하기 위해!
        const thisFirst = 
        new Date(cYr,cMt,1);
            
        dFn.cg('현재달 첫째날짜:'+dFn.fm(thisFirst));

        // 3. 현재달 마지막날짜(옵션:0)
        const thisLast = new Date(cYr,cMt+1,0);
        
        dFn.cg('현재달 마지막날짜:'+dFn.fm(thisLast));

        // 4. 년도표시하기
        yearTit.innerHTML = cYr;

        // 5. 월표시하기
        monthTit.innerHTML = cMt + 1;

        // 6. 날짜 데이터 태그 구성하기
        // 6-1. 전달 날짜 앞쪽 채우기
        // 조건: 현재달 첫날짜 요일이 0이 아니면 내용있음!
        // -> 왜0인가? 0은 일요일 이므로 0이면 앞에 내용없음!
        let fDay = thisFirst.getDay();
        dFn.cg('이번달첫날요일:'+fDay);
        if(fDay != 0){
            // 만약 요일번호가 0이 아니면 for문 돌림
            for(let i = 0; i < fDay;i++){
                // 반복횟수 만큼 배열 앞쪽에 추가
                // 앞에 추가 메서드: unshift()
                dateSet.unshift(`
                    <span style="color:#ccc" class="bm">
                        ${prevLast.getDate() - i}
                    </span>
                `)
                // 전달마지막날짜 - for문i값(0,1,2,...)

            } //////// for //////////////

        } //////////// if ///////////////

        
        // 6-2. 현재월 삽입하기 ///////////
        // 반복문 구성: 현재월 1일부터 마지막날짜까지 반복 배열추가
        for(let i = 1; i <= thisLast.getDate(); i++){
            dateSet.push(i);
        } ///////////// for ////////////////////

        // 6-3. 다음달 나머지 칸 삽입하기 ////
        // 다음달은 클래스 'am'으로 구분
        // 반복구성: 1부터 2주분량정도 넣는다!
        for(let i = 1; i <= 14; i++){
            dateSet.push(`
                <span style="color:#ccc" class="am">
                    ${i}
                </span>
            `);

        } //////////// for //////////////
        
        
        // 7. 날짜배열로 날짜태그 구성하여 출력하기
        // 7일 * 6주 = 42개
        dates.innerHTML = dateSet.map((v,i)=>
        i<42?`<div class="date">${v}</div>`:'').join('');
        
        // dFn.cg('날짜배열:'+dateSet.map((v,i)=>
        // i<42?`<div class="date">${v}</div>`:'').join(''));
        
    }; /////// initDallyeok 함수 ////////


    // 초기셋팅함수 호출!
    initDallyeok();

} /////////////// makeDallyeok함수 ////////////