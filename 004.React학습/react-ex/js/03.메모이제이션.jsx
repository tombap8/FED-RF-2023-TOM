// 03.메모이제이션 : useMemo

function App() {
  // 점수관련 후크변수
  const [score, setScore] = React.useState(0);
  // 국적관련 후크변수
  const [isKor, setIsKor] = React.useState(true);

  // 국적표시 객체
  const nara = {
    country: isKor ? "한국" : "일본",
  };

  // 랜더링 상태관리(useEffect) : nara 데이터 변경시
  // -> nara객체는 isKor 후크변수와 연결됨!
  React.useEffect(()=>{
    console.log('nara가 변경됨!!!');
    // 축구선수이미지 중 해당 나라 이미지가 위로 올라옴
    $('img')
    .eq(isKor?1:0) // isKor이 1이면 '손흥민' 즉, 1번째
    .animate({bottom:"+=50px"},300);

  },[nara]); ///////// useEffect ////////////////


  // 코드리턴 ///////////
  return (
    <header className="header" style={{ textAlign: "center" }}>
      <h1>
        한국과 일본이 축구를 하고 있습니다!
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
        src="https://i.namu.wiki/i/_7clMYRh4lQpmab_9mRbYqcaytIydOj40IGAOjOwRW4Z2v3RbRXh00Hq5NIMwHSXA9BCFfvKZXE85JtokIyw0KRdLIoBzT9TOli_OwQ2uDBFYomQRR3DqO8DcULZ_Y8s5GmVhX9TcoL1DgvmBwfMVQ.webp"
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
        src="https://i.namu.wiki/i/6IbJUlvAY5g8I1eD5dMFYEpaUajLlz4kZjS0vf86ssahkMsrRXDwiDujI-4tt4OqHGDLt3BbSXxxiawyDXf2tCKUBz-Vmsv9C8ZsXBNEXKkBO6zJEhlAPqodPsAsl5vh9DgcodJPjLZt6dPvFA4gnA.webp"
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

// 출력하기 /////////
ReactDOM.render(<App />, document.querySelector("#root"));
