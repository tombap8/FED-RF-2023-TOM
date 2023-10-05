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


/***************************************************** 
    [ 출력방식 정리! ]
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할요소,대상요소)

    2. 따로쓰기
        1) 생성변수 = ReactDOM.createRoot(대상요소)
        2) 생성변수.render(출력할요소)

    _____________________________________________

    [ JSX 를 사용하거나 사용하지 않는 경우 ]
    -> 개발자의 선택사항이다!
    -> JSX는 ES6 기반의 자바스크립트 언어의 확장이며
    런타임시 일반 자바스크립트로 변환된다!

    ______________________________________________

    [ JSX 표현식 ]
    JSX를 사용하면 중괄호에 표현식을 작성할 수 있다
    {........ 표현식 ........}

    -> 표현식이란 React변수, 속성, JS문법 등의 내용임

*****************************************************/

// 표현식에 쓸 변수
let num1 = 1000, num2 = 7;

// 3. JSX 표현식 사용하기 /////////////////
const myEle3 = <h1>리액트는 {num1*num2}번 사용해도 좋다!</h1>


// 세번째에 출력하기 //////
ReactDOM.render(
    myEle3, document.querySelectorAll('#root>div')[2]);
