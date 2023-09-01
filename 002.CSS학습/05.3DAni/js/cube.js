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

    // 1. 대상선정: 
    // 1-1. 이벤트대상: .btngo
    const btngo = qs('.btngo');
    // 1-2. 변경대상: .cube
    const cube = qs('.cube');
    console.log('대상:',btngo,cube);

    // 2. 이벤트 함수 설정하기
    btngo.onclick = () => {
        // 호출확인
        console.log('돌아!');
        // 1. 대상: .cube -> cube변수
        // 2. 변경내용 : 
        // 클래스on 없으면넣고 있으면 빼기
        // classList.toggle(클래스명)
        cube.classList.toggle('on');
    }; /////////// click이벤트 함수 ///////


} /////////////// loadFn함수 //////////////
///////////////////////////////////////////