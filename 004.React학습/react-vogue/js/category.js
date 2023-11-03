// 보그 PJ 카테고리 페이지 JS - category.js

/////////// 상단영역 컴포넌트 /////////////
function TopArea() {
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
ReactDOM.render(<TopArea />, document.querySelector(".top-area"));

////// 카테고리 페이지 메인 컴포넌트 ///////
function MainCategory() {} ///////// MainCategory 컴포넌트 /////////////
