// 보그 PJ 카테고리 페이지 JS - category.js

// 카테고리 컨텍스트 API 파일 불러오기 ///
import { catContext } from "./components/cat_context.jsx";

// 상단영역 컴포넌트 불러오기 /////
import TopArea from "./components/top_area.jsx";

// 메인영역 컴포넌트 불러오기 //////
import MainCategory from "./components/main_area.jsx";

// 하단영역 컴포넌트 불러오기 /////
import FooterArea from "./components/footer_area.jsx";

// 제이쿼리 기능구현 함수 불러오기 ///
import setJSTop from "./common2.js";

////// 카테고리 페이지 메인 컴포넌트 ///////
/******************************************* 
  컴포넌트명 : MainComponent
  기능 : 상단, 메인, 하단영역 종합출력
*******************************************/
function MainComponent() {
  // 페이지 랜더링 후 한번만 실행
  React.useEffect(setJSTop,[]);

  // 우선 URL로 넘어온 키값을 가져옴!
  // 파라미터 전달값 받기 : 파라미터JS전담객체는?
  // -> URLSearchParams(전체URL)
  const params = new URLSearchParams(location.search);

  // 파라미터중 특정키 받기 : get(키이름) -> 키이름은 'cat'
  const catName = decodeURIComponent(params.get("cat"));
  // 'time & gem' decodeURIComponent로 변환!
  // -> 보내는 곳에서는 encodeURIComponent로 처리해야함!

  // 만약 처음 들어오는 경우 파라미터가 null이면
  // 다른 페이지 메뉴를 클릭하여 들어온 경우가 아니므로
  // 첫페이지로 리로드시킨다!
    // if(!catName) location.replace('index.html');
    

  console.log(
    "URL",
    location.search,
    "\n파라미터:",
    params,
    "\n키값:",
    catName
  );

  // 카테고리 데이터 상태관리변수 만들기!
  const [nowCat, setNowCat] = React.useState(catName);

  /////////////////////////////////////////////
  // 카테고리 데이터 상태관리변수 업데이트 함수 //
  const chgCat = (val) => {
    console.log('바꿔!',val);
    // 상태관리 변수 nowCat 업데이트
    setNowCat(val);

    // 처음 들어온 Get 파라미터가 셋팅된 후
    // 다른 서브 카테고리 페이지로 변경하다가
    // 새로고침 등 페이지 리로드시 처음 들어온
    // 파라미터로 페이지가 변경되며 새로고쳐짐!
    // 이유는 처음들어온 cat=카테고리명 때문임!
    // 그래서 리액트 컴포넌트 업데이트시 
    // 상단 url 마지막 cat 키값을 실제 카테고리명으로
    // 업데이트 해준다!
    // ->  history객체는 window하위 객체임
    // 이전페이지로 이동하기 history.back() 등 유명함!

    // history.pushState(null,null,'?키=값')
    // -> 현재 url강제 업데이트 메서드임!
    history.pushState(null,null,'?cat='+encodeURIComponent(val));
    // 'time & gem'의 특수문자 & 때문에 인코딩처리함!

  }; //////////// chgCat함수 ///////////

  return (
    // 최상위 컴포넌트에서 관리되는 변수/함수를 하위컴포넌트에
    // 공유하기 위해 Context API를 사용한다!
    // 순서:
    // 1. createContext() 를 생성하여 사용할 곳에 import한다!
    // 2. 최상위 컴포넌트에서 컨텍스트 프로바이더를 셋팅한다
    // 3. value 속성에 공유한 변수/함수를 넣어준다!
    // -> 여러개일 경우 중괄호안에 콤마를 사용하여 셋팅함
    // -> value={{변수}} / value={{변수,변수,함수,변수,함수}}
    // 4. 이것을 하위컴포넌트에서는 useContext(생성컨텍스트명)으로
    // 생성하여 셋팅된 변수/함수를 호출하여 사용한다!
    /* 
      <생성컨텍스트명.Provider value={}>
        하위 컴포넌트들...
      </생성컨텍스트명.Provider>
    
    */
    <catContext.Provider value={{chgCat}}>
      {/* 1.상단영역 */}
      <TopArea />
      {/* <TopArea chgItem={chgCat} />  프롭스펑션다운 */}
      {/* 2.메인영역 */}
      <MainCategory category={nowCat} />
      {/* 3.하단영역 */}
      <FooterArea />
    </catContext.Provider>
  );
} ////////////// MainComponent ////////////////

// 메인 컴포넌트 출력하기 //////
ReactDOM.render(<MainComponent />, 
document.querySelector("#root"));

//////////////////////////////////////////////////////
