// 03.메모이제이션 : useMemo

function App(){
    // 점수관련 후크변수
    const [score, setScore] = React.useState(0);
    // 국적관련 후크변수
    const [isKor,setIsKor] = React.useState(true);

} /////////// App 컴포넌트 ///////////////


// 출력하기 /////////
ReactDOM.render(<App />,
document.querySelector('#root'));