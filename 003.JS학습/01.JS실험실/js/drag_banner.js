// JS실험실 : 10.드래그배너 JS - drag_banner.js

// DOM 메서드
import dFn from './dom.js';

// console.log(dFn);

// 슬라이드 대상요소 : .banbx
const banBox = dFn.qsa('.banbx');
console.log('슬라이드 대상:',banBox);

// 슬라이드 만큼 모두 호출하기!
banBox.forEach(ele=>{
    // 슬라이드 함수 호출하기
    slideFn(ele);
    // 실제 DOM요소를 보낸다!

}); /////// forEach ///////////

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -330%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 -220%로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -330%로 변경한다.
            그 후 left값을 -220%으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/


/* 
(참고: JS에서 이름짓는 일반규칙)
1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/

/****************************************** 
 함수명: slideFn
 기능: 로딩 후 버튼 이벤트 및 기능구현
 ******************************************/
function slideFn(selEl) { // selEl 선택 슬라이드 부모 요소
    console.log("슬라이드 함수 호출확인!");

    // 0.슬라이드 공통변수 /////
    // 0-1. 광클금지상태변수 : 0-허용,1-불허용
    let clickSts = 0;
    // 0-2. 슬라이드 이동시간 : 상수로 설정
    const TIME_SLIDE = 400;
    
    // 1. 대상선정
    // 1-1. 슬라이드 부모요소 : 전달된 선택요소 -> selEl
    const sldWrap = selEl;// DOM요소를 직접 받음!!!
    // 1-2.변경 대상: 선택요소 하위 .slide
    const slide = dFn.qsEl(sldWrap,'.slide');
    // 1-3.이벤트 대상: 선택요소 하위 .abtn
    const abtn = dFn.qsaEl(sldWrap,'.abtn');
    // 1-4.블릿박스 대상: 선택요소 하위 .indic li
    let indic = dFn.qsEl(sldWrap,'.indic');


    // 대상확인
    console.log('대상',abtn,slide,indic);

    // 1.4. 슬라이드 개수와 동일한 블릿동적생성
    // 대상: .indic -> indic변수
    // 슬라이드개수
    let sldCnt = dFn.qsaEl(slide,'li').length;
    // for문으로 블릿li생성(0번만 클래스 on넣기)
    for(let i=0; i< sldCnt; i++){
        indic.innerHTML += `
            <li ${i==0?'class="on"':''}>
                <img src="images/dot1.png" alt="흰색">
                <img src="images/dot2.png" alt="회색">
            </li>
        `;
    } /////// for문 ////////////

    // 블릿li 재선택할당하기 /////
    indic = dFn.qsaEl(sldWrap,'.indic li');


    // 1.5. li리스트에 순번속성 만들어 넣기
    // 만드는이유: 블릿변경 등에 현재 슬라이드 순번 필요!
    // 사용자 정의 속성은 반드시 'data-'로시작해야함!(W3C규칙)
    // data-seq 로 순번 속성을 넣을 것임!
    slide.querySelectorAll('li')
    .forEach((ele,idx)=>ele.setAttribute('data-seq',idx));
    // setAttribute(속성명,속성값) -> 속성셋팅 JS내장메서드


    // 2. 이벤트 설정하기 : 버튼요소들 -> forEach()
    abtn.forEach(ele=>dFn.addEvt(ele,'click',goSlide));

    // 3. 함수만들기
    function goSlide(){

        // a요소 기본이동 막기
        event.preventDefault();

        // 광클금지 //////////////
        if(clickSts) return;//나가!
        clickSts=1;//잠금!
        setTimeout(()=>clickSts=0,TIME_SLIDE);//해제!       


        // 호출확인
        console.log('나야나!',this,
        this.classList.contains('ab2'));

        // classList.contains(클래스명)
        // 선택요소에 해당클래스가 있으면 true

        // 1. 오른쪽 버튼 여부 알아내기
        let isRight = this.classList.contains('ab2');

        // 2. 슬라이드 li 새로 읽기
        let eachOne = slide.querySelectorAll('li');

        // 3. 버튼분기하기 '.ab2' 이면 오른쪽버튼
        if(isRight){ // 오른쪽버튼
            // 오른쪽에서 들어오는 슬라이드함수 호출!
            rightSlide();
        } ////// if //////////////
        else{ // 왼쪽버튼
            // 1. 맨뒤li 맨앞으로 이동
            // 놈.놈.놈 -> insertBefore(넣을놈,넣을놈전놈)
            slide.insertBefore(
                eachOne[eachOne.length-1], eachOne[0]);
            // 2. left값 -330% 만들기 : 들어올 준비 위치!
            slide.style.left = '-330%';
            // 3. 트랜지션 없애기
            slide.style.transition = 'none';
            
            // 같은 left값을 동시에 변경하면 효과가 없음!
            // 비동기적으로 처리해야함!
            // -> setTimeout으로 싸주기!
            // 시간은 0이어도 비동기 처리므로 효과있음!

            setTimeout(() => {
                // 4. left값 -220%으로 들어오기
                slide.style.left = '-220%';
                
                // 5. 트랜지션주기
                slide.style.transition = 
                    TIME_SLIDE+'ms ease-in-out';
 
            }, 0);


        } /////// else //////////////

        // 4. 블릿순번 변경 함수 호출
        chgIndic(isRight); // 방향값을 보냄!

        // 5. 자동넘김 멈춤함수 호출하기
        // clearAuto();
        
    } ////////// goSlide 함수 /////////

    // 블릿순번 변경 함수 /////////////
    function chgIndic(isRight){ // isRight(0-왼쪽,1-오른쪽)
        // 1. 슬라이드 순번과 일치하는 블릿에 클래스 넣기
        // 대상: .indic li -> indic변수
        // 맨앞 슬라이드 li의 'data-seq' 값 읽어오기
        // isRight값이 true이면 오른쪽버튼이고 순번은 [1]
        // isRight값이 false이면 왼쪽버튼이고 순번은 [0]
        let nowSeq = 
        slide.querySelectorAll('li')[isRight?1:0]
        .getAttribute('data-seq');

        console.log('현재슬라이드 순번:',nowSeq);
        
        // 2. 해당순번 블릿li에 클래스 on넣기
        // 블릿전체순회시 해당순번에 on넣고 나머지는 on빼기
        indic.forEach((ele,idx)=>{
            if(idx==nowSeq) ele.classList.add('on');
            else ele.classList.remove('on');
        }); ///////// forEach ///////////

    } /////////// chgIndic함수 ////////////

    // 슬라이드 오른쪽방향 함수 ////////////
    function rightSlide(){
        //1.대상이동하기 : -330%
        slide.style.left = '-330%';
        //2.트랜지션주기
        slide.style.transition = 
            TIME_SLIDE+'ms ease-in-out';
        // 이동시간 후 맨앞li 잘라서 맨뒤로 이동하기
        // appendChild(요소)
        setTimeout(() => {
            // 3.맨앞li 맨뒤로 이동
            slide.appendChild(
                slide.querySelectorAll('li')[0]);
            // 4.slide left값 -220%
            slide.style.left = '-220%';
            // 5.트랜지션 없애기
            slide.style.transition = 'none';
        }, TIME_SLIDE);
    } //////////// rightSlide 함수 ////////////


    /********************************** 
        자동넘기기 기능구현
        -> 일정시간간격으로 오른쪽버튼 클릭
        -> 사용JS내장함수 : setInterval()
        -> 버튼클릭 실행 메서드: click()
        대상: 오른쪽버튼 - .ab2 -> abtn[1]
    **********************************/
   // 인터발변수
   let autoI;
   // 인터발타이밍함수를 변수에 할당후
   // clearInterval(할당변수) 해야 멈출 수 있다!

   // 타임아웃변수
   let autoT;
   // 타임아웃함수도 마찬가지임!
   // clearTimeout(할당변수) 해야 실행 쓰나미를 막을 수 있다!
   
   // 인터발호출 함수 //////////
   function slideAuto(){
       autoI= setInterval(() => {
        // 오른쪽이동 슬라이드 함수호출
        rightSlide();
        // 블릿변경함수호출(오른쪽은 1)
        chgIndic(1);

       // console.log('실행!');
       // 오른쪽버튼 클릭이벤트 강제발생!
       // 선택요소.click()
        //  abtn[1].click();   
      }, 3000);

   } ///////// slideAuto 함수 //////////////

   // 인터발함수 최초호출!
//    slideAuto();

   // 버튼을 클릭할 경우를 구분하여 자동넘김을 멈춰준다!
   function clearAuto(){
    // 자동넘김 지우기
        // clearInterval(인터발할당변수)
        console.log('멈춤!!!');

        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기(재실행호출 쓰나미 방지)
        clearTimeout(autoT);
        // 3. 일정시간후 다시 인터발호출셋팅하기!!!
        autoT = setTimeout(slideAuto,5000);
        // 결과적으로 5초후 인터발재실행은 하나만 남는다!

   } //////////// clearAuto 함수 ///////////
} //////////////// slideFn 함수 ///////////////
/////////////////////////////////////////////

