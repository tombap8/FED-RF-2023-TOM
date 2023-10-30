// 아이스크림 갤러리 JS - icecream.js

$(()=>{ ////////// jQB /////////////////
    // 요구사항: 아이스크림 갤러리를 드래그하여
    // 이동시키며 양끝에 이동한계를 설정한다!

    // 트랜지션 시간설정변수
    const TRS_TIME_DT = '.8s ease-out';
    const TRS_TIME_MOB = '.3s ease-out';
    // 이징에 in이 들어가면 처음에 답답함!

    // 1. 대상선정 : #move
    // - 아이스크림 리스트를 모두 담고 있는 박스
    const target = $('#move');


    // 2. 변경내용
    // 2-1. 제이쿼리 UI 드래그 설정하기
    target.draggable({
        axis:'x' // x축고정
    }) ///// draggable //////
    // 2-2. 타겟에 트랜지션 설정
    .css({
        transition: TRS_TIME_DT
    }); ///////// css ///////

    // 2-3. 한계값 설정하기 /////////////////

    // 2-3.1. 화면크기 업데이트 함수
    const updataWin = () => $(window).width();
    // 2-3-2. 최초 윈도우가로크기 업데이트
    let winW = updataWin();
    // 2-3-3. 윈도우 리사이즈시 윈도우가로크기 업데이트
    $(window).resize(()=>{
        winW = updataWin();
        console.log('업데이트 화면가로크기:',winW);
    }); ////// resize //////////
    
    console.log('처음화면가로크기:',winW);



}); ////////////// jQB /////////////////