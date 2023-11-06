/////////// 상단영역 컴포넌트 /////////////

// 링크 시스템 JS 가져오기 //////
import { makeLink } from "./linksys2.js";

/******************************************* 
  컴포넌트명 : TopArea
  기능 : 상단영역 메뉴, 로그 등 요소 구성
*******************************************/
export default function TopArea() {
    // 컴포넌트 요소 랜더링 직전 호출구역
    // -> 컴포넌트는 모두 만들어진 후 화면뿌리기 직전(가랜더랭)
    React.useLayoutEffect(makeLink);
  
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
    }; ///////////// chgCat 함수 ///////////
  
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
      </React.Fragment>
    );
  } //////////// TopArea 컴포넌트 /////////////