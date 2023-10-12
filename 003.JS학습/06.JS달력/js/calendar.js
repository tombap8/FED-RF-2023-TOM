// 달력구현 JS - calendar.js ////////////

// DOM 메서드 //////
const dFn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
}; ///////// dFn 객체 //////////

// 달력함수 호출
makeDallyeok();

function makeDallyeok(){
    dFn.cg('달력만들어!');

    

} /////////////// makeDallyeok함수 ////////////