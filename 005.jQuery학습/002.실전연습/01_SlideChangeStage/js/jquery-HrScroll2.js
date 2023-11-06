// 제이쿼리로 구현한 가로방향 스크롤 JS : 
// jquery-HrScroll2.js

// 전체 마우스 휠 이벤트를 정지시킴!
// overflow:hidden 설정을 html,body에 했으므로
// 스크롤이 되지 않는다!
// (휠 이벤트는 발생하지만 작동은 하지 않는다!)

// 이벤트 대상: html,body
// 이벤트 종류: wheel
$('html,body').on('wheel',(e)=>{
    console.log('휠~~~', event.wheelDelta);


    // 휠방향 : 델타값으로 알아냄! (event.wheelDelta)
    // -> 값증가(오른쪽이동) : 음수값
    // -> 값감소(왼쪽이동) : 양수값

    // 변경대상: html,body 가로스크롤
    // -> scrollLeft 속성사용!
    $('html,body').animate({
        scrollLeft: '500px'
    })
})
