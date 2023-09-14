// 네비게이션 유형6 JS - nav06.js
// 가로네비 서브별 드롭다운 전체창

const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////


// 1. 구현 요구사항
// GNB메뉴의 데이터를 모두 html DOM으로 구조화하여
// 화면에 출력한다!

// 2. 대상선정: .gnb
const gnbBox = domFn.qs('.gnb');
// console.log('대상',gnbBox);


// 3. 객체 데이터로 html 코드만들기
let hcode = '';

for(let x in mdata){ // x는 속성명
  // console.log('속성명:',x); 
  hcode +=
  `<ul>
      <li>
          <a href="#">${x}</a>
          <div class="smenu">
              <aside class="smbx">
                  <h2>
                      <div class="stit">${x}</div>
                      <a href="#">전체보기</a>
                  </h2>
                  <div class="swrap">
                      <!-- 2차메뉴 dl생성 -->
                      ${makeCode(mdata[x])}
                  </div>
              </aside>
          </div>
      </li>
    </ul>`
} //////// for in /////////////

// 확인
// console.log('코드:',hcode);


// 내부 for in문 코드 생성함수 만들기 /////
function makeCode(obj){ // obj - 객체 전달값
    // console.log('나야나',obj);
    // 코드변수
    let hcode = '';

    // 객체반복문 for in사용!
    for(let x in obj){ // x - 속성명(2차메뉴)
      hcode +=
      `
        <dl>
            <dt>${x}</dt>
            <!-- 3차메뉴 dd생성 -->
            ${obj[x].map(
              val=>
              `<dd><a href="#">${val}</a></dd>`).join('')}
            
        </dl>
      `;
      
    } /////// for in /////////////

    // 결과리턴
    return hcode;

} //////////// makeCode 함수 ///////////////

// 4. 최종 GNB출력하기 ////////////
gnbBox.innerHTML = hcode;


/***************************************** 
  [ 배열데이터를 변경하여 다시 배열로 만들기 : map() ]

  배열변수.map((배열값,순번,전체배열)=>{변경코드})
  -> 결과로 변경된 배열이 리턴됨!
  -> 새로 만들어진 배열데이터를 현재 자리에 그대로 
  출력하고자 할때 배열메서드 join(구분자)를 이용하여
  배열을 하나의 문자형 데이터로 만들주면 편리하다!

  예) const aa = ['하하','호호']
  `<div>${aa.map(val=>`<h2>${val}</h2>`).join('')}</div>`
  - 결과 : `<div><h2>하하</h2><h2>호호</h2></div>`
  -> 구분자가 없는 태그로만 구성된 최종데이터를 그자리에 출력함!
  ->>>> 잊지말자! 맵쪼인!
  _________________________________________
  const aa = ['신숙','상호','경미'];
  -> 배열데이터는 이름인데 뒤에 '씨'붙여서 보관하기로!
  const bb = aa.map(val=>val+'씨');
  -> 결과: ['신숙씨','상호씨','경미씨']
*****************************************/
// const aa = ['신숙','상호','경미'];
// console.log(aa);
// const bb = aa.map(val=>val+'씨');
// console.log(bb);
// const cc = bb.map((val,idx)=>`<div>${idx+'.'+val}</div>`)
// console.log(cc,'배열이니? ',Array.isArray(cc));


// ul>li>a[href='#']{1차}+.smenu>aside.smbx>h2>(.stit{1차}+a[href='#']{전체보기})+.swrap>dl>dt{2차}+dd>a[href='#']{3차}




/************************************* 
  [ 상위메뉴 li오버시 하위메뉴 보이기 ]
  이벤트 대상: .gnb>ul>li
  변경 대상: .smenu
*************************************/
// 1. 대상선정
const gnb = domFn.qsa('.gnb>ul>li');

// 2. 이벤트 설정하기
// 이벤트 종류: mouseover / mouseout
gnb.forEach(ele=>{
  domFn.addEvt(ele,'mouseover',overFn);
  domFn.addEvt(ele,'mouseout',outFn);
});

// 3.함수만들기
function overFn(){
  // console.log('오버',this);
  // 1.하위 .smbx 높이값 알아오기
  let hv = domFn.qsEl(this,'.smbx').clientHeight;
  // console.log('높이:',hv);
  // 2.하위 서브메뉴박스 만큼 .smenu 높이값 주기
  domFn.qsEl(this,'.smenu').style.height = hv + 'px';
} //////////// overFn 함수 ////////////

function outFn(){
  // console.log('아웃',this);
  // 서브메뉴 박스 높이값 0만들기!
  domFn.qsEl(this,'.smenu').style.height = '0px';
} //////////// outFn 함수 ////////////

