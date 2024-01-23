// 난다 사이트 구성 JS

// 1. 뷰 JS 인스턴스 생성하기 /////////
const vm = new Vue({
    // 1. 대상선정
    el: "#vue-app",
    // 대상은 꼭 아이디요소일 필요는 없다!
    // 클래스나 일반요소를 쓰면 첫번째 만나는요소에
    // 적용된다!

    // 2. 데이터 설정하기
    data: {
        // 2-1. 제목 데이터
        bigTit : 'Style NANDA',
        // 2-2. 로고 태그정보
        logo: `<img src="./images/logo_3ce.png" alt="nanda logo">`,

    }, //// data /////

}); //////// Vue 인스턴스 설정 /////////
