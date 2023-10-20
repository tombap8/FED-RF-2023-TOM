// 01.공유신발 JSX
import myData from "./data.js";
import myData2 from "./data2.js";

// 두개의 데이터를 배열로 구성
const twoData = [myData, myData2];

// console.log('데이터:',twoData);

// 메인 컴포넌트 /////////////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!
function MainComponent() {


  // 데이터 변경호출 함수 //////////
  const chgData = () => {
    console.log('바꿔~!');
  }; //////// chgData함수 ///////////

  return (
    <React.Fragment>
      {/* 1. 타이틀 */}
      <h1 className="tit">공유가 신고 다닌다는!</h1>
      {/* 2. 내용박스 */}
      <section>
        <h2>공유는 오늘도 멋찝니다!</h2>
        {/* 이미지 */}
        <img src="./images/vans/gongyoo.jpg" alt="멋진공유" />
      </section>
      {/* 3. 데이터 변경 버튼 */}
      <button onClick={chgData} className="btn-gong">
        효진초이스 바로가기
      </button>
      {/* 4. 상품리스트박스 */}
      <div className="gwrap">
        <GoodsCode />
      </div>
    </React.Fragment>
  );
} /////////// MainComponent //////////////////

// console.log(myData);

// 상품 html코드 구성 컴포넌트 ///////////
function GoodsCode() {
  return myData.map((v) => (
    <ol class="glist">
      <li>
        <img src={"./images/vans/vans_"+v.idx+".jpg"} alt="신발" />
      </li>
      <li>{v.gname}</li>
      <li>가격 : {v.gprice}원</li>
    </ol>
  ));
} /////////// GoodsCode //////////////////

// 메인컴포넌트 출력하기 //////////
ReactDOM.render(<MainComponent />, 
document.querySelector("#root"));
