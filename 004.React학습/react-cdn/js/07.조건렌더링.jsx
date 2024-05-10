// 07.리액트 : 조건 렌더링  + 리스트 렌더링

/**************************************** 
    1. if문을 사용하여 조건부 렌더링하기
    - 리액트에서는 조건부로 구성요소를
    렌더링 할 수 있다!
****************************************/

// 선택적으로 로딩하도록 컴포넌트를 2개 만들기

// 1번 컴포넌트
function MakeDev() {
  return <h1>나는 개발자야!</h1>;
} ////////// MakeDev 컴포넌트 //////////

// 2번 컴포넌트
function LostDev() {
  return <h1>개발자가 뭐지?</h1>;
} ////////// MakeDev 컴포넌트 //////////

// 3번 컴포넌트 : 이미지생성
function MakeImg(props) {
  return <img src={props.isrc} alt={props.ialt} title={props.itit} />;
} ////////// MakeImg 컴포넌트 ////////////

// 출력 메인 컴포넌트 /////
// 셋팅할 변수 : isDev, isrc, ialt, itit
function Developer(props) {
  const isNow = props.isDev; //  true / false

  // 조건문
  if (isNow) {
    return (
      <React.Fragment>
        {/* MakeDev 컴포는트 선택출력 */}
        <MakeDev />
        <MakeImg isrc={props.isrc} ialt={props.ialt} itit={props.itit} />
      </React.Fragment>
    );
  } ////////// if ////////////

  // if문에 걸리면 그 안에서 return됨
  // 안걸리면 else문 없이도 여기 return됨!
  return (
    <React.Fragment>
      {/* MakeDev 컴포는트 선택출력 */}
      <LostDev />
      <MakeImg isrc={props.isrc} ialt={props.ialt} itit={props.itit} />
    </React.Fragment>
  );
} ////////// Developer 컴포넌트 /////////

// 이미지경로 배열
const devImg = [
  "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
  "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png",
];

// 컴포넌트 호출하기1 : 개발자찍기
ReactDOM.render(
  <Developer
    isDev={true}
    isrc={devImg[0]}
    ialt="개발자 공유"
    itit="프론트엔드 개발자 공유입니다!"
  />,
  document.querySelector("#root1")
);

// 컴포넌트 호출하기2 : 비개발자찍기
ReactDOM.render(
  <Developer
    isDev={false}
    isrc={devImg[1]}
    ialt="주먹왕 마동석"
    itit="개발자가 뭡니까?"
  />,
  document.querySelector("#root2")
);

/********************************************** 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
**********************************************/

// 개발자의 취향을 알아보자!!!

// 2-1. 제목을 찍기위한 타이틀 컴포넌트
function Title(props) {
  // 컴포넌트 호출시 tit를 셋팅함
  return <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {props.tit}</h1>;
} /////////// Title 컴포넌트 ///////////

// 음식리스트
const foods = ["스파게티", "짜파게티", "냉면", "짜장면", "마라탕"];
// [];

// 2-2. 반복리스트를 위한 컴포넌트 ////////
function FoodList(props) {
  // 음식명은 fname에 담아서 전달한다!
  return <li>개발자는 {props.fname} 좋아해!</li>;
} /////// FoodList 컴포넌트 /////////////

// 2-3. 개발자 선호 음식 리스트 출력 컴포넌트 //////
function WishList(props) {
  // wlist 속성에 담아서 보내준다!
  // 위시리스트 담기
  const myFood = props.wlist;
  // 코드리턴
  return (
    <React.Fragment>
      <Title tit="음식" />
      {/* 음식 위시리스트의 길이가 0보다 클때만 출력 */}
      {myFood.length > 0 && (
        <div>
          <h2>
            개발자가 좋아하는 음식은 모두
            {myFood.length}가지 입니다!
          </h2>
          <ul>
            {
              // 배열변수.map() 메서드 사용!
              // map(변수=>바로리턴컴포넌트)
              // 리액트 map()은 JS map()과 다름!
              // 맵쪼잉! 하지 않으니까~~!
              myFood.map((x) => (
                <FoodList fname={x} />
              ))
            }
          </ul>
        </div>
      )}
      {/* 다른 경우의 출력은 별도의 JSX출력
            중괄호 구역에 코딩한다! */}
      {myFood.length == 0 && (
        <h2>아직 개발자음식 리스트가 업데이트 되지 않았습니다!</h2>
      )}
    </React.Fragment>
  );
} ///////// WishList 컴포넌트 ///////////////

// 컴포넌트 출력하기 /////////
ReactDOM.render(<WishList wlist={foods} />, document.querySelector("#root3"));

