// 보그 PJ 링크 시스템 JS - linksys.js

// 제이쿼리 로드 구역 ///////////
$(()=>{

    // 모든 a요소 기본이동막기
    $('a').click(e=>e.preventDefault());

    // 요구사항: 각 네비게이션 클릭시 페이지이동하기
    // 1. 대상선정 
    // 1-1. 로고링크 : .logo a
    const logo = $('.logo a');
    // 1-2. GNB 메뉴 : .gnb a
    const gnb = $('.gnb a');
    console.log('대상:',logo,gnb);

    // 2. 이벤트 설정 및 이동기능 구현하기
    // 2-1. 로고클릭시 홈이동
    logo.click(()=>location.href='index.html');

    // 2-2. gnb 메뉴 클릭시 카테고리 서브 이동
    gnb.click(e=>
        location.href='category.html?cat='+
        $(e.target).text().toLowerCase());
        // console.log($(e.target).text().toLowerCase()))

    // e.target -> 이벤트발생요소(a요소)
    // text() -> a요소 텍스트읽기
    // toLowerCase() -> 소문자전환
    // 참고) toUpperCase() -> 대문자전환




}); //////////// jQB ///////////////////