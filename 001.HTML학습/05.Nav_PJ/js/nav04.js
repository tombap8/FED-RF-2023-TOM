// 네비게이션 유형4 JS - nav04.js
// 세로네비 서브별 드롭다운 세로형

const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////


  // 1. 구현요구사항:
  // 상위 메뉴 클릭시 하위 메뉴 나타나기
  // 영역을 벗어날때 하위메뉴 닫기

  // 2. 대상선정 
  // 이벤트 대상: .gnb>ul>li
  // 변경 대상: .smenu -> 클릭된 이벤트 대상 하위요소

  const gnbList = domFn.qsa('.gnb>ul>li');
  console.log('대상:',gnbList);

  // 3. 이벤트 설정하기
  gnbList.forEach(ele=>{
    domFn.addEvt(ele,'click',showSub);
  }); ///////// forEach ////////

  // 4. 함수 생성하기
  function showSub(){
    console.log('나야나!',this)
  } ////////// showSub 함수 ////////


