// 쇼핑몰 배너 JS - 03.페이드효과 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩후 이벤트설정 및 슬라이드 기능
******************************************/
function loadFn() {
  console.log("로딩완료!");

  // 슬라이드 순번 전역변수
  let snum = 0;

  // 1. 대상선정
  // 1-1.이벤트 대상: .abtn
  const abtn = qsa(".abtn");
  // 1-2.변경 대상: #slide li
  const slide = qsa("#slide li");
  // 슬라이드 개수
  const CNT_SLIDE = slide.length;
  // 1-3.블릿박스 대상:
  const indic = qsa(".indic li");

  // 대상확인
  console.log("대상", abtn, slide, indic);

  // 2. 이벤트 설정하기
  abtn.forEach((ele) => {
    addEvt(ele, "click", goSlide);
  }); ///////// forEach ///////////

  // 3. 함수만들기
  function goSlide() {
    console.log("나야나!", this);

    // 0. 이전순번li 클래스 "on" 지우기
    // slide[snum].classList.remove("on");

    // 1. 버튼 구분하기
    let isR = this.classList.contains("ab2");
    console.log("오른쪽?", isR);

    // 2. 버튼별 분기하기
    if (isR) {
      // 오른쪽버튼
      // 슬라이드번호 증가
      snum++;
      // 슬라이드 한계값 -> 끝이상은 처음으로!
      if (snum == CNT_SLIDE) snum = 0;
    } ///// if //////
    else {
      // 왼쪽버튼
      // 슬라이드번호 감소
      snum--;
      // 슬라이드 한계값 -> 0미만은 마지막번호!
      if (snum < 0) snum = CNT_SLIDE - 1;
    } ///// else /////////

    console.log('snum:',snum);

    // 3. 해당li에 클래스 "on"넣기
    slide[snum].classList.add("on");

    // 0번에서 처리안할 경우 4번에서 처리
    // 4. 해당li빼고 전체 li 클래스 "on"지우기
    // 같은 li요소인지 검증: 요소.isSameNode(다른요소)
    slide.forEach(ele=>{
        // console.log(ele.isSameNode(slide[snum]));
        // 현재li가 아니면 클래스 "on"지우기!
        if(!ele.isSameNode(slide[snum]))
            ele.classList.remove("on");
    }); ///////// forEach //////////////



  } /////////// goSlide 함수 //////////
} /////////////// loadFn 함수 //////////////
