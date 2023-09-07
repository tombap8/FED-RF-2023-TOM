// 쇼핑몰 배너 JS - 02.세로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 아랫쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 top값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 top값을 0으로 변경한다!

        (2) 윗쪽 버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 top값을
            -100%로 변경한다.
            그 후 top값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 전역변수구역 //////////
// 1. 광클금지상태변수 : 0-허용,1-불허용
let clickSts = 0;
// 2. 슬라이드 이동시간 : 상수로 설정
const TIME_SLIDE = 400;

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    console.log("로딩완료!");

    // 1. 대상선정
    // 1-1.이벤트 대상: .abtn
    const abtn = qsa('.abtn');
    // 1-2.변경 대상: #slide
    const slide = qs('#slide');
    // 1-3.블릿박스 대상:
    const indic = qsa('.indic li');


    // 대상확인
    console.log('대상',abtn,slide,indic);

    // 1.5. li리스트에 순번속성 만들어 넣기
    // 만드는이유: 블릿변경 등에 현재 슬라이드 순번 필요!
    // 사용자 정의 속성은 반드시 'data-'로시작해야함!(W3C규칙)
    // data-seq 로 순번 속성을 넣을 것임!
    slide.querySelectorAll('li')
    .forEach((ele,idx)=>ele.setAttribute('data-seq',idx));
    // setAttribute(속성명,속성값) -> 속성셋팅 JS내장메서드


    // 2. 이벤트 설정하기 : 버튼요소들 -> forEach()
    abtn.forEach(ele=>addEvt(ele,'click',goSlide));

    // 3. 함수만들기
    function goSlide(){
        // 광클금지 //////////////
        if(clickSts) return;//나가!
        clickSts=1;//잠금!
        setTimeout(()=>clickSts=0,TIME_SLIDE);//해제!


        // 호출확인
        console.log('나야나!',this,
        this.classList.contains('ab2'));

        // classList.contains(클래스명)
        // 선택요소에 해당클래스가 있으면 true

        // 1. 오른쪽 버튼 여부 알아내기
        let isRight = this.classList.contains('ab2');

        // 2. 슬라이드 li 새로 읽기
        let eachOne = slide.querySelectorAll('li');

        // 3. 버튼분기하기 '.ab2' 이면 오른쪽버튼
        if(isRight){ // 오른쪽버튼
            //1.대상이동하기
            slide.style.top = '-100%';
            //2.트랜지션주기
            slide.style.transition = 
                TIME_SLIDE+'ms ease-in-out';
            // 이동시간 후 맨앞li 잘라서 맨뒤로 이동하기
            // appendChild(요소)
            setTimeout(() => {
                // 3.맨앞li 맨뒤로 이동
                slide.appendChild(eachOne[0]);
                // 4.slide top값 0
                slide.style.top = '0';
                // 5.트랜지션 없애기
                slide.style.transition = 'none';
            }, TIME_SLIDE);
        } ////// if //////////////
        else{ // 왼쪽버튼
            // 1. 맨뒤li 맨앞으로 이동
            // 놈.놈.놈 -> insertBefore(넣을놈,넣을놈전놈)
            slide.insertBefore(
                eachOne[eachOne.length-1], eachOne[0]);
            // 2. top값 -100% 만들기 : 들어올 준비 위치!
            slide.style.top = '-100%';
            // 3. 트랜지션 없애기
            slide.style.transition = 'none';
            
            // 같은 top값을 동시에 변경하면 효과가 없음!
            // 비동기적으로 처리해야함!
            // -> setTimeout으로 싸주기!
            // 시간은 0이어도 비동기 처리므로 효과있음!

            setTimeout(() => {
                // 4. top값 0으로 들어오기
                slide.style.top = '0';
                
                // 5. 트랜지션주기
                slide.style.transition = 
                    TIME_SLIDE+'ms ease-in-out';
 
            }, 0);


        } /////// else //////////////

        // 4. 슬라이드 순번과 일치하는 블릿에 클래스 넣기
        // 대상: .indic li -> indic변수
        // 맨앞 슬라이드 li의 'data-seq' 값 읽어오기
        // isRight값이 true이면 오른쪽버튼이고 순번은 [1]
        // isRight값이 false이면 왼쪽버튼이고 순번은 [0]
        let nowSeq = 
        slide.querySelectorAll('li')[isRight?1:0]
        .getAttribute('data-seq');

        console.log('현재슬라이드 순번:',nowSeq);


        
        // 해당순번 블릿li에 클래스 on넣기
        // 블릿전체순회시 해당순번에 on넣고 나머지는 on빼기
        indic.forEach((ele,idx)=>{
            if(idx==nowSeq) ele.classList.add('on');
            else ele.classList.remove('on');
        }); ///////// forEach ///////////

    } ////////// goSlide 함수 /////////


} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
