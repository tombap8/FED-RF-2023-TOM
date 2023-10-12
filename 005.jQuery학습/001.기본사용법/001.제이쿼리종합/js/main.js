// 미니언즈 좀비 탈출 애니 구현 JS - main.js

/*********************************** 
    [ 요구사항정리 ]
    1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
    2. 각 위치별 좀비를 등장시킨다
    3. 맨윗층에서 탈출할때 헬기를 사용한다

    [ 변경대상 ]
    1. 주인공 미니언즈
    2. 좀비 미니언즈들
    3. 주사기
    4. 헬기

    [ 이벤트와 이벤트대상  ]
    1. 이벤트 : 클릭이벤트
    2. 이벤트대상 : 버튼들
    3. 기능구분 : 버튼글자(지시사항)

***********************************/

// 0. 주인공들 변수에 할당!
// (1) 미니언즈
const mi = $(".mi");

// (2) 건물 li
const room = $(".building li");

// (3) 버튼들
const btns = $(".btns button");

// (4) 메시지 박스
const msg = $(".msg");

// (5) 좀비, 주사기 요소 변수처리
let mz1 = `<img src="./images/mz1.png" alt="좀비1" class="mz">`;
let mz2 = `<img src="./images/mz2.png" alt="좀비2" class="mz">`;
let zom = `<img src="./images/zom.png" alt="좀비들" class="mz">`;
let inj = `<img src="./images/inj.png" alt="주사기" class="inj">`;

// console.log('대상:',mi,room,btns,msg);

// 1. 건물 각 방에 번호넣기 + 좀비/주사기 넣기
// 대상: .building li -> room변수
// 사용 제이쿼리 메서드:
// (1) each((순번,요소)=>{}) : 요소의 개수만큼 순서대로 돌아줌!
// (2) append(요소) : 선택요소 내부에 자식요소 추가(이동)

room.each((idx, ele) => {
  // console.log(idx,ele);
  // 1. 각 방에 숫자로 순번넣기
  $(ele).text(idx);

  // 2. 좀비/주사기 넣기
  switch (idx) {
    case 9:
      $(ele).append(mz1);
      break;
    case 7:
      $(ele).append(mz2);
      break;
    case 2:
      $(ele).append(inj);
      break;
    case 1:
      $(ele).append(zom);
      break;
  } /////// switch case //////
}); /////////// each 메서드 //////////////

// 좀비는 모두 숨기기
$(".mz").hide();
// 시간이 없는 hide()는 display:none 처리함!

// 2. 버튼 셋팅하기 //////////////////
// 대상: .btns button -> btns변수
btns.hide().first().show();
// 버튼들.숨겨().첫번째().보여()
// btns.hide().eq(4).show();

// 3. 미니언즈 공통 기능함수 /////////
// (1) ele - 클릭된 버튼요소
// (2) seq - 이동할 li방 순번
// (3) fn - 이동후 실행할 코드(콜백함수)
const actMini = (ele, seq, fn) => {
  // 0. 메시지 숨기기 + 버튼 숨기기
  msg.fadeOut(300);
  // this는 클릭된 버튼자신! -> ele로 전달!
  $(ele).slideUp(400);

  // 1. 위치값 읽기 : seq에 방번호를 보냄!
  // 원리: 이동할 li방 위치값을 읽은 후 이동함
  let myRoom = room.eq(seq);
  // 위치값 배열변수
  let pos = [];
  // top 위치값
  pos[0] = myRoom.offset().top;
  // left 위치값 : 방에서 중앙에 위치하도록 보정
  // -> left값 + 방width절반 - 미니언즈width절반
  pos[1] = myRoom.offset().left + myRoom.width() / 2 - mi.width() / 2;

  // 제이쿼리 위치값 정보 메서드 :  offset()
  // ->하위속성: offset().top / offset().left
  // 제이쿼리 가로,세로 크기정보 메서드 :
  // -> 가로크기 width() / 세로크기 height()

  console.log("위치값:", pos[0], "/", pos[1]);

  // 2. 이동하기
  // 대상: .mi -> mi변수
  // animate({CSS설정},시간,이징,콜백함수)
  mi.animate(
    {
      top: pos[0] + "px",
      left: pos[1] + "px",
    },
    800,
    "easeOutElastic",
    // 콜백함수
    fn
    // function(){ -> this가 mi임!
  ); ///////// animate ////////
}; /////////// actMini함수 //////////////

// 4. "들어가기" 버튼 클릭시 /////////////
btns
  .first() // 첫번째버튼
  .click(function () {
    // 하위 이벤트함수 this의미!
    // ()=>{

    // 버튼별 콜백함수 만들기 ////////
    let fn = () => {
      // this가 싸고있는 버튼요소임!

      // 메시지변경 + 메시지 보이기
      msg.html(`와~! 아늑하다!<br>옆방으로 가보자!`).delay(1000).fadeIn(300);

      // console.log('미니언즈 콜백함수:',this);
      // 다음버튼 보이기
      $(this).next().delay(1000).slideDown(400);
    }; ////////// 콜백함수 /////////////

    // 미니언즈 공통함수 호출
    actMini(this, 8, fn);
  }); //// "들어가기" 버튼 끝 //////////
