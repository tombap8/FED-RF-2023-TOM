// 05. 중간스크롤가로이동 JS - dance.js

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => 
    ele.addEventListener(evt, fn),

    // 바운딩top값 리턴함수
    getBCR: ele => ele.getBoundingClientRect().top,
  }; /////// domFn 객체 /////////////

  // 1. 요구사항 : 3번 스테이지에 ul>li 구조의 이미지넣기

  // 2. 대상선정: .slidePg
  const slidePg = domFn.qs('.slidePg');

  console.log('대상:',slidePg);

  // 3. 코드만들기
  let hcode = '';

  for(let i=1;i<=7;i++){
    hcode += `
        <li>
            <img src="./images/dance/${i}.jpg" alt="dance">
        </li>
    `;
  } /////// for /////////////

  hcode = `<ul>${hcode}</ul>`;

//   console.log('코드:',hcode);

  // 4. 대상요소에 코드넣기
  slidePg.innerHTML = hcode;

  /////////////////////////////////////////

  // [ 3번째 영역에 도달한 경우 내용을 가로방향 이동하기 ]

  // 이벤트 대상: window
  // 이벤트 종류: scroll
  // 위치대상: .slidePg -> slidePg변수
  domFn.addEvt(window,'scroll',moveSlide);

  function moveSlide(){
    // 스크롤 위치값
    let scTop = window.scrollY;

    console.log('나야나!',domFn.getBCR(slidePg),scTop);


  } //////////// moveSlide 함수 //////////////