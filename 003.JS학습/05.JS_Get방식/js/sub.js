// JS 페이지간 데이터 전달하기 : 서브페이지 JS - sub.js

// 넘어온 URL 파라미터값 받기
// location.href를 오른쪽에 쓰면 상단의 URL값을 읽어온다!
let pm = location.href;

// 기본 Get방식 파라미터의 물음표시그널이 있는지 확인하여
// 없으면 자르기전에 첫 페이지로 돌려보낸다!
// indexOf('?') -> 물음표 문자열의 순번리턴
// 찾는문자열이 없으면 -1리턴함 -> 이것으로 존재유무 판별함
if(pm.indexOf('?')==-1){
    alert('올바른 접근이 아닙니다!');
    // 없으면 첫페이지로 돌아가라!
    location.href = 'Get01.html';
}
// console.log(pm.indexOf('?'));

// ?(물음표) 로 잘라서 뒤엣것!
// split(자를기준문자열) -> 배열데이터가 됨!
pm = pm.split('?')[1];

// =(이퀄) 로 잘라서 뒤엣것!
pm = pm.split('=')[1];

// 인코딩 처리된 문자열 디코딩하기!
pm = decodeURIComponent(pm);

console.log('전달값:',pm);


/// 데이터 셋업하기! //////
let sdata = {
    레드샵: {
        배경색: "red",
        이미지: "shop_red.jpg",
    },
    오렌지샵: {
        배경색: "orange",
        이미지: "shop_orange.jpg",
    },
    블루샵: {
        배경색: "blue",
        이미지: "shop_blue.jpg",
    },
    블랙샵: {
        배경색: "black",
        이미지: "shop_black.jpg",
    },
    그린샵: {
        배경색: "green",
        이미지: "shop_green.jpg",
    },
}; ///////// sdata객체 /////////////

console.log('매칭data:',sdata[pm])

// 데이터 매칭하여 페이지 데이터 구성하기 ///////
// 1. 대상선정 : #title, #main
const title = document.querySelector("#title");
const main = document.querySelector("#main");

// 2. 변경반영하기
// 2-1. 타이틀 넣기
title.innerText = pm;

// 2-2. 타이틀 배경색 넣기
title.style.backgroundColor = sdata[pm].배경색;

// 2-3. 메인 배경이미지 변경하기
main.style.backgroundImage = `url(images/${sdata[pm].이미지})`;