// 제이쿼리 UI 드래그 & 드롭 기능활용하기 ////

// 제이쿼리 코드 구역 : html태그 로딩후 실행구역
$(()=>{

    // 1. 드래그 기능 대상: .draggable
    const dgEle = $('.draggable');

    // 2. 드래그 기능 설정하기 : draggable() 메서드호출
    // dgEle.draggable() -> 호출만 해도 드래그기능은 됨!
    // 드래그 기능 옵션은 {} 객체로 전달함
    dgEle.draggable({
        // 커서모양 '쥔주먹'표시
        cursor: 'grabbing', 
        // 드래그 대상 상위처리(z-index)
        stack: '.draggable', 
        // 이동중 투명도 설정
        opacity: 0.7
    });




}); ///////////// jQB //////////////