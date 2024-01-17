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


/* 오디오 컨트롤 하기 */
// 대상:  .play-box
$('.play-box').hover(
    function(){ // over
        console.log('오버야!');
        // 오버시 진한 이미지로 변경

        // 기존값 읽어오기
        let csrc = $('img',this).attr('src');

        // 경로에서 '.png' 를 '-1.png' 로 변경
        $('img',this)
        .attr('src',csrc.replace('.png','-1.png'));
    },
    function(){ // out
        console.log('아웃이야!');
        
        // 기존값 읽어오기
        let csrc = $('img',this).attr('src');

        // 경로에서 '.png' 를 '-1.png' 로 변경
        $('img',this)
        .attr('src',csrc.replace('-1.png','.png'));

    }) /////////// hover /////////
    // 클릭시 이미지 변경하기 + 오디오 재생/멈춤하기
    .on('click',function(){
        
        // 1.오디오요소 : 제이쿼리는 get(0)으로 요소를 선택
        const myAudio = $('.my-audio').get(0);
        
        // 2.현재 오디오 멈춤여부 알아오기
        let isPaused = myAudio.paused;
        console.log('멈췄니?',isPaused);

        // paused 는 오디오/비디오 멈춤여부를 리턴함
        // 멈춤상태명 true / 재생상태면 false

        // 3.분기하여 처리하기
        // (1) 멈춤상태면 재생하기
        if(isPaused){
            // 재생하기
            myAudio.play();

        } ////// if /////////
        // (2) 재생상태면 멈추기
        else{
            // 멈추기
            myAudio.pause();

        } /////// else ////////




    }); //////// click ///////////