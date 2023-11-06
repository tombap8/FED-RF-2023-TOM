// 보그 PJ 카테고리 페이지 JS - category.js


// 상단영역 컴포넌트 불러오기 /////
import TopArea from "./components/top_area.jsx";

// 메인영역 컴포넌트 불러오기 //////
import MainCategory from "./components/main_area.jsx";

// 하단영역 컴포넌트 불러오기 /////
import FooterArea from "./components/footer_area.jsx";


////// 카테고리 페이지 메인 컴포넌트 ///////
/******************************************* 
  컴포넌트명 : MainComponent
  기능 : 상단, 메인, 하단영역 종합출력
*******************************************/
function MainComponent() {

  return(
    <React.Fragment>
      {/* 1.상단영역 */}
      <TopArea />
      {/* 2.메인영역 */}
      <MainCategory />
      {/* 3.하단영역 */}
      <FooterArea />
    </React.Fragment>
  );

} ////////////// MainComponent ////////////////

// 메인 컴포넌트 출력하기 //////
ReactDOM.render(<MainComponent />,
document.querySelector('#root'));



//////////////////////////////////////////////////////

