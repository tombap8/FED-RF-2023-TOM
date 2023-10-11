// 09.드래그 기본 JS

// DOM 메서드
import dFn from "./dom.js";

// console.log(dFn);

/*************************************** 
    [ 드래그 기능 구현을 위한 이벤트 ]
    1. 딸 -> 마우스 포인터 누름 -> mousedown

    2. 각 -> 마우스 포인터 올라옴 -> mouseup

    3. 질질 -> 마우스 움직일때 -> mousemove
    -> 드래그 상태는 "딸"상태에서 "질질"하는것!
    
    mousedown 할때 드래그 상태변수값을 1로 변경
    mouseup 할때 드래그 상태변수값을 0으로 변경
    _______________________________________

    [ 드래그 기능구현 원리 ]

    1. 마우스 포인터 위치에 따른 변화 수치를
    계산하여 요소의 top,left 위치값으로 반영한다!

    2. 프로세스
    (1) mousedown 이벤트에서는 시작위치값 저장
    -> 모바일 이벤트 : touchstart
    (2) mousemove 이벤트에서는 움직인위치와 시작위치 차이저장
    -> 모바일 이벤트 : touchmove
    (3) mousemove에서 차이값을 타겟요소의 left,top값에 반영
    (4) mouseup 이벤트에서는 다음 이동을 위한 마지막위치 저장
    -> 모바일 이벤트 : touchend
    (5) mousemove 이벤트에서 마지막위치로 부터의 이동을 계산함


***************************************/

// 드래그 적용 이벤트 설정하기 ///////
// 1. 대상 선정
const dtg = dFn.qsa(".dtg");
// 2. 드래그 설정하기
dtg.forEach((ele) => goDrag(ele));

/****************************************** 
    [ 드래그 다중적용 함수 만들기 ]
    함수명 : goDrag
    기능 : 다중 드래그 기능 적용
******************************************/
function goDrag(ele) {
  // ele - 드래그 대상요소

  // 1. 변수 셋팅
  // (1) 드래그 상태변수 : true - 드래그중, false - 드래그아님
  let drag = false;
  // (2) 첫번째 위치 포인트 first x, first y
  let fx, fy;
  // (3) 마지막 위치 포인트 last x, last y
  let lx = 0,
    ly = 0;
  // -> 마지막위치로부터 처음 작동하므로 초기값 0셋팅!
  // (4) 움직일때 위치 포인트 : move x, move y
  let mvx, mvy;
  // (5) 위치이동 차이 결과변수 : result x, rersult y
  let rx, ry;

  // 2. 함수 만들기 ///////////
  // (1) 드래그 상태 true로 변경함수
  const dTrue = () => (drag = true);

  // (2) 드래그 상태 false로 변경함수
  const dFalse = () => (drag = false);

  // (3) 드래그 움직일때 작동함수
  const dMove = (e) => {
    console.log("드래그상태:", drag);

    // 드래그 상태일때만 실행
    if (drag) {
      // 1. 드래그 상태에서 움직일때 위치값 : mvx, mvy
      // - pageX,pageY 는 일반브라우저용
      // - touches[0].screenX, touches[0].screenY는 터치스크린용
      mvx = e.pageX || e.touches[0].screenX;
      mvy = e.pageY || e.touches[0].screenY;

      // 2. 움직일때 위치값 - 처음위치값 : rx, ry
      // x축값은 left값, y축값은 top값 이동이다!
      rx = mvx - fx;
      ry = mvy - fy;
      // 순수하게 움직인 거리를 계산! -> 가장중요한 핵심!!!

      // 3. x,y 움직인 위치값을 타겟요소에 적용!
      // 대상 : 전달된 드래그 요소 -> ele변수
      ele.style.left = rx + lx + "px";
      ele.style.top = ry + ly + "px";
      // 한번 드래그 후 다시 드래그시 움직인 위치값이 필요함!
      // -> 마지막 위치값 저장필요! -> lx, ly
      // -> 항상 최종위치에서 움직인 위치를 더한다!!!

      // 4. z-index값을 모두 초기화후 드래그 대상만 높여줌!
      dtg.forEach(ele=>ele.style.zIndex=0);
      ele.style.zIndex = 1;


      // 값확인
      console.log(`fx:${fx} | fy:${fy}`);
      console.log(`mvx:${mvx} | mvy:${mvy}`);
      console.log(`rx:${rx} | ry:${ry}`);
      console.log(`lx:${lx} | ly:${ly}`);
    } //////////// if ///////////

    // 커서 편손(grab)/쥔손(grabbing) 상태 변경하기
    ele.style.cursor = drag?'grabbing':'grab';


  }; ////////// dMove함수 ///////////

  // (4) 첫번째 위치포인트 셋팅함수 : fx, fy
  const firstPoint = (e) => {
    fx = e.pageX || e.touches[0].screenX;
    fy = e.pageY || e.touches[0].screenY;
    // console.log('첫포인트:',fx,' | ',fy);
  }; ///////// firstPoint함수 //////////

  // (5) 마지막 위치포인트 셋팅함수 : lx, ly
  const lastPoint = () => {
    // 움직일때 위치값을 기존값에 계속 더함
    lx += rx;
    ly += ry;
    // console.log('끝포인트:',lx,' | ',ly);
  }; ///////// lastPoint함수 ///////////

  // 3. 이벤트 등록하기 /////////////////
  // 대상 : 호출시 보내준 드래그 대상요소 -> ele변수
  // (1) 마우스 내려갈때 : 드래그 true + 첫번째 위치값 업데이트
  dFn.addEvt(ele, "mousedown", (e) => {
    dTrue();
    firstPoint(e);
  }); //////////// mousemove 함수 ///////////

  // 모바일 이벤트 추가 ///////
  dFn.addEvt(ele, "touchstart", (e) => {
    dTrue();
    firstPoint(e);
  }); //////////// touchstart 함수 ///////////

  // (2) 마우스 올라올때 : 드래그 false + 마지막 위치값 업데이트
  dFn.addEvt(ele, "mouseup", () => {
    dFalse();
    lastPoint();
  }); //////////// mousemove 함수 ///////////

  // 모바일 이벤트 추가 ///////
  dFn.addEvt(ele, "touchend", () => {
    dFalse();
    lastPoint();
  }); //////////// touchend 함수 ///////////

  // (3) 마우스 움직일때 : 움직일때 처리함수 호출
  dFn.addEvt(ele, "mousemove", dMove);

  // 모바일 이벤트 추가 ///////
  dFn.addEvt(ele, "touchmove", dMove);

  // (4) 마우스 벗어날때 : 드래그 상태 false처리 함수 호출
  dFn.addEvt(ele, "mouseleave", dFalse);


} //////////// goDrag 함수 //////////////////