/////////////////////////////////////////////
//// 드래그 기능 함수 파트 ////////////////////
/////////////////////////////////////////////
// 드래그 적용 이벤트 설정하기 ///////
// 1. 대상 선정 : .dtg 는 .slide와 일치함!
const dtg = dFn.qsa(".dtg");
// 2. 드래그 설정하기
dtg.forEach((ele) => goDrag(ele));

/****************************************** 
    [ 드래그 다중적용 함수 만들기 ]
    함수명 : goDrag
    기능 : 다중 드래그 기능 적용
******************************************/
function goDrag(ele) {
  // ele - 드래그 대상요소(.slide임!)

  // 1. 변수 셋팅
  // (1) 드래그 상태변수 : true - 드래그중, false - 드래그아님
  let drag = false;
  // (2) 첫번째 위치 포인트 first x, first y
  let fx, fy;
  // (3) 마지막 위치 포인트 last x, last y
  // 처음 위치는 슬라이드 최초 left위치값으로 읽어옴!
  let lx = ele.offsetLeft,
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
    // console.log("드래그상태:", drag);

    // 드래그 상태일때만 실행
    if (drag) {
      // 1. 드래그 상태에서 움직일때 위치값 : mvx, mvy
      // - pageX,pageY 는 일반브라우저용
      // - touches[0].screenX, touches[0].screenY는 터치스크린용
      mvx = e.pageX || e.touches[0].screenX;
    //   mvy = e.pageY || e.touches[0].screenY;

      // 2. 움직일때 위치값 - 처음위치값 : rx, ry
      // x축값은 left값, y축값은 top값 이동이다!
      rx = mvx - fx;
    //   ry = mvy - fy;
      // 순수하게 움직인 거리를 계산! -> 가장중요한 핵심!!!

      // 3. x,y 움직인 위치값을 타겟요소에 적용!
      // 대상 : 전달된 드래그 요소 -> ele변수
      ele.style.left = rx + lx + "px";
    //   ele.style.top = ry + ly + "px";
      // 한번 드래그 후 다시 드래그시 움직인 위치값이 필요함!
      // -> 마지막 위치값 저장필요! -> lx, ly
      // -> 항상 최종위치에서 움직인 위치를 더한다!!!

      // 4. z-index값을 모두 초기화후 드래그 대상만 높여줌!
      dtg.forEach(ele=>ele.style.zIndex=0);
      ele.style.zIndex = 1;


      // 값확인
    //   console.log(`fx:${fx} | fy:${fy}`);
    //   console.log(`mvx:${mvx} | mvy:${mvy}`);
    //   console.log(`rx:${rx} | ry:${ry}`);
    //   console.log(`lx:${lx} | ly:${ly}`);
    } //////////// if ///////////

    // 커서 편손(grab)/쥔손(grabbing) 상태 변경하기
    ele.style.cursor = drag?'grabbing':'grab';


  }; ////////// dMove함수 ///////////

  // (4) 첫번째 위치포인트 셋팅함수 : fx, fy
  const firstPoint = (e) => {
    fx = e.pageX || e.touches[0].screenX;
    // fy = e.pageY || e.touches[0].screenY;
    // console.log('첫포인트:',fx,' | ',fy);
  }; ///////// firstPoint함수 //////////

  // (5) 마지막 위치포인트 셋팅함수 : lx, ly
  const lastPoint = () => {
    // 움직일때 위치값을 기존값에 계속 더함
    lx += rx;
    // ly += ry;
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
    // 드래그이동 판별함수 호출 : ele -> 선택한 슬라이드
    goWhere(ele);
  }); //////////// mousemove 함수 ///////////

  // 모바일 이벤트 추가 ///////
  dFn.addEvt(ele, "touchend", () => {
    dFalse();
    lastPoint();
    // 드래그이동 판별함수 호출 : ele -> 선택한 슬라이드
    goWhere(ele);
  }); //////////// touchend 함수 ///////////

  // (3) 마우스 움직일때 : 움직일때 처리함수 호출
  dFn.addEvt(ele, "mousemove", dMove);

  // 모바일 이벤트 추가 ///////
  dFn.addEvt(ele, "touchmove", dMove);

  // (4) 마우스 벗어날때 : 드래그 상태 false처리 함수 호출
  dFn.addEvt(ele, "mouseleave", dFalse);
} //////////// goDrag 함수 //////////////////

