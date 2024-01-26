<template> 
<!-- ==> template 태그는 기본 템플릿 영역임! -->
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/> 
    <!-- ==> components폴더하위 vue 컴포넌트요소 -->
    <MyReal/>
    <!-- ==> components폴더하위 vue 컴포넌트요소 -->
  </div>
</template>

<script> 
// ==> 외부JS처럼 취급되므로 import,export모두 사용
import HelloWorld from './components/HelloWorld.vue'
import MyReal from './components/MyComp.vue'

export default {
  name: 'App', 
  // ==> main.js 파일의 <App/> 자리의 이름
  components: {
    HelloWorld, 
    // ==> 외부컴포넌트1
    MyReal,
    // ==> 외부컴포넌트2 (콤마로 계속추가 가능!)
  }
}
</script>

<style> 
/* <style scoped> */
/* ==> 전역 스타일시트 (scoped가 있으면 지역CSS) */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>