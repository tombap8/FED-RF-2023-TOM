// JS4-4. 배열의 정렬과 검색 JS

// DOM메서드
import dFn from './dom.js';

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
const showNum = dFn.qs('.showNum');

// (2) 배열 숫자 데이터 만큼 이미지로 변환하여 출력
// map().join() 맵쬬잉!
const showScreen = () =>
showNum.innerHTML = arrNumber.map(val=>
    `<img src="./images/num/num_0${val}.png" alt="숫자${val}이미지">`).join('');

// 최초출력
showScreen();

// (3) 정렬 기준에 선택박스 변경 이벤트 발생시
// 정렬 변경하기 (오름차순/내림차순)
// (3-1) 대상: #sel
const selBox = dFn.qs('#sel');
// (3-2) 이벤트 연결하기 : 이벤트 종류 - change
dFn.addEvt(selBox,'change',function(){
    // 1. 선택 option value값
    let optVal = this.value;
    console.log('숫자정렬변경:',optVal);
    // 2. 정렬 분기 : 1 - 오름차순 / 2 - 내림차순
    if(optVal==1){ // 오름차순
        // sort() 빼기연산처리 : 앞수-뒷수
        arrNumber.sort((a,b)=>a-b);
    } /////// if ///
    else if(optVal==2){ // 내림차순
        // sort() 빼기연산처리 : 뒷수-앞수
        arrNumber.sort((a,b)=>b-a);
    } ///// else if ////

    // 화면출력 
    // -> 원본 배열의 정렬이 변경된 후 다시 출력 
    showScreen();
}); ///// change 이벤트 함수 //////////

//////////////////////////////////////////
// 2. 문자로만 된 배열의 화면 뿌리기 ////////
// map()메서드로 배열값을 태그로 감싸서 출력하기

// (1) 출력대상: .showNum
const showNum2 = dFn.qs('.showNum2');

// (2) 배열 숫자 데이터 만큼 이미지로 변환하여 출력
// map().join() 맵쬬잉!
const showScreen2 = () =>
showNum2.innerHTML = arrString.map(val=>
    `<span>${val}</span>`).join('');

// 최초출력
showScreen2();

// (3) 정렬 기준에 선택박스 변경 이벤트 발생시
// 정렬 변경하기 (오름차순/내림차순)
// (3-1) 대상: #sel
const selBox2 = dFn.qs('#sel2');
// (3-2) 이벤트 연결하기 : 이벤트 종류 - change
dFn.addEvt(selBox2,'change',function(){
    // 1. 선택 option value값
    let optVal = this.value;
    console.log('숫자정렬변경:',optVal);
    // 2. 정렬 분기 : 1 - 오름차순 / 2 - 내림차순
    if(optVal==1){ // 오름차순
        arrString.sort();
    } /////// if ///
    else if(optVal==2){ // 내림차순
        arrString.reverse();
    } ///// else if ////

    // 화면출력 
    // -> 원본 배열의 정렬이 변경된 후 다시 출력 
    showScreen2();
}); ///// change 이벤트 함수 //////////
