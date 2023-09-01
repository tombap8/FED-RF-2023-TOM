// 큐브 애니 JS //////////////

/************************************* 
    [구현내용]
    - "돌아!"버튼을 클릭하면 멈춰있던
    큐브가 돌아감. 이때 버튼이 "멈춰!"
    버튼으로 변경되어 있음!
    - "멈춰!" 버튼을 클릭하면 돌고있던
    큐브가 멈춤. 이때 버튼이 "돌아!"
    버튼으로 변경되어 있음!

*************************************/

// window 로드 이벤트 호출 ///
window.addEventListener('DOMContentLoaded',loadFn);

// DOM 선택함수 //////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

/////// 로딩함수 //////////////
function loadFn(){
    // 함수호출확인
    console.log('로딩완료!');

    // 1. 대상선정: .btngo
    const btngo = qs('.btngo');
    console.log('대상:',btngo);


} /////////////// loadFn함수 //////////////
///////////////////////////////////////////