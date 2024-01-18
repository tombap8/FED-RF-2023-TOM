// 3D 태양계 JS - solar3d.js /////

/**************************************** 
    [ 구현내용 ]
    - 축소확대 버튼 클릭시 표기된 배율만큼
    태양계전체를 축소/확대 적용한다!
    - 이때 클릭된 메뉴는 오버시 변경색을
    유지한다!
****************************************/

// 1.대상선정:
// (1) 이벤트 대상: 축소 확대 메뉴 a요소들 -> .tit2 a
const menu = $('.tit2 a');

// (2) 변경대상 : 태양계 전체를 싸고 있는 부모요소 -> .scale-box
const scaleBox = $('.scale-box');

// 2. 이벤트 함수 셋팅하기
menu.on('click',function(){
    // 1. 배율 속성값 읽어오기 : data-num
    let scaleNum = $(this).attr('data-num');
    console.log('배율:',scaleNum);

    // 2. 배율적용하기
    scaleBox.css({transform:`scale(${scaleNum})`});

    // 3. 클릭된 메뉴에 클래스'on'넣기
    // 나머지는 빼기
    $(this).addClass('on')
    .siblings().removeClass('on');

}); ///////// click ////////////
