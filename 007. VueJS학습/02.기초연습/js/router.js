// 뷰라우터 인스턴스 설정파일 - router.js

// 라우터 템플릿 만들기
let Trip = {
    template: `<div class="trip router">World Trip</div>`,
};
let Foods = {
    template: `
    <div v-bind:class="
        'foods router '+this.$route.params.cls
    ">
        World Foods {{ this.$route.params.item }}
    </div>`,
};