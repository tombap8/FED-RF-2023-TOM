// 01.공유신발 JSX
import data from "./data.js";
import myData from "./data.js";
import myData2 from "./data2.js";

// JS 기능함수 : 순수 JS함수호출임!
import { initFn,firstOneFn } from "./act_effect.js";

// 두개의 데이터를 배열로 구성
const twoData = [myData, myData2];

// console.log('데이터:',twoData);

// [ 메인 컴포넌트 ] /////////////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!
function MainComponent() {

  // 상태관리 메서드를 사용하여 후크변수를 설정하자!
  // const [변수명,set변수명] = React.useState(초기값)
  // dataNum은 데이터를 구분하는 번호저장 후크변수다!
  // 데이터 구분값으로 배열순번을 생각하여 처음에 로딩될
  // 데이터가 0번째 즉, 첫번째 배열순번 데이터를 불러올

  // [ 후크 상태관리 변수 셋팅 ] //////////////////
  // 1. 데이터 순번값을 셋팅함!
  const [dataNum,setDataNum] = React.useState(0);
  // 2. 리스트/상세보기 상태관리변수
  const [subView,setSubView] = React.useState(0);
  /////////////////////////////////////////////////
  
  // 테스트 후크상태변수
  const [test,setTest] = React.useState(0);

  console.log('최초값:',dataNum);

  // 가상돔에서 실제돔에 반영후 DOM에 구현할
  // JS코드는 어디에 넣어야 하는가?
  // ->>> useEffect()
  // ->>> useLayoutEffect()

  console.log('컴포넌트 그냥구역:',
    document.querySelector('.img-box'));

    ////////////////////////////////////////////////
    // [ 리액트 컴포넌트 렌더링 후 실행함수 호출하기 ]
    ///////////////////////////////////////////////////

    // [ 1. 컴포넌트가 뿌려지기 애니메이션 적용하기 ]
    React.useLayoutEffect(initFn);

    // [ 2. 처음 한번만 타이틀 글자 커졌다가 작아지기 ]
    React.useEffect(firstOneFn,[])
    ////////////////////////////////////////////////////


    
    // [ useEffect 테스트 코드 ] //////////    
    // 순수 useEffect
    // -> 매번 업데이트 시에도 실행함
    React.useEffect(()=>{
      console.log('useEffect 순수');
      // console.log('useEffect순수 구역 JS:',
      //   document.querySelector('.img-box'));
      // console.log('useEffect순수 구역 제이쿼리:',
      //   $('.img-box'));      
    });

    // 빈 배열옵션 useEffect ///////
    // -> 페이지로딩후 단 한번만 실행함!
    React.useEffect(()=>{
      console.log('useEffect 빈 배열옵션');
    },[]);
      
    // 의존성 배열옵션 useEffect
    // -> 페이지로딩후 단 한번만 실행함!
    React.useEffect(()=>{
      console.log('useEffect 의존성 배열옵션 test');
    },[test]);

    React.useEffect(()=>{
      console.log('useEffect 의존성 배열옵션 dataNum');
    },[dataNum]);
    // 의존성이 다수일 경우 [] 배열형태의 옵션에
    // 콤마로 연결하여 등록해준다!
      
    // 랜더링 후 화면출력전 상태
    React.useLayoutEffect(()=>{
      console.log('useLayoutEffect 구역 JS:');
      // 버튼을 display:none
      // $('.btn-gong').hide();
  });

  // 의존성 테스트 함수 /////
  const testFn = () => {
    setTest(test?0:1);
    console.log('test 후크변수 변경!',test);
  }; //////// testFn함수 ////////////

  /*********************************** 
    함수명: chgData
    상태변수: dataNum / setDataNum
    기능: 상태관리변수 중 데이터선택번호
    업데이트를 하여 화면의 상품리스트를
    업데이트 한다!
  ***********************************/
  // 데이터 변경호출 함수 //////////
  const chgData = () => {
    console.log('바꿔~!');
    // 데이터 키 후크변수를 업데이트함
    setDataNum(dataNum?0:1);
    console.log('업데이트값:',dataNum);
  }; //////// chgData함수 ///////////

  /**************************************** 
    함수명: chgSubView
    상태변수: subView / setSubView
    기능: 상태관리변수 중 리스트/상세보기
    선택변수를 업데이트하여 실제뷰를 전환함
  ****************************************/
 const chgSubView = (num) => {
  console.log('뷰바꿔!',num);
  // 리스트/상세보기 뷰 상태관리변수 변경하기
  setSubView(num);

 }; /////////// chgSubView ///////////////

  // 최종 리턴 코드 //////////////////////////
  // 함수, 변수, 구현소스는 모두 return위쪽에 코딩!
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
        <div className="img-box">
          <img src={dataNum?
          "./images/gallery/hyo.jpg":
            "./images/vans/gongyoo.jpg"} 
            alt={dataNum?"엘레강스한 효진":"멋진공유"} />
        </div>
      </section>
      {/* 3. 데이터 변경 버튼 */}
      <button onClick={chgData} className="btn-gong">
        {dataNum?'공유':'효진'}초이스 바로가기
      </button>
      <button onClick={testFn} >의존성테스트</button>
      {/***************************** 
        4. 상품리스트박스 
        상태관리변수를 생성하여 
        리스트/상세보기를 전환한다!
      *****************************/}
      <div className="gwrap">        
        { // 상품리스트 컴포넌트 출력
        subView==0 &&
          <GoodsCode idx={dataNum} chgFn={chgSubView} />}
        { // 상품상세보기 컴포넌트 출력
        // 부모의 함수 chgSubView를 props로 전달함!
        // 변수명에 할당하는 방식으로 전달!
        // 자식컴포넌트는 props.속성명() 방식으로 호출!
        subView==1 &&
          <SubViewCode idx={dataNum} chgFn={chgSubView} />}        
      </div>
    </React.Fragment>
  );
} /////////// MainComponent //////////////////

