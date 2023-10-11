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
const mi = $('.mi');

// (2) 건물 li
const room = $('.building li');

// (3) 버튼들
const btns = $('.btns button');

// (4) 메시지 박스
const msg = $('.msg');

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

room.each((idx,ele)=>{
    // console.log(idx,ele);
    // 1. 각 방에 숫자로 순번넣기
    $(ele).text(idx);

    // 2. 좀비/주사기 넣기
    switch(idx){
        case 9:
            $(ele).append(mz1);
            break;
        case 7:
            $(ele).append(mz2);
            break;

    } /////// switch case //////

}); /////////// each 메서드 //////////////
