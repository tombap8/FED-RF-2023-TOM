// 03.JSX 특성 알아보기

/***************************************************** 
    [ JSX란 무엇인가? ]
    - Javascript XML을 나타냄
    - 리액트에서 HTML을 쉽게 작성할 수 있다.
    - appendChild() 메서드 없이 DOM에 요소넣기가 가능함!
*****************************************************/

// 1. JSX를 사용한 것과 JSX를 사용하지 않은 것을 비교 /////
// (1) JSX를 사용한 예 //////
// (1-1) 넣을 요소 만들기
const myEle1 = <h1>나는 JSX를 사용하고 있어!</h1>;
// (1-2) 리액트 루트 선택하기 : createRoot() 메서드 사용!
const root1 = ReactDOM.createRoot(
    document.querySelectorAll('#root>div')[0]);
// (1-3) 요소 출력하기 : 
// 생성된 루트에 render() 메서드를 붙여서 사용
root1.render(myEle1);

// (2) JSX를 사용하지 않는 방법 ////////////
// -> 넣을 요소를 createElement() 메서드로 생성해야함!(JSX를 안씀!)
const myEle2 = React.createElement(
    "h1",{},"나는 JSX를 쓰지 않다!");
// createElement(요소명,{JS코드작성},요소내용)

// 두번째에 출력하기 //////
ReactDOM.render(
    myEle2, document.querySelectorAll('#root>div')[1]);