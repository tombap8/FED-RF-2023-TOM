// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 뷰엑스 스토어 JS 불러오기
import store from './store';
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 스토어 사용 등록!!!
  router, // 라우터 사용 등록!!!
  components: { App },
  template: '<App/>',
  // 뷰 인스턴스 생성 직후 호출코드구역
  created(){
    // 데이터 초기화 메서드 호출!
    store.commit('initSet');
  },
})