/////// 3. 좀 더 복잡한 리스트를 출력하는 컴포넌트 ///////
// {year:"2020",mtit:"남산의 부장들",poster:"https://i.namu.wiki/i/d-g1xW3vvsfh71KCQIxl2es_i0wKyMJhkwEaXKdCgDAyhJVRb4vWA_TNnRHMksw0S6pK_nFrDITK2ISIJRuRpA.webp"},

// 전달할 배열변수 /////
const movs = [
  {
    year: "2021",
    mtit: "모가디슈",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%98%81%ED%99%94_%EB%AA%A8%EA%B0%80%EB%94%94%EC%8A%88.jpg",
  },
  {
    year: "2022",
    mtit: "범죄도시2",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/b/b9/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  },
  {
    year: "2023",
    mtit: "가디언즈 오브 갤럭시3",
    poster:
      "https://i.namu.wiki/i/qA_v1drdO1CusnMcmQVZDEGXEspqfuS0-sAHYUFExpgZMF_GSyCSrxSh-_IWua2lqD6GnNNlqw0hMvNzXYrefA.webp",
  },
  {
    year: "2024",
    mtit: "파묘",
    poster:
      "https://i.namu.wiki/i/EWdG2Jtlu36U1-03moAiO7Hmh1waKlbB0DIEvamksSTTzWCsqDXxUiiPSdcmpAQjh_tUFOwAGhR7LX7f6U0wXQ.webp",
  },
];
// const movs = [];

// 개발자가 좋아하는 영화 찍기 ////
// 컴포넌트를 구성하여 찍기 ///
/* 
    [ 출력형태 ]
    👨‍🔧개발자👩‍🔧가 좋아하는 영화
    개발자가 좋아하는 영화는 최근 3년간 아래와 같습니다!
    2021년도 영화1
    2022년도 영화2
    2023년도 영화3
    ... 여기는 영화포스트 나열하기 ...
*/

// 3-1. 제목을 찍기위한 타이틀 컴포넌트
// -> 2-1 컴포넌트 재사용~!

// 3-2. 반복리스트를 위한 컴포넌트 /////
function MovieList(props) {
  // year - 영화개봉년도 / mname - 영화명
  return (
    <li>
      {props.year}년도 {props.mname}
    </li>
  );
} /////////// MovieList 컴포넌트 //////////

// 3-3. 개발자 선호 영화 리스트 출력 컴포넌트 //////
function WishList2(props) {
  // 위시리스트 속성으로 담기
  const mymv = props.wlist;

  return (
    <React.Fragment>
      <Title tit="영화" />
      {/* 영화 위시리스트의 길이가 0보다 클때만 출력 */}
      {mymv.length > 0 && (
        <div>
          <h2>
            개발자가 좋아하는 영화는 최근 {mymv.length}년간 아래와 같습니다!
          </h2>
          <ul>
            {mymv.map((x) => (
              <MovieList year={x.year} mname={x.mtit} />
            ))}
          </ul>
        </div>
      )}
      {/* 다른 조건은 아랫쪽에 다른 중괄호안에 표현 */}
      {mymv.length == 0 && (
        <h2>아직 개발자 영화 리스트가 업데이트 되지 않았습니다!</h2>
      )}
    </React.Fragment>
  );
} ////////////// WishList2 컴포넌트 ////////////

// 3-4.개발자가 좋아하는 영화 출력하기
ReactDOM.render(<WishList2 wlist={movs} />, document.querySelector("#root4"));
// ReactDOM.render(어쩌구,저쩌구)

/********************************************************** 
    4. 조건 연산자(삼항연산자)를 사용하여 조건부 랜더링하기 
**********************************************************/
// 명화 데이터
const worksrc = {
  피카소:
    "https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
  모네: "https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg",
};

// 개발자가 좋아하는 그림(명화)찍기

// 4-1. 타이틀과 그림찍기 컴포넌트
// 구성: 작가이름 + 작품이미지
// 데이터 : 작가이름(painter),
//          이미지경로(작가이름의 객체 worksrc)
//          작품명(wname)
function MakeWork(props) {
  return (
    <div style={{backgroundColor:props.bgc?"pink":"lightblue"}}>
      <h2>{props.painter}</h2>
      <img
        src={worksrc[props.painter]}
        alt={props.wname}
        style={{ width: "400px" }}
        title={props.wname}
      />
    </div>
  );
} /////////////// MakeWork 컴포넌트 /////////////

