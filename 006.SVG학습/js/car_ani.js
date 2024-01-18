// 자동차 광고 애니 JS

// 타임아웃 설정 공통 함수 //////
const setTime = (ele, time) => {
    setTimeout(() => {
      ele.addClass("anion");
    }, time);
  }; /////// setTime함수 ////////

// 애니메이션 실행 순서 대로 호출하기
// [1] 라인 애니 : 2초후호출(10초간작동,3초간사라짐)
setTime($('.spath'),2000);

// [2] 자동차 등장 및 작동애니 : 12초후 호출(6초작동)
setTime($('#mycar'),12000);

// [3] 로고 등장애니 : 15초후 호출
setTime($('#logo'),17000);