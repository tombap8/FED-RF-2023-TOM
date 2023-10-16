// JS4-4. 배열의 정렬과 검색 JS

// DOM메서드
import dFn from "./dom.js";

// console.log(dFn);

/****************************************************** 
    [ JS 배열의 정렬 ]
    -> 용어의 정의: 정렬이란?
    : 배열의 값을 기준으로 순서를 다시 정하는것!
    배열의 정렬은 sort() 메서드 사용!
    sort() 메서드를 사용하여 배열의값을 오른차순,내림차순으로
    정렬할 수 있음!

    [ sort() 메서드의 특징 ]
    1. 기본정렬 :  오름차순(1,2,3,.../a,b,c,...)
        -> 기본 내림차순 메서드 -> reverse()
    2. 원리 : 배열값을 문자열로 캐스팅(형변환)한후
            변환된 문자열을 비교하여 순서를 결정함
    (참고: undefined 값일 경우 배열 맨뒤에 배치함)
    -> 주의: 숫자를 비교해도 문자열로 비교하기 때문에
    "25"와 "100" 중 큰 숫자는 100이지만 25를 더 큰
    데이터로 인식한다! 
    -> sort() 메서드 비교함수로 처리!

    [ sort() 메서드 비교함수 ]
    -> sort() 메서드 내부에 2개의 전달값을 가지는 함수를 쓰면
    sort메서드 자체에서 값을 비교하여 배열값의 순서를 바꾼다!
    -> 숫자일 경우 빼기 연산을 함!

    숫자데이터배열.sort(function(a,b){return a-b;}) => 오름차순
    숫자데이터배열.sort((a,b)=>a-b) => 오름차순

    숫자데이터배열.sort(function(a,b){return b-a;}) => 내림차순
    숫자데이터배열.sort((a,b)=>b-a) => 내림차순

    -> a는 앞 데이터, b는 뒷 데이터

    [-> 기준정렬 : 오름차순]
    배열변수.sort() -> 기본정렬

    [-> 기준정렬 : 내림차순]
    배열변수.reverse() -> 기본정렬

    ++++++++++++++++++++++++++++++++++++++++++++++

    ->>> 숫자형, 문자형에 무관하게 하나로 처리하기!!!
     [ sort() 메서드만 사용하여 정렬잡기 ]

    ((비교함수사용))
    배열변수.sort(function(x,y){
        if(x>y) return 1;
        if(x<y) return -1;
        return 0;
    })
    
    -> 단순화하기(삼항연산자사용!)

    배열변수.sort(function(x,y){
        return x == y ? 0 : x > y ? 1 : -1;
    })

    -> 더 줄이기! (화살표함수 사용!)

    배열변수.sort((x,y)=> x == y ? 0 : x > y ? 1 : -1)


    -> 리턴값의 의미(오름차순)
    1) if(x>y) return 1; -> x가 y뒤에 옴 (리턴값 양수)
    2) if(x<y) return -1; -> x가 y앞에 옴 (리턴값 음수)
    3) return 0; -> x,y 정렬을 유지 (리턴값 0)

    -> 내림차순은 양수/음수만 반대로 써주면 된다!

    [ 정렬시 데이터 유의사항 ]

    1. 문자형일 경우 대소문자가 섞여있으면 대문자나 소문자중
    하나로 통일하여 비교해야함(toUpperCase()/toLowerCase())

    예)
        배열변수.sort((x,y)=>{
            let a = x.toUpperCase(),
                b = y.toUpperCase();
            
            return a == b ? 0 : a > b ? 1 : -1;
        })

    2. 날짜정렬도 숫자와 동일함
    (날짜데이터 자체가 숫자형으로 되어있음)

    3. 특정언어의 특수문자일 경우 
    localeCompare() 메서드로 문자열 비교를 한다!

    예) 특수문자 x변수를 y변수와 변환후 비교 
        x.localeCompare(y)


******************************************************/

// 숫자값 배열
const arrNumber = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];
// 문자값 배열
const arrString = ["파", "타", "하", "가", "바", "사", "다", "라", "차"];

// sort()는 기본 문자로 처리하므로 숫자는 내부함수로 빼기연산처리함!
// console.log('숫자배열:',arrNumber);
// console.log('숫자배열.sort((x,y)=>x-y):',arrNumber.sort((x,y)=>x-y));
// console.log('숫자배열.sort((x,y)=>y-x):',arrNumber.sort((x,y)=>y-x));
// console.log('숫자배열.reverse():',arrNumber.reverse());
// console.log('문자배열:',arrString);
// console.log('문자배열.sort():',arrString.sort());
// console.log('문자배열.reverse():',arrString.reverse());

