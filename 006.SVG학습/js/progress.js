// progress 페이지 JS

// 요구사항1 : 원형 SVG를 각 %를 다르게 하여 숫자%와 함께
// 진행율을 애니메이션 하여 표현한다!

// 1. 대상선정
// 1-1. 버튼 : .act button
const btnAct = $('.act button');
// 1-2. 퍼센트원 : .btns
const btns = $('.btns')

console.log('대상:',btns);

// 2. 이벤트 설정

btnAct.click(function(){
    console.log('나버튼!',$(this).text());

    // 1. 버튼별 분기하기 ////
    if($(this).text()=='팽수1'){
        progFn(0,75);
        // progFn(1,63);
        // progFn(2,89);
        // progFn(3,95);
    } /////// if /////

}); //////// click /////////////


/********************************************* 
    함수명 : progFn
    기능 : 퍼센트 증가에 따른 숫자,그래프변경
*********************************************/
function progFn(seq,max){ 
    // seq - 순번, max - 최대%값

    // 1. 해당순번의 숫자요소
    let ptxt = btns.eq(seq).find('.ptxt');
    // 2. 퍼센트 증가 : 읽어온 숫자를 1씩 증가시킨다!
    let num = ptxt.text(); // 문자형숫자
    num++;
    // 3. 개별숫자 반영하기
    ptxt.text(num);
    // 4. 재귀호출하기 : 기준수보다 작을동안 타임아웃호출
    if(num < max){ // max로 최대한계% 지정
        setTimeout(() => {
            progFn(seq,max);            
        }, 40);
    } ////// if //////

} ////////////// progFn 함수 ///////////////