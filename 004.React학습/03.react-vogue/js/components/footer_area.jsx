/////////// 하단영역 컴포넌트 /////////////
/******************************************* 
  컴포넌트명 : FooterArea
  기능 : 하단영역 링크메뉴, 회사정보
*******************************************/
export default function FooterArea() {
  console.log("하단영역실행!!!");

  // 상태관리변수 : 하단변경여부
  const [chgFooter, setChgFooter] = React.useState(0);

  return (
    <React.Fragment>
      {/* 하단상태값 변경버튼 */}
      <div style={{ textAlign: "center" }}>
        <button onClick={() => {setChgFooter(chgFooter?0:1)}}>
          하단로고변경</button>
      </div>
      <FooterMemo fsts={chgFooter} />
    </React.Fragment>
  );
} //////////// FooterArea 컴포넌트 /////////////

/// 하단 코드를 메모이제이션 하기 위한 컴포넌트
// 만약 전달값props가 없으면 없는 상태가
// 계속 유지 되므로 재활용없이 다시 컴포넌트가
// 그려지는 일은 없게됨!-> 중복실행하지 않는다!
const FooterMemo = React.memo((props) => {
  console.log("메모실행!!!");
  // 하단링크 데이터 ////
  const fTxt = ["정기구독", "회사소개", "광고 및 제휴", "개인정보 처리방침"];

  // 리스트 생성 함수 ////
  const makeList = (data) =>
    data.map((v) => (
      <li>
        <a href="#">{v}</a>
      </li>
    ));

  return (
    <React.Fragment>
      <div id="footer-area">
        <footer className="footer-area ibx common-area">
          {/* 3-1.하단로고 */}
          <div className="blogo">
            {/* 전달상태값에 따라 이미지변경함! */}
            <img 
            src={
              props.fsts==0?
              "./images/footer_logo.png":
              "https://media.tenor.com/roL8BtIs724AAAAd/vogue-celine-vogue.gif"
            } 
            alt="하단로고" />
          </div>
          {/* 3-2.회사주소 */}
          <address className="addr">
            {props.fsts}WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED.
            VOGUE.COM KOREA IS OPERATED BY DOOSAN MAGAZINE.
          </address>
          {/* 3-3.하단링크 */}
          <ul className="blink">{makeList(fTxt)}</ul>
        </footer>
      </div>
      {/* 위로가기버튼 */}
      <a href="#" className="tbtn fi fi-angle-up">
        <span className="ir">위로가기버튼</span>
      </a>
    </React.Fragment>
  );
}); /////////// FooterMemo 컴포넌트 /////////
/* 
  const Component = React.memo((props) => {
    return (컴포넌트 랜더링 코드)}
  );
*/
