// 어벤저스 JS - avengers.js

// 공통 DOM 선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);


window.addEventListener('wheel',(e)=>{
    // 기본기능 막기 : preventDefault()
    e.preventDefault();
    // 이벤트 호출확인
    console.log('휠~~~',e.wheelDelta);
    // event.wheelDelta 는 휠방향알림(마이너스 아랫방향)
    // 휠방향 분기
    // 페이지 이동하기 : scrollTo(x스크롤위치값,y스크롤위치값)
    window.scrollTo(0,window.innerHeight*(e.wheelDelta<0?1:0));
    // window.innerHeight*(e.wheelDelta<0?1:0)
    // 윈도우높이값 * 음수명 1곱하고 양수면 0곱함
    // 아랫방향은 윈도우높이값만큼 가고 윗방향은 위치값 0임!
},{passive:false});

// passive:false 설정값 변경을 해야
// window,document,body 이 세가지 중요객체에 대하여
// 막기설정을 할 수 있다!(모바일때문 passsive:true로 기본값 바뀜)

// 추가 : 위의 기능 자동 스크롤 이동시
// 유튜브 동영상 박스위에서 스크롤하면 자동스크롤 기능이 안됨!
// 따라서 유튜브 박스 영역에서 wheel하면 휠을 막아줘야함!
// 이벤트는 위로 전달되므로 (이벤트버블링) 이를 막아준다!
// 막는방법은 
// 그만해 stop!
// 전파를 propagation ->>> event.stopPropagation()
// qs('.trailer-box').addEventListener('wheel',
// function(e){
//     e.stopPropagation();
//     e.preventDefault();
//     console.log('하하');
// });

// 초기 데이터 셋팅하기
// 데이터 : 어벤저스 데이터 - data.js > character

// console.log(character);

// 어벤저스 캐릭터 박스 셋팅하기
// 1. 대상선정 : .avengers-box
const avengers = qs('.avengers-box');

console.log('대상:',avengers);

// 2. 데이터 자동 순회하여 태그만들기
// html코드 변수
let hcode = '';

// 주석순번
let num = 1;

for(let x in character){
    // 변수x는 객체의 속성이다!
    // 객체값은 객체변수[x]
    // console.log(x,'/',character[x]);

    // num 이 3이상일때는 .txt에 .right를 추가함!

    hcode += `
        <!-- ${num}. ${x} -->
        <div class="hero">
            <!-- 이미지 -->
            <img src="./ab_img/${character[x]['이미지명']}.png" alt="${x}">
            <!-- 소개글박스 -->
            <article class="txt${num>=3?' right':''}">
                <div>
                    <h3>${x}</h3>
                    <p>${character[x]['설명']}</p>
                </div>
            </article>
        </div>
    `;

    // 주석번호 증가
    num++;

} ///////// for in /////////////

// 생성된 html 확인
console.log(hcode);

// 3. 대상에 html 넣어 출력하기
avengers.innerHTML = hcode;

// 4. 로딩후 2초후 avengers박스에 클래스 on넣기
setTimeout(() => {
    avengers.classList.add('on');
}, 2000);

// 5. 타이틀 애니위해 한글자씩 싸기

// 대상: .t1
let mytit = qs('.t1');
let my_text = mytit.innerText;

// 글자담기변수
let tit_one = '';

// for of문으로 한글자씩 순회하기
for(let x of my_text){
    console.log(x);
    tit_one += `<span>${x}</span>`;
} ////////// for of //////////

console.log(tit_one);

// 다시 타이틀에 넣기
mytit.innerHTML = tit_one;

// 생성된 span요소 선택
let new_span = qsa('.t1 span');

// 셋팅된 span요소를 돌면서 하나씩 transition-delay시간
// 일정시간 간격으로 주기!
new_span.forEach((ele,idx)=>{
    ele.style.transitionDelay = (0.1*idx)+'s';
});

// 어벤저스 박스 나올때까지(5초) 기다린 후
// span 의 transform 변경하기
// + .hero 오버시 설정 적용되도록 어벤저스 박스에
// 클래스 active 넣기!
setTimeout(() => {
    // for(let x of new_span) 
    //     x.style.transform = 'translateY(0) scale(1)';
    // // console.log(x);
    mytit.classList.add('on');
    avengers.classList.add('active');
}, 5000);





 /************************************************* 
    [ 객체를 위한 for in 문 ]

    - 구문: 
    for(변수 in 객체){코드}

    - 작동원리:
    객체의 개수만큼 순서대로 속성명과 속성값을 가져옴

    - 변수는 객체의 속성명이다!

    - 객체의 값을 사용하려면 for in 문 안에
        객체[변수] 로 쓰면됨!

*************************************************/
