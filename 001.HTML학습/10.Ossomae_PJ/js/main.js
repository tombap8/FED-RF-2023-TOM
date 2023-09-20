// 옷소매 갤러리 JS - main.js

// DOM함수 ////////////////
import dFn from './dom.js';

// console.log(dFn);

// 1. 기능정의: 버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함
// 1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
// -> 갤러리부모박스.appendChild(맨앞자식div)
// 1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
// -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)

// 2. 대상선정 //////////////////
// 2-1. 이벤트대상 : .abtn(이동버튼들)
const abtn = dFn.qsa('.abtn');
// 2-2. 변경대상 : .gbx(갤러리부모박스)
const gbx = dFn.qs('.gbx');

// console.log('대상:',abtn,gbx);

// 3. 이벤트 설정하기 ///////////////
abtn.forEach(ele=>{
    dFn.addEvt(ele,'click',goSlide);
})

// 광클금지변수(0-허용,1-금지)
let stsClick = 0;
// 잠금시간
const TIME_SLIDE = 400;

// 4. 함수만들기 ///////////////////
function goSlide(){
    //0. 광클금지
    if(stsClick) return;//돌아가!
    stsClick=1;//잠금!
    setTimeout(()=>stsClick=0,TIME_SLIDE);//해제!


    // 1. 버튼구분하기
    let isR = this.classList.contains('rb');
    console.log('고고씽~!',this,isR);

    // 현재 갤러리 하위자식 div요소 집합 새로읽기
    // 매번 순서가 바뀌니까 매번 새로 읽어야함!
    let newList = dFn.qsaEl(gbx,'div');

    // 2. 기능 분기하기
    // 2-1. 오른쪽버튼 : 맨앞div 맨뒤로 이동
    if(isR){
        // 갤러리부모박스.appendChild(맨앞자식div)
        gbx.appendChild(newList[0]);

    } /// if ///
    // 2-2. 왼쪽버튼 : 맨뒤div 맨앞으로 이동
    else{
        // 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)
        // 마지막 컬렉션번호는 [개수-1]
        gbx.insertBefore(newList[newList.length-1],newList[0])
    } /// else ///

} /////////// goSlide 함수 ///////////

// 자동넘김용 호출함수 /////////////
const goRight = () => gbx.appendChild(dFn.qsaEl(gbx,'div')[0]);

// 자동넘김용 변수(인터발용:autoI,타임아웃용:autoT)
let autoI, autoT;

// 인터발호출함수 //////
const autoSlide = () => autoI = setInterval(goRight,3000);

// 인터발함수 최초호출
autoSlide();

// 인터발지우기함수 //////
const clearAuto = () => {
    // 인터발 지우기
    clearInterval(autoI);
    // 타임아웃 지우기
    clearTimeout(autoT);
    // 일정시간후 작동
    autoT = setTimeout(autoSlide,5000);
}; ////// clearAuto ///////

// 버튼 클릭시 clearAuto함수 호출하기
abtn.forEach(ele=>dFn.addEvt(ele,'click',clearAuto));
