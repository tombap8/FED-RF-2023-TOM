// 도깨비 PJ 메인 JS - main.js

// 모듈 불러오기 ///////
// DOM함수 모듈
import dFn from "./dom.js";
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";
// 데이터 모듈
import { gridData, gnbData } from "./data_drama.js";

// 부드러운 스크롤 적용 //////////
startSS();

// 0. 새로고치면 스크롤바 위치캐싱후 맨위로 이동
setTimeout(() => {
  // 윈도우 스크롤 맨위로!
  window.scrollTo(0, 0);
  // 부드러운 스크롤 위치값 반영!
  setPos(0);
  // 안하면 원래 위치로 스크롤시 튐!
}, 400);
// 0. 스크롤바 트랙을 잡고 위치이동시 위치값 반영
dFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
//////// mouseup /////////////

// 0. 키보드 방향키 이동시 위치값 반영
dFn.addEvt(window, "keyup", () => setPos(window.scrollY));
//////// mouseup /////////////

// 부드러운 스크롤 때문에 마우스휠 이벤트막기가
// 작동되어 캐릭터설명박스 작은 스크롤도 작동안됨!
// 따라서 이벤트 버블링을 막아줘야함!
// event.stopPropagation()
// 이벤트 객체의 이벤트 버블링 막아주는 메서드임!

// 대상: .desc-box
let desc_box = document.querySelectorAll(".desc-box");
console.log(desc_box);

// 모든 캐릭터 설명박스는 이벤트 버블링 막기!!!
// -> 여기서 마우스휠 됨!!!
desc_box.forEach((ele) => {
  // ele - 요소자신
  ele.onwheel = (e) => e.stopPropagation();
});

/**************************************** 
    [ 그리드박스 공통파트 데이터 구성하기 ]
    - 배열데이터를 이용하여 HTML코드 구성
  ****************************************/
// 1. 대상선정 : .grid-box (.live-box/.poster-box)
const gridBox = dFn.qsa(".grid-box");
console.log("대상:", gridBox);

// 2. 대상 코드넣기 함수 호출설정하기 ///////
gridBox.forEach((ele,idx)=>makeGrid(ele,idx));

// 3. 그리드 스타일 데이터 생성하기 함수
function makeGrid(ele,idx) { 
  // ele - 대상요소 / idx - 순번(데이터순번)
  // 1. 현장포토 데이터를 기반으로 HTML코드 만들기
  let hcode = "<ul>";

  // 반복코드 만들기 /////
  // 현장포토 데이터 - data_drama.js에서 가져옴
  gridData[idx].forEach((val) => {
    // html변수에 계속 넣기
    // 폴더경로는 idx가 0이면'live_photo' 
    // 1이면'poster_img'로 셋팅함!
    hcode += ` <li>
              <figure>
                  <img src="images/${idx?'poster_img':'live_photo'}/${val.imgName}.jpg" alt="${val.title}">
                  <figcaption>${val.title}</figcaption>
              </figure>
          </li>
        `;
  }); //////// forEach /////////////

  hcode += "</ul>";

  //   console.log(hcode);

  // 2. 대상박스에 html코드 넣기
  ele.innerHTML = hcode;
} /////////// makeGrid함수 //////////////

/////////////////////////////
// [ GNB 서브메뉴 셋팅하기 ]
// 구조: div.smenu > aside.smbx > h2{1차메뉴} + (ol>li>a{2차메뉴})

// 1.대상선정 : .gnb > ul > li
// 서브메뉴 넣을 li는 하위 a요소의 텍스트가 gnbData 속성명 1차메뉴와
// 일치하는 경우 하위 메뉴를 넣어준다!
const gnbList = dFn.qsa(".gnb>ul>li");
console.log("메뉴:", gnbList, "/데이터:", gnbData);

// 3. 대상에 하위메뉴 태그 만들기
gnbList.forEach((ele) => {
  // 1.하위 a요소 텍스트 읽기
  let atxt = dFn.qsEl(ele, "a").innerText;

  // 2.GNB 데이터 읽기
  let gData = gnbData[atxt];
  // console.log('텍스트:',atxt,gData);

  // 3.해당 서브 데이터가 있을 경우 태그 만들어 넣기
  // Array.isArray(gData)로 배열여부를 확인함!
  // 배열값은 태그를 만들어 그자리에 출력: 배열.map().join('')
  if (gData) {
    // 데이터없으면 undefined -> false처리!
    console.log("만들어!", atxt);
    ele.innerHTML += `
        <div class="smenu">
          <aside class="smbx">
            <h2>${atxt}</h2>
            <ol>
            ${gData
              .map(
                (val) => `
              <li>
                <a href="#">${val}</a>
              </li>
            `
              )
              .join("")}
            </ol>
          </aside>
        </div>
      `;
  } ////////// if /////////
}); ///////// forEach ////////////

/************************************* 
  [ 상위메뉴 li오버시 하위메뉴 보이기 ]
  이벤트 대상: .gnb>ul>li
  변경 대상: .smenu
*************************************/
// 1. 대상선정
const gnb = dFn.qsa(".gnb>ul>li");

// 2. 이벤트 설정하기
// 이벤트 종류: mouseover / mouseout
gnb.forEach((ele) => {
  // 서브메뉴가 있을때만 이벤트 설정하기!
  // if문에서 undefined/null 은 false처리됨!
  if (dFn.qsEl(ele, ".smenu")) {
    dFn.addEvt(ele, "mouseover", overFn);
    dFn.addEvt(ele, "mouseout", outFn);
  }
});

// 3.함수만들기
function overFn() {
  // console.log('오버',this);
  // 1.하위 .smbx 높이값 알아오기
  let hv = dFn.qsEl(this, ".smbx").clientHeight;
  console.log("높이:", hv);
  // 2.하위 서브메뉴박스 만큼 .smenu 높이값 주기
  dFn.qsEl(this, ".smenu").style.height = hv + "px";
} //////////// overFn 함수 ////////////

function outFn() {
  // console.log('아웃',this);
  // 서브메뉴 박스 높이값 0만들기!
  dFn.qsEl(this, ".smenu").style.height = "0px";
} //////////// outFn 함수 ////////////
