// 도깨비 PJ 메인 JS - main.js

// 로딩구역 호출설정
window.addEventListener('DOMContentLoaded',loadFn);

//// 로딩구역 함수 /////////////////
function loadFn(){
    // 로딩확인
    console.log('로딩완료!');

    // 부드러운 스크롤 적용
    startSS();

    // 부드러운 스크롤 때문에 마우스휠 이벤트막기가
    // 작동되어 캐릭터설명박스 작은 스크롤도 작동안됨!
    // 따라서 이벤트 버블링을 막아줘야함!
    // event.stopPropagation()
    // 이벤트 객체의 이벤트 버블링 막아주는 메서드임! 
    
    // 대상: .desc-box
    let desc_box = document.querySelectorAll('.desc-box');
    console.log(desc_box);

    // 모든 캐릭터 설명박스는 이벤트 버블링 막기!!!
    // -> 여기서 마우스휠 됨!!!
    desc_box.forEach(ele=>{ // ele - 요소자신
        ele.onwheel = e => e.stopPropagation();
    });

} ////////// loadFn함수 //////////////
//////////////////////////////////////