/////////////////////////////////////////
/// 배열 데이터 화면 출력하기 /////////////

// 1. 숫자로만 된 배열의 화면 뿌리기 ////////
// map()메서드로 배열값을 태그로 감싸서 출력하기

// (1) 출력대상: .showNum
const showNum = dFn.qs(".showNum");

// (2) 배열 숫자 데이터 만큼 이미지로 변환하여 출력
// map().join() 맵쬬잉!
const showScreen = () =>
  (showNum.innerHTML = arrNumber
    .map(
      (val) => `<img src="./images/num/num_0${val}.png" alt="숫자${val}이미지">`
    )
    .join(""));

// 최초출력
showScreen();

// (3) 정렬 기준에 선택박스 변경 이벤트 발생시
// 정렬 변경하기 (오름차순/내림차순)
// (3-1) 대상: #sel
const selBox = dFn.qs("#sel");
// (3-2) 이벤트 연결하기 : 이벤트 종류 - change
dFn.addEvt(selBox, "change", function () {
  // 1. 선택 option value값
  let optVal = this.value;
  console.log("숫자정렬변경:", optVal);
  // 2. 정렬 분기 : 1 - 오름차순 / 2 - 내림차순
  if (optVal == 1) {
    // 오름차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 1처리 -> 순서바꿈!
    arrNumber.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));

    // sort() 빼기연산처리 : 앞수-뒷수
    // arrNumber.sort((a,b)=>a-b);
  } /////// if ///
  else if (optVal == 2) {
    // 내림차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 -1처리 -> 순서안바꿈!
    arrNumber.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1));

    // sort() 빼기연산처리 : 뒷수-앞수
    // arrNumber.sort((a,b)=>b-a);
  } ///// else if ////

  // 화면출력
  // -> 원본 배열의 정렬이 변경된 후 다시 출력
  showScreen();
}); ///// change 이벤트 함수 //////////

//////////////////////////////////////////
// 2. 문자로만 된 배열의 화면 뿌리기 ////////
// map()메서드로 배열값을 태그로 감싸서 출력하기

// (1) 출력대상: .showNum
const showNum2 = dFn.qs(".showNum2");

// (2) 배열 숫자 데이터 만큼 이미지로 변환하여 출력
// map().join() 맵쬬잉!
const showScreen2 = () =>
  (showNum2.innerHTML = arrString.map((val) => `<span>${val}</span>`).join(""));

// 최초출력
showScreen2();

// (3) 정렬 기준에 선택박스 변경 이벤트 발생시
// 정렬 변경하기 (오름차순/내림차순)
// (3-1) 대상: #sel
const selBox2 = dFn.qs("#sel2");
// (3-2) 이벤트 연결하기 : 이벤트 종류 - change
dFn.addEvt(selBox2, "change", function () {
  // 1. 선택 option value값
  let optVal = this.value;
  console.log("숫자정렬변경:", optVal);
  // 2. 정렬 분기 : 1 - 오름차순 / 2 - 내림차순
  if (optVal == 1) {
    // 오름차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 1처리 -> 순서바꿈!
    arrString.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));

    // 오름차순 기본 메서드 sort() 사용
    // arrString.sort();
  } /////// if ///
  else if (optVal == 2) {
    // 내림차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 -1처리 -> 순서안바꿈!
    arrString.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1));

    // 내림차순 기본 메서드 reverse() 사용
    // arrString.reverse();
  } ///// else if ////

  // 화면출력
  // -> 원본 배열의 정렬이 변경된 후 다시 출력
  showScreen2();
}); ///// change 이벤트 함수 //////////

///////////////////////////////////////////
// 3. 객체 데이터 배열의 정렬 //////////////
///////////////////////////////////////////
// (1) 데이터 : 객체데이터 배열
const list1 = [
  {
    idx: 8,
    tit: "나는 구누?",
    cont: "공동구매) 슬로건 공구 (계좌와 네이버폼)",
  },
  {
    idx: 4,
    tit: "여기는 어디?",
    cont: "총공 공지] 오늘부터 일 2회, 총공 진행합니다",
  },
  {
    idx: 1,
    tit: "나야나",
    cont: "연합 갈라 서포트 계좌오픈",
  },
  {
    idx: 15,
    tit: "이제 얼마나 남은거니?",
    cont: "음악프로그램에 출연 요청글도 써볼까요?",
  },
]; /////////////// list1 /////////////

console.log(list1);

// 출력대상: .showList3
const showList3 = dFn.qs(".showList3");

