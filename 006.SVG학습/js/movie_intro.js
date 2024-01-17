// 영화 인트로 JS

// [1] 애니메이션 클래스 적용 대상

// 1. 라인애니
const lineAni = $('.stage');

// 2. 스틸컷 애니
const stcAni = $('#stc');

// 3. 로고애니
const logoAni = $('#mlogo');

// [2] 시차로 애니메이션 대상에 클래스 넣기
// 공통 적용 클래스명: anion

// 1. 2초후 라인애니
setTimeout(() => {
    lineAni.addClass('anion');
}, 2000);

// 2. 6초후 스틸컷애니
setTimeout(() => {
    stcAni.addClass('anion');
}, 6000);

// 3. 12초후 로고애니
setTimeout(() => {
    logoAni.addClass('anion');
}, 12000);