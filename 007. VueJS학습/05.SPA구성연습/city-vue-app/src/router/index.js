import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

// 라우터 템플릿 만들기
let Trip = {
  template: `<div class="trip router">World Trip</div>`,
};
let Foods = {
  template: `<div class="foods router">World Foods</div>`,
};

export default new Router({
  // 라우터 연결 옵션 셋팅하기
  // let routes = [{},{}]
  routes: [
    // 첫번째 루트
    {
      // router-link 의 to 속성값과 동일
      path: "/trip",
      // 연결할 컴포넌트
      component: Trip,
    },
    // 두번째 루트
    {
      // router-link 의 to 속성값과 동일
      path: "/foods",
      // 연결할 컴포넌트
      component: Foods,
    },
  ],
});
