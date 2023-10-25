// 보그 PJ 링크 시스템 JS - linksys.js

// 제이쿼리 로드 구역 ///////////
$(()=>{
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
        console.log($(e.target).text().toLowerCase()))
        // location.href='category.html?cat='+)



}); //////////// jQB ///////////////////