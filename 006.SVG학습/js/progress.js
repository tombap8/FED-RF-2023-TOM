// progress 페이지 JS

// 요구사항1 : 원형 SVG를 각 %를 다르게 하여 숫자%와 함께
// 진행율을 애니메이션 하여 표현한다!

// 1. 대상선정
// 1-1. 버튼 : .act button
const btnAct = $('.act button');

console.log('대상:',btnAct);

// 2. 이벤트 설정

btnAct.click(function(){
    console.log('나버튼!',$(this).text());

    // 1. 버튼별 분기하기 ////
    if($(this).text()=='팽수1'){

    } /////// if /////

}); //////// click /////////////