/************************************************ 
    함수명 : goWhere
    기능 : 드래그시 왼쪽/오른쪽 이동 판별
    호출 : 드래그시 mouseup/touchend 이벤트에서 호출
************************************************/
function goWhere(target){
    // target - 드래그 대상(슬라이드요소)
    // 1. 현재 드래그 대상 left 위치값
    let tgLeft = target.offsetLeft;
    
    // 2. 기준위치값 : 부모박스를 기준한 -220%의 left 위치값
    let pointLeft = target.parentElement.clientWidth * 2.2;
    // parentElement 상위 부모요소로 이동
    // clientWidth 박스의 가로크기값
    // 220% 이므로 2.2를 곱하면 된다!
    
    console.log('슬라이드LEFT:',tgLeft,
    '\n기준LEFT:',-pointLeft);

    // 3. 방향판별하기 : 기준값에 특정값을 더하고 뺌
    // 3-1. 왼쪽방향이동(오른쪽버튼 클릭과 동일)
    if(tgLeft < -pointLeft - 50){
        console.log('왼쪽방향으로~!');
        // 오른쪽버튼 클릭 이벤트 발생하기!
        // 상대적으로 현재위치에서 찾음        
        dFn.qsEl(target.parentElement,'.ab2').click();
    } //// if ////
    // 3-2. 오른쪽방향이동(왼쪽버튼 클릭과 동일)
    else if(tgLeft > -pointLeft + 50){
        console.log('오른쪽방향으로~!');
        // 왼쪽버튼 클릭 이벤트 발생하기!
        // 상대적으로 현재위치에서 찾음
        dFn.qsEl(target.parentElement,'.ab1').click();
    } //// else if ////
    // 3-3. 중간영역은 제자리로 돌아옴
    else{
        console.log('제자리로~!');
    } //// else /////


} //////////////// goWhere 함수 /////////////////