// 4-2. 전체출력 컴포넌트 ///////////////
// 구성 : 전체타이틀(Title컴포넌트사용) + 변경버튼
//      + 작가와 그림출력(MakeWork컴포넌트)
// 특이사항 : 변경버튼 클릭시 MakeWork 컴포넌트의 데이터를
//          변경하여 다시 출력하도록 함!(Hook사용!)
function ExpComp(props) {
  // 작품변경 전달변수 : props.isChange
  // isChange의 값은 true / false
  // [일반변수]
  // let result = props.isChange;
  // [후크변수]
  const [result, setResult] = React.useState(props.isChange);
  // const [변수명,set변수명] = React.useState(초기값)
  // -> set변수명 : 변수명 첫글자는 대문자로!
  // useState() 메서드가 변수값이 업데이트 되는 여부를
  // 관리하여 변경시 이 변수를 사용하는 컴포넌트를
  //  자동으로!!!! 업데이트!!! 한!! 다!!!
  // 후크변수 업데이트는 set변수명(값) 형식으로 한다!

  // 변경버튼 호출 함수 //////
  const againFn = () => {
    // Not 연산자 !(느낌표)는 true/false를 반대로전환
    // [일반변수 업데이트]
    // result = !result;
    // [후크변수 업데이트]
    setResult(!result);

    console.log("다시변경해!", result);
    // 단순히 변수값만 변경한다고 해서
    // 이변수를 사용하는 컴포넌트를 변경할 수 없다!
    // 이런 변수의 상태를 관리하는 후크(Hook)를 사용하면
    // 이것을 반영할 수 있다!!!^^
  }; /////// againFn함수 ///////////////

  return (
    <React.Fragment>
      {/* 1. 큰제목 */}
      <Title tit="명화" />
      {/* 2. 변경버튼 : 클릭시 again함수를 호출함 */}
      <button onClick={againFn} 
      style={{
        backgroundColor:result?"red":"blue",
        color:result?"yellow":"aqua"
        }}>작가변경!!!</button>
      {/* 3. 작품출력 : 3항연산자로 작품변경하기
            result 변수를 후크변수로 셋팅하면
            컴포넌트가 이 변수의 값이 변경됨에 따라
            자동으로 재설정된다! */}
      {result ? (
        <MakeWork painter="피카소" wname="우는여인" bgc={result} />
      ) : (
        <MakeWork painter="모네" wname="양산을 쓴 여인" bgc={result} />
      )}
    </React.Fragment>
  );
} //////////// ExpComp 컴포넌트 ////////////

// 4-3. 개발자가 좋아하는 명화 출력하기 //////
ReactDOM.render(<ExpComp isChange={false} />, 
document.querySelector("#root5"));
// ReactDOM.render(어쩌구,저쩌구)

/********************************************************* 
    [ 리액트 훅크 : React Hook ]
    - 일반적으로 리액트에 사용되는 변수는 처음에 
    컴포넌트에 전달되어 초기 셋팅에 활용된다.
    그런데 이 변수가 변경될 경우 컴포넌트의 변경이
    자동적으로 이루어지지 않는다!
    이런 종류의 변수 업데이트가 가상돔과 실제돔에
    바로 반영되도록 실시간 감시역할을 하는
    리액트의 기술내용을 담고 있는 것이 후크다!

    1. 목적 : 어떤 특정 데이터가 변경될때
        이 데이터를 할당하여 사용하고 있는 컴포넌트의
        변경이 반영되도록 하고자 할때 후크를 사용한다!

    2. 구현방법:
        1) 노드JS SPA 개발환경에서는 상단에 import useState를 한다!
        -> CDN 에서는 React.useState 로 사용함!
        2) 코딩법 : useState() 메서드사용
            배열변수 = useState(초기값)
            (CDN) -> 배열변수 = React.useState(초기값)

            ((일반형))
            const [변수명,set변수명] = useState(초기값)
            -> set변수명 작성시 변수명 첫글자는 대문자로 씀
            예) 변수명 myname -> setMyname
            -> set변수명(값) : 메서드형태로 후크변수의 값을 셋팅함!

        3) 작동원리 
            - useState에 쓴 초기값이 배열변수 첫번째변수에 할당된다!
            - 코드에서 set변수명에 값을 할당하면
            useState메서드가 이것을 체크하여 이 변수를 사용한
            다른부분의 업데이트를 실행한다!
            예컨데 컴포넌트 내부에 사용한 경우 컴포넌트가 업데이트 됨!
        4) 사용결과
            - 별도의 메서드 호출없이 후크 상태변수를 사용한 곳이
            자동으로 변경될대마다 다시 갱신되는 것을 확인 할 수 있다!

        -> 뷰JS의 리액티브 데이터와 매우 유사함!

*****************************************************************/
