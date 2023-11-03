// 보그 PJ 카테고리 페이지 JS - category.js

// 링크 시스템 JS 가져오기 //////
import { makeLink } from "./linksys2.js";

/////////// 상단영역 컴포넌트 /////////////
/******************************************* 
  컴포넌트명 : TopArea
  기능 : 상단영역 메뉴, 로그 등 요소 구성
*******************************************/
function TopArea() {

  // 컴포넌트 요소 랜더링 직전 호출구역
  // -> 컴포넌트는 모두 만들어진 후 화면뿌리기 직전(가랜더랭)
  React.useLayoutEffect(makeLink);

  return (
    <React.Fragment>
      {/* 1-1.상단메뉴 */}
      <div className="tmenu">
        {/* 1-1-1.sns박스 */}
        <div className="sns">
          <a href="#" className="fi fi-instagram">
            <span className="ir">인스타그램</span>
          </a>
          <a href="#" className="fi fi-facebook">
            <span className="ir">페이스북</span>
          </a>
          <a href="#" className="fi fi-twitter">
            <span className="ir">트위터</span>
          </a>
          <a href="#" className="fi fi-youtube-play">
            <span className="ir">유튜브</span>
          </a>
          <a href="#" className="fi cas">
            <span className="ir">카카오스토리</span>
          </a>
        </div>
        {/* 1-1-2.사이드메뉴 */}
        <div className="sideMenu">
          <ul className="smbx">
            <li>
              <a href="#">SIDE MENU</a>
              {/* 서브메뉴 */}
              <ol className="smsub">
                <li>
                  <a href="#">회사 소개</a>
                </li>
                <li>
                  <a href="#">광고 및 제휴</a>
                </li>
                <li>
                  <a href="#">개인정보 처리방침</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#">SUBSCRIBE</a>
            </li>
          </ul>
        </div>
      </div>
      {/* 1-2.로고박스 */}
      <h1 className="logo">
        <a href="#">
          <img src="./images/mlogo.png" alt="메인로고" />
        </a>
      </h1>
      {/* 1-3.GNB박스 */}
      <nav className="gnb">
        <ul>
          <li>
            <a href="#">FASHION</a>
          </li>
          <li>
            <a href="#">BEAUTY</a>
          </li>
          <li>
            <a href="#">LIVING</a>
          </li>
          <li>
            <a href="#">PEOPLE</a>
          </li>
          <li>
            <a href="#">VIDEO</a>
          </li>
          <li>
            <a href="#">RUNWAY</a>
          </li>
          <li>
            <a href="#">TIME &amp; GEM</a>
          </li>
          <li>
            <a href="#">SHOPPING</a>
          </li>
          <li>
            {/* 돋보기 검색버튼 */}
            <i href="#" className="fi fi-search">
              <span className="ir">search</span>
            </i>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
} //////////// TopArea 컴포넌트 /////////////

// 상단영역 출력하기 //////
ReactDOM.render(<TopArea />, 
document.querySelector(".top-area"));

//////////////////////////////////////////////////////

////// 카테고리 페이지 메인 컴포넌트 ///////
/******************************************* 
  컴포넌트명 : MainCategory
  기능 : 아이템 페이지 타이틀 + 리스트 요소구성
*******************************************/
function MainCategory() {

  return(
    <React.Fragment>
      <SubTitle />
      <ItemList />
    </React.Fragment>
  );

} ///////// MainCategory 컴포넌트 /////////////

// 메인영역 출력하기 /////////////
ReactDOM.render(<MainCategory />, 
document.querySelector(".main-area"));
///////////////////////////////////////

////// 메인 컴포넌트 하위 서브타이틀 컴포넌트 /////
/******************************************* 
  컴포넌트명 : SubTitle
  기능 : 서브 타이틀 요소구성
*******************************************/
function SubTitle(){

  return(
        // 2-1. 카테고리 페이지 상단영역
        <header className="cat-top-area">
          {/* 2-1-1. 서브타이틀 */}
          <h2 className="cat-tit">Fashion</h2>
          {/* 2-1-2. 서브메뉴(LNB:Local Navigation Bar) */}
          <nav className="lnb"></nav>
        </header>
  );

} /////////////// SubTitle 컴포넌트 //////////////

////// 메인 컴포넌트 하위 리스트 컴포넌트 /////
/******************************************* 
  컴포넌트명 : ItemList
  기능 : 카테고리 아이템별 리스트요소구성
*******************************************/
function ItemList(){

  return(
    // 2-2. 카테고리 페이지 컨텐츠영역
    <div className="cat-cont-area">
      <section className="pt2">
        <div className="cbx bgi bg1-1">
          <h2></h2>
        </div>
        <div className="cbx bgi bg1-2">
          <h2></h2>
        </div>
        <div className="cbx bgi bg1-3">
          <h2></h2>
        </div>
      </section>
      <section className="pt2">
        <div className="cbx bgi bg2-1">
          <h2></h2>
        </div>
        <div className="cbx bgi bg2-2">
          <h2></h2>
        </div>
        <div className="cbx bgi bg2-3">
          <h2></h2>
        </div>
      </section>
    </div>
  );

} /////////////// ItemList 컴포넌트 //////////////


