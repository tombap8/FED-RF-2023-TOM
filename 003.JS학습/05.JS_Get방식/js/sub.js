// JS 페이지간 데이터 전달하기 : 서브페이지 JS - sub.js

// 넘어온 URL 파라미터값 받기
// location.href를 오른쪽에 쓰면 상단의 URL값을 읽어온다!
let pm = location.href;

// ?(물음표) 로 잘라서 뒤엣것!
// split(자를기준문자열) -> 배열데이터가 됨!
pm = pm.split('?')[1];

// =(이퀄) 로 잘라서 뒤엣것!
// pm = decodeURIComponent(pm.split('=')[1]);
console.log('URL:',pm);