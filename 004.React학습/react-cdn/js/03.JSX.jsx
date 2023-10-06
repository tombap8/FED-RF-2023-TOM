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


// 4. 다중요소 html 블록 삽입하기 /////////////
const myEle4 = (
    <React.Fragment>
        <h2>[ 다중요소 HTML 블록출력하기 ]</h2>
        <ul>
            <li>프론트엔드</li>
            <li>리액트적용개발</li>
            <li>플러터까지사용</li>
        </ul>
    </React.Fragment>
);


// 네번째에 출력하기 //////
ReactDOM.render(
    myEle4, document.querySelectorAll('#root>div')[3]);

/***************************************************** 
    [ JSX 태그요소 작성시 여러줄일 경우 ]
    1. 최상위를 하나 만들고 여러요소를 작성한다!
    2. 소괄호로 전체를 싸준다!(소괄호생략가능!)

    - 지원되는 스타일:
    1) <>태그들</>
    2) <Fragment>태그들</Fragment>
    3) <기존태그>태그들</기존태그>

    -> 1),2)번은 CDN방식에서는 지원안함!(설치형SPA지원!)
    -> 2)번 CDN에서 사용하려면 아래와 같이 사용한다!
        <React.Fragment></React.Fragment>
    -> 1),2)번을 사용하는 이유는 쓸때 없는 태그삽입을 막는데있다!
    -> 기존태그는 <div>,<section> 등 원래있는 html태그를 말함
        (단점, 원하는 않는 태그가 삽입됨!!!)
*****************************************************/


// 5. 내가 원하는 태그 출력해보기 ////////////

// 기본 데이터(배열)
const mydata = [
    {idx:1,name:"김수현",movie:"언제왔니"},
    {idx:2,name:"장우혁",movie:"형님,형~~~님"},
    {idx:3,name:"김혜수",movie:"내가쎈언니야"},
];

// 출력형식:
// <li>배우명 : 영화명</li>
// 배열변수.map() 을 사용하자! -> 여기서도 맵쬬잉! 인가???
// -> JS map()과는 다른 별도의 출력처리가 이루어짐!
// 결론: map() 만 사용하여 바로 출력가능~!


const myEle5 = (
    <React.Fragment>
        <h2>[ 배우리스트 ]</h2>
        <ul>
            {
            mydata.map(v=>
                <li>
                    {v.name} : 
                    {v.movie} : 
                    {v.idx==3?"예뻐!♥":"멋쪄!♠"}
                </li>
                )
            }
        </ul>
    </React.Fragment>
);


// 다섯번째에 출력하기 //////
ReactDOM.render(
    myEle5, document.querySelectorAll('#root>div')[4]);


/***************************************************** 
    [ JSX는 홀로태그라도 끝에 닫기를 해줘야한다! ]
    예) <br> -> <br />
        <input type="text"> -> <input type="text" />
*****************************************************/

// 6. 홀로태그 출력해 보기
const myEle6 = <input type="text" value="홀로태그는 스스로 닫아라!" />;



// 여섯번째에 출력하기 //////
ReactDOM.render(
    myEle6, document.querySelectorAll('#root>div')[5]);


