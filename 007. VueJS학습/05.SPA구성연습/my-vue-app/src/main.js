// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' 
//==> 뷰관련 모듈 불러오기
import App from './App' 
//==> src에 있는 App.vue 파일 불러오기(확장자생략가능)

Vue.config.productionTip = false 
//==> Vue앱이 처음실행될때 나오는 경고문을 출력할지 말지 여부
// (false는 출력안함)

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  //==> index.html의 뷰인스턴스 Root요소
  components: { App }, 
  //==> 컴포넌트 취합용 중간vue파일 이름
  template: '<App/>' 
  //==> 컴포넌트가 들어갈 사용자정의태그
})