// console.log(myData);

// 서브 컴포넌트(자식컴포넌트 
// ->부모컴포넌트로 부터 데이터를
// props 속성을 통하여 전달받는다!)

/************************************
 * 서브컴포넌트 1 : GoodsCode
 * 상품리스트 html코드 구성 컴포넌트
************************************/
function GoodsCode(props) { // idx - 데이터 배열순번
  // 선택데이터
  const selData = twoData[props.idx];

  // 코드 리턴파트 //////////
  return selData.map((v) => (
    <a href="#" onClick={()=>props.chgFn(1)}>
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
    </ol></a>
  ));
} /////////// GoodsCode //////////////////

/************************************
 * 서브컴포넌트 2 : SubViewCode
 * 상품상세보기 html코드 구성 컴포넌트
************************************/
function SubViewCode(props){
  // props.idx - 선택데이터 순번(신발/드레스)
  // props.chgFn() 함수로 사용가능!
  // ->부모 chgSubView()함수를 호출하는 것임!
  // -> 프롭스 다운, 프롭스 펑션 업/다운
  // 선택데이터 //////////////////
  const selData = twoData[props.idx][0];
  // -> 전체선택배열[특정배열값순번]

  // 코드 리턴파트 //////////
  return(
    <ol>
      <li>
        <img src={
          props.idx?
          "./images/gallery/"+selData.idx+".jpg":
          "./images/vans/vans_"+selData.idx+".jpg"
          } alt={props.idx?"드레스":"신발"} />
      </li>
      <li>
        상품명 : {selData.gname} <br />
        가격 : {selData.gprice}원 <br />
        <button onClick={()=>props.chgFn(0)}>
          리스트로 가기</button>
      </li>
    </ol>
  );

} ////////// SubViewCode /////////////




// 메인컴포넌트 출력하기 //////////
ReactDOM.render(<MainComponent />, 
document.querySelector("#root"));