// (2) html 코드 생성하여 출력하는 함수 만들기
// upCode 함수를 공통으로 파라미터 처리함 /////
const upCode = (data,exBox) => {
  // data - 객체데이터배열 / exBox - 출력할요소
  // 반복코드 만들기
  // 대상코드 : list1 배열
  let hcode = data.map(
    (val) => `
      <tr>
          <td>${val.idx}</td>
          <td>${val.tit}</td>
          <td>${val.cont}</td>
      </tr>
  `
  );
  // console.log('새로운배열:',hcode);

  // 테이블 생성코드 넣기
  exBox.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
        </tr>
      </thead>
      <tbody>
        ${hcode.join("")}
      </tbody>
    </table>
  `;
}; //////////// upCode 함수 //////////////

// (3) 요소에 데이터 코드 넣기 함수호출 : 기본출력
upCode(list1,showList3);

// (4) 정렬변경 이벤트 발생시 실제 정렬 변경하기 ///
// 이벤트 대상: .sel3
const sel3 = dFn.qs(".sel3");
// 정렬기준 대상: .cta3
const cta3 = dFn.qs(".cta3");

// sel3 이벤트 설정하기 ////
// 데이터와 출력 타겟부터 설정후 정렬함수 호출!
dFn.addEvt(sel3, "change", ()=>{
  targetData = list1;
  targetEle = showList3;
}); /////// change ///////////
dFn.addEvt(sel3, "change", sortingFn);

// 정렬변경함수의 데이터 및 출력요소 셋팅변수
let targetData = list1;
let targetEle = showList3;

// 정렬변경 함수 만들기 ///
function sortingFn() {
  // 1. 선택값 담기 : 오름차순(1), 내림차순(2)
  let optVal = this.value;

  console.log('앞에누구?',this.previousElementSibling);
  // this -> 콤보박스자신
  // 앞에있는 형제요소 선택 : this.previousElementSibling
  // 뒤에있는 형제요소 선택 : this.nextElementSibling
  
  // 2. 정렬기준값 읽기 : 
  // -> idx, tit, cont (객체데이터 배열의 속성명)
  // let cta = cta3.value;
  let cta = this.previousElementSibling.value;
  
  console.log("바꿔! 정렬!", optVal,cta);

  // 2. 분기하기
  // 데이터 대상: targetData 배열
  if (optVal == 1) {
    // 오름차순
    targetData.sort((a, b) => {
      // a,b는 모두 객체 데이터
      // 따라서 내부 속성을 구체적으로 비교함!
      // idx,tit,cont 세가지 중 하나로 비교
      return a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? 1 : -1;
    });
  } //// if //////
  else if (optVal == 2) {
    // 내림차순
    targetData.sort((a, b) => {
      // a,b는 모두 객체 데이터
      // 따라서 내부 속성을 구체적으로 비교함!
      // idx,tit,cont 세가지 중 하나로 비교
      return a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? -1 : 1;
    });
  } //// else if //////

  console.log(targetData);

  // 리스트 코드 반영하기 : 대상데이터,출력요소는
  // 호출시 설정된 것으로 셋팅됨!
  upCode(targetData,targetEle);

  console.log('타겟데이터:',targetData,
  '\n타겟요소:',targetEle);
} ////////// sortingFn 함수 /////////

//////////////////////////////////////////////
////////////// 배열의 검색 !!! ////////////////
//////////////////////////////////////////////

// 4. 객체데이터 검색후 배열의 정렬 ////////////

// 출력대상: showList4
const showList4 = dFn.qs('.showList4');
// console.log(showList4);

// (1) 데이터 : 객체 데이터 배열
const list2 = [
  {
      idx: 15,
      tit: "당근마켓에 가자",
      cont: "당근마켓이 정말로 싸고 좋다구~!",
  },
  {
      idx: 74,
      tit: "점심에 뭐먹지?",
      cont: "오스틴님 생일 서포트 안내",
  },
  {
      idx: 18,
      tit: "직돌이는 쉬고싶다~!",
      cont: "활동정지에 대한 파생글 무통보 삭제 및 경고",
  },
  {
      idx: 104,
      tit: "올해는 다른 회사로 이직한다!",
      cont: "⚜️갈라콘 서포트에 많은 참여 부탁드립니다!",
  },
]; /////////////// list2 /////////////     

// 위의  upCode() 함수를 호출하여 페이지 찍기
upCode(list2,showList4);

// sel4 이벤트 설정하기 ////
// 데이터와 출력 타겟부터 설정후 정렬함수 호출!
dFn.addEvt(sel4, "change", ()=>{
  targetData = list2;
  targetEle = showList4;
}); /////// change ///////////
dFn.addEvt(sel4, "change", sortingFn);

