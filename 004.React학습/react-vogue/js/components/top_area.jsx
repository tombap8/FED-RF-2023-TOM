/////////// 상단영역 컴포넌트 /////////////

// 카테고리 컨텍스트 API 파일 불러오기 ///
import { catContext } from "./components/cat_context.jsx";

// 링크 시스템 JS 가져오기 //////
import { makeLink } from "./linksys2.js";

/******************************************* 
  컴포넌트명 : TopArea
  기능 : 상단영역 메뉴, 로그 등 요소 구성
*******************************************/
export default function TopArea(props) {
  // 컴포넌트 요소 랜더링 직전 호출구역
  // -> 컴포넌트는 모두 만들어진 후 화면뿌리기 직전(가랜더링)
  React.useEffect(makeLink, []);
  // useEffect(함수,[]) -> 뒤에 의존성변수 구역 비어있으면
  // 본 컴포넌트가 처음 실행될때 한번만 실행한다!

  // 다시 자식 컴포넌트로 함수를 만들어서 전달!
  // const goFn = (v) => props.chgItem(v);
  // -> 컨텍스트 API를 사용할때는 프롭스펑션다운 불필요!

  return (
    <div id="top-area">
      <header class="top-area ibx common-area">
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
        <GnbMenu />
        {/* <GnbMenu gnbFn={goFn} /> 프롭스펑션다운 */}
        {/* 모바일용 버튼 */}
        <MobBtns />
      </header>
      {/* 모바일용 메뉴,검색박스 */}
      <MobBox />
    </div>
  );
} //////////// TopArea 컴포넌트 /////////////

/********************************************
 * 컴포넌트명 : GnbMenu
 * 기능 : 모바일용 버튼 생성 컴포넌트
 ********************************************/
function GnbMenu(props) {
  // 여기 컴포넌트에서 컨텍스트API를 사용할 것이므로
  // 여기에 useContext(생성컨텍스트명)을 셋팅한다!
  const gnbContext = React.useContext(catContext);
  // 할당된 변수에는 전역변수/함수가 들어있음!
  // 부모의 컨텍스트 프로바이더 value에 셋팅된 이름으로 호출함!

  // GNB용 메뉴 배열변수
  const gnbText = [
    "FASHION",
    "BEAUTY",
    "LIVING",
    "PEOPLE",
    "VIDEO",
    "RUNWAY",
    "TIME & GEM",
    "SHOPPING",
  ];

  // 메뉴 클릭시 변수 변경함수
  const chgCat = (data) => {
    console.log("나야나!", data);

    // 컨텍스트 API로 전달된 부모컴포넌트 함수를 호출!
    gnbContext.chgCat(data.toLowerCase());

    // TopArea컴포넌트에서 보낸 속성함수를 호출
    // props.gnbFn(data.toLowerCase())
    // -> 컨텍스트API를 사용할땐 프롭스펑션다운 사용안함!

    // 전달된 부모함수 chgCat을 호출함!
    // props.chgItem(data.toLowerCase());
  }; ///////////// chgCat 함수 ///////////


  return (
    <nav className="gnb">
      <ul>
        {gnbText.map((v) => (
          <li>
            <a href="#" onClick={() => chgCat(v)}>
              {v}
            </a>
          </li>
        ))}

        <li>
          {/* 돋보기 검색버튼 */}
          <i href="#" className="fi fi-search">
            <span className="ir">search</span>
          </i>
        </li>
      </ul>
    </nav>
  );
} //////////////// GnbMenu 컴포넌트 /////////////

/********************************************
 * 컴포넌트명 : MobBtns
 * 기능 : 모바일용 버튼 생성 컴포넌트
 ********************************************/
function MobBtns() {
  return (
    <React.Fragment>
      {/* 모바일용 햄버거버튼 */}
      <a href="#" className="mobtn hbtn fi fi-nav-icon">
        <span className="ir">GNB button</span>
      </a>
      {/* 모바일용 검색버튼 */}
      <a href="#" className="mobtn sbtn fi fi-search">
        <span className="ir">search</span>
      </a>
    </React.Fragment>
  );
} //////////////// MobBtns 컴포넌트 /////////////

/********************************************
 * 컴포넌트명 : MobBox
 * 기능 : 모바일용 메뉴, 검색박스
 ********************************************/
function MobBox() {
  return (
    <React.Fragment>
      {/* 1.4.모바일 검색박스 */}
      <div className="mos">
        <div className="mwrap">
          {/* 입력창박스 */}
          <div id="search">
            <input type="text" className="search" />
          </div>
          {/* 검색버튼 */}
          <button className="scbtn fi fi-search">
            <span className="ir">돋보기검색아이콘</span>
          </button>
        </div>
      </div>

      {/* 1.5.모바일 전체메뉴 */}
      <div id="mobx">
        {/* 1.5-1.모바일 GNB 메뉴 */}
        <nav className="mognb">
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
              <a href="#">SHOPPING</a>
            </li>
          </ul>
        </nav>
        {/* 1.5-2.모바일 sns 메뉴 */}
        <div className="mosns">
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
          <a href="#">
            <span className="ir">카카오스토리</span>
          </a>
        </div>
        {/* 1.5-3.매거진박스 */}
        <figure className="magbox">
          {/* 잡지커버이미지 */}
          <a className="mcover" href="#">
            <img src="./images/cover.jpg" alt="보그표지" />
          </a>
          {/* 잡지설명 */}
          <figcaption>
            정기구독을 신청하면 최대 30% 할인혜택을 드립니다!
          </figcaption>
          {/* 정기구독버튼 */}
          <button className="magbtn">정기구독 신청</button>
        </figure>

        {/* 하단링크박스 */}
        <ul className="moblink">
          <li>
            <a href="#">회사소개 /</a>
          </li>
          <li>
            <a href="#">광고 및 제휴 /</a>
          </li>
          <li>
            <a href="#">
              <strong>개인정보 처리방침</strong>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
} //////////////// MobBox 컴포넌트 /////////////
