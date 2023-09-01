// 큐브 애니2 JS - cube2.js //////////////

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
    btngo.onclick = e => { // e - 이벤트전달변수
        // 호출확인
        console.log('돌아!');
        // 1. 대상: .cube -> cube변수

        // 2. 변경내용 : 
        // 클래스on 없으면넣고 있으면 빼기
        // classList.toggle(클래스명)
        cube.classList.toggle('on');

        // 3. 텍스트 읽어오기(버튼글자변경위해)
        let btxt = e.target.innerText;
        console.log(
            "화살표함수에서 this:",this,
            "화살표함수에서 e.target",e.target,
            '현재버튼글자:',btxt);

        // 4. 버튼글자 변경하기: "돌아!"<->"멈춰!"
        e.target.innerText = 
        btxt=='돌아!'?'멈춰!':'돌아!';
        // 할당할 데이터를 삼항연산자로 결정!
        // 비?집:놀이동산
    }; /////////// click이벤트 함수 ///////


} /////////////// loadFn함수 //////////////
///////////////////////////////////////////