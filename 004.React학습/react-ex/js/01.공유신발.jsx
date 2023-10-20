// 01.공유신발 JSX
import data from "./data.js";
import myData from "./data.js";
import myData2 from "./data2.js";

// 두개의 데이터를 배열로 구성
const twoData = [myData, myData2];

// console.log('데이터:',twoData);

// 메인 컴포넌트 /////////////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!
function MainComponent() {

  // 상태관리 메서드를 사용하여 후크변수를 설정하자!
  // const [변수명,set변수명] = React.useState(초기값)
  // dataNum은 데이터를 구분하는 번호저장 후크변수다!
  // 데이터 구분값으로 배열순번을 생각하여 처음에 로딩될
  // 데이터가 0번째 즉, 첫번째 배열순번 데이터를 불러올
  // 순번값을 셋팅함!
  const [dataNum,setDataNum] = React.useState(0);

  console.log('최초값:',dataNum);


  // 데이터 변경호출 함수 //////////
  const chgData = () => {
    console.log('바꿔~!');
    // 데이터 키 후크변수를 업데이트함
    setDataNum(dataNum?0:1);
    console.log('업데이트값:',dataNum);
  }; //////// chgData함수 ///////////

  return (
    <React.Fragment>
      {/* 1. 타이틀 */}
      <h1 className="tit">{
      dataNum?'효진이 입고':'공유가 신고'} 다닌다는!</h1>
      {/* 2. 내용박스 */}
      <section>
        <h2>{
        dataNum?'효진은 오늘도 쨍~합니다!':
        '공유는 오늘도 멋찝니다!'}</h2>
        {/* 이미지 */}
        <img src={dataNum?
        "./images/gallery/hyo.jpg":
          "./images/vans/gongyoo.jpg"} 
          alt={dataNum?"엘레강스한 효진":"멋진공유"} />
      </section>
      {/* 3. 데이터 변경 버튼 */}
      <button onClick={chgData} className="btn-gong">
        {dataNum?'공유':'효진'}초이스 바로가기
      </button>
      {/* 4. 상품리스트박스 */}
      <div className="gwrap">
        <GoodsCode idx={dataNum} />
      </div>
    </React.Fragment>
  );
} /////////// MainComponent //////////////////

// console.log(myData);

// 서브 컴포넌트(자식컴포넌트-> 부모컴포넌트로 부터 데이터를
// props 속성을 통하여 전달받는다!)
// 상품 html코드 구성 컴포넌트 ///////////
function GoodsCode(props) { // idx - 데이터 배열순번
  // 선택데이터
  const selData = twoData[props.idx];
  return selData.map((v) => (
    <ol class="glist">
      <li>
        <img src={
          props.idx?
          "./images/gallery/"+v.idx+".jpg":
          "./images/vans/vans_"+v.idx+".jpg"
          } alt={props.idx?"드레스":"신발"} />
      </li>
      <li>{v.gname}</li>
      <li>가격 : {v.gprice}원</li>
    </ol>
  ));
} /////////// GoodsCode //////////////////

// 메인컴포넌트 출력하기 //////////
ReactDOM.render(<MainComponent />, 
document.querySelector("#root"));
