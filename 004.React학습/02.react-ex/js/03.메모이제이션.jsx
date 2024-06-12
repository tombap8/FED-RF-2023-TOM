// 03.메모이제이션 : useMemo


function App() {
  console.log("리랜더링!!!");
  // 점수관련 후크변수
  const [score, setScore] = React.useState(0);
  // 국적관련 후크변수
  const [isKor, setIsKor] = React.useState(true);

  // 국적표시 객체
  // 그냥 일반적인 객체로 만들면 리랜더링시
  // 변수의 주소가 업데이트됨!
  // -> 이것이 useEffect에서 변경으로 인식!
  // const nara = {
  //   country: isKor ? "한국" : "일본",
  // };

  // 해결방안: useMemo()!!! ///////////////////
  const nara = React.useMemo(() => {
    // useMemo함수 내부에서 원래 객체를 리턴함!
    return {
      country: isKor ? "한국" : "일본",
    };
  }, [isKor]); //-> isKor에 의존성을 심어준다!

  // 랜더링 상태관리(useEffect) : nara 데이터 변경시
  // -> nara객체는 isKor 후크변수와 연결됨!
  // 현재 증상: nara는 isKor에 연결되었으나
  // score에는 연결되어 있지 않음! 그런데 왜? nara에
  // 변경을 관리하는 useEffect에 걸리는 걸까???
  React.useEffect(() => {
    console.log("nara가 변경됨!!!");
    // 축구선수이미지 중 해당 나라 이미지가 위로 올라옴
    $("img")
      .eq(isKor ? 1 : 0) // isKor이 1이면 '손흥민' 즉, 1번째
      .animate({ bottom: "+=50px" }, 300);
  }, [nara]); ///////// useEffect ////////////////

  /******************************************************** 
    [흔하면서도 재미있는 현상!!!]
    useEffect의 의존성 배열에 nara를 넣었는데 
    score의 state를 변경해도 useEffect가 실행된다.
    그 이유는 자바스크립트에서 객체는 원시 타입과는 
    다르게 값이 저장될 때 주소 값으로 저장되기 때문이다.
    그렇기 때문에 리액트에선 score의 state가 바뀌면 
    App 컴포넌트가 재호출되면서 nara의 
    <<주소값이 변경>>이 되었기 때문에 nara가 
    변경이 되었다고 인식을 한다.

    여기서도 useMemo 훅을 통해 이를 방지할 수 있다.
    -> 방지의 원리는 의존성을 심어서 실제로 변경되는 데이터를
    특정하여 정확한 반영을 위해 기존데이터를 재사용해준다!
  ********************************************************/

  // 코드리턴 ///////////
  return (
    <header className="header" style={{ textAlign: "center" }}>
      <h1>
        <ShowTit/>
        <br />
        {isKor ? "한국이" : "일본이"} 몇점 차로 승리를 예측합니까?
      </h1>
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        style={{ fontSize: "40px", textAlign: "center" }}
      />

      <hr />

      <h1>당신은 어느나라 사람입니까?</h1>
      <h2 style={{ fontSize: "40px" }}>{nara.country}사람</h2>
      {/* 국적변경버튼 */}
      <button
        onClick={() => {
          // 한국사람여부 반대로 넣기
          setIsKor(!isKor);
          // 점수차 초기화
          setScore(0);
        }}
        style={{ fontSize: "40px" }}
      >
        국적변경하기
      </button>
      {/* 다나카 */}
      <img
        src="https://i.namu.wiki/i/fNSwm2U4hvUad455bOoiJsczNZDdOmZ3Kl7qUkCGzdMt7ckJB-LRnO7PXPUjWF7ADTuYS9vaTZKsnSNajizvWw.webp"
        style={{
          height: "300px",
          position: "fixed",
          bottom: "-100px",
          left: "5vw",
          borderRadius: "50%",
          border: "10px double lightblue",
        }}
      />
      {/* 손흥민 */}
      <img
        src="https://image.kmib.co.kr/online_image/2021/0105/202101050405_12120924172594_1.jpg"
        style={{
          height: "300px",
          position: "fixed",
          bottom: "-100px",
          right: "5vw",
          borderRadius: "50%",
          border: "10px double orangered",
        }}
      />
    </header>
  );
} /////////// App 컴포넌트 ///////////////



const ShowTit = React.memo(()=>{
  console.log("ShowTit 재실행!");
  return(<h1>한국과 일본이 축구를 하고 있습니다!</h1>);
});


// 출력하기 /////////
ReactDOM.render(<App />, document.querySelector("#root"));
