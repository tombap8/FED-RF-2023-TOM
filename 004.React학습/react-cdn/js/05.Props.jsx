// 05.리액트 Props

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/  
// 자기차를 소개하는 컴포넌트1 /////////////////
function Car(props){
    // 일반함수에서는 전달변수를 여러개 썼으나
    // 컴포넌트에서는 전달하는 props 하나로 여러개 사용가능!
    // 사용법 : props.속성명
    // 컴포넌트에서 미리 세부속성명을 정하여 호출하는 곳에서
    // 같은 이름의 속성명으로 값을 담아 보내준다!
    return(
        <React.Fragment>
            <h2>나의 차는 {props.brand}입니다!</h2>
        </React.Fragment>
    )

} ///////// Car 컴포넌트 ////////////////////

/// 자동차 상세정보 출력 컴포넌트 //////////////
function Detail(props){
    return (
        <React.Fragment>
            <h2>
                모델명은 {props.brand.model}이고
                차색은 {props.brand.color}입니다!
            </h2>
            {/* 이미지 출력
                인라인 스타일시트 넣기형식:
                <태그 style={{객체형식CSS}}
                -> 값은 문자형으로 셋팅함! {속성:값}
            */}
            <img src="./images/ray.png" alt="기아레이" style={props.brand.opt} />
        </React.Fragment>
    );

} ////////// Detail 컴포넌트 /////////////////


// 전체 자동차 브랜드 소개 컴포넌트 //////////////
function Brand(props){
    return(
        <React.Fragment>
            <h1>당신의 차는 무슨차죠?</h1>
            <Car brand="기아레이" />
            {/* 다른컴포넌트 호출 */}
        </React.Fragment>
    );

} /////////// Brand 컴포넌트 ///////////////////

// 추가질문으로 자동차 정보를 자세히 기술하는 컴포넌트 //////
function AskMore(props){ // props.num 배열데이터 순번값 

    // 컴포넌트에서 사용할 변수를
    // 다른 컴포넌트에서도 사용할 경우 컴포넌트 바깥쪽
    // 전역구역에 코드를 넣는다!

    // 옵션 배열변수 셋팅
    const carInfo = [
        {
            color:"라잇블루",
            model:"2023년형",
            opt:{filter:'hue-rotate(0deg)'}
        },
        {
            color:"럭셔리와인",
            model:"2025년형",
            opt:{filter:'hue-rotate(109deg)',transform:'rotateY(180deg)'}
        },
        {
            color:"녹차그린",
            model:"2024년형",
            opt:{filter:'hue-rotate(215deg)'}
        },
    ];

    return(
        <React.Fragment>
            <h1>더 자세히 말씀해주세요?!</h1>
            <Detail brand={carInfo[props.num]} />
        </React.Fragment>
    );

} ////////// AskMore 컴포넌트 //////////////////////

// 랜더링 하기 ////////////////////
ReactDOM.render(
    <div>
        <Brand />
        <AskMore num="0" />
        <AskMore num="2" />
        <AskMore num="1" />
    </div>
    ,document.querySelector('#root1'));
// ReactDOM.render(어쩌구,저쩌구);
// 어쩌구를 저쩌구에 출력해라!

