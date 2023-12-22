// 상품 전체 리스트 페이지

// 상품전체리스트 CSS 불러오기
import { useEffect, useRef, useState } from "react";
import "../css/glist.css";

// 제이쿼리
import $ from "jquery";

// 상품데이터 불러오기
import gdata from "../data/glist-items";
import { ItemDetail } from "../modules/ItemDetail";

console.log("전체Data:", gdata);

export function GList() {
  // 참조변수셋팅 : 리랜더링없이 값유지!
  // 1. 아이템 코드(m1,m2,m3,...)
  const item = useRef("m1");
  // 2. 카테고리명(men/women/style)
  const catName = useRef("men");

  // 리랜더링을 위한 상태변수 : 무조건 리랜더링설정목적
  const [force, setForce] = useState(null);

  // 리스트 만들기 함수 ////////
  const makeList = () =>
    gdata.map((v, i) => (
      <div key={i}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            showDetail(v.ginfo[0], v.cat);
          }}
        >
          [{i + 1}]
          <img
            src={"./images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"}
            alt="dress"
          />
          <aside>
            <h2>{v.ginfo[1]}</h2>
            <h3>{addComma(v.ginfo[3])}원</h3>
          </aside>
        </a>
      </div>
    )); //////////// makeList ////////

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 상품클릭시 상세보기 보여주는 함수 ////
  const showDetail = (gCode, catCode) => {
    // gCode - 상품코드, catCode - 분류명
    console.log("상세보여!", gCode, catCode);

    // 1. 값업데이트
    item.current = gCode;
    catName.current = catCode;

    // 2. 리랜더링 상태변경
    setForce(Math.random());
    // -> 리랜더링시 변경된 부분만 업데이트 한다!
    // -> ItemDetail 컴포넌트 파트가 업데이트됨!

    // 대상 보이기
    $(".bgbx").slideDown(600);
  }; //////////// showDetail 함수 ///////////

  /******************************************* 
    함수명: changeList
    기능: 체크박스에 따른 리스트 변경하기
  *******************************************/
  const changeList = (e) => {
    // 1. 체크박스 아이디
    const cid = e.target.id;

    // 2. 체크박스 체크여부 : checked (true/false)
    const chked = e.target.checked;
    console.log('아이디:',cid,chked);
    
  }; ////////////// changeList 함수 ///////////

  // 리턴 코드 ///////////////////
  return (
    <main id="cont">
      <h1 className="tit">All ITEMS LIST</h1>
      <section>
        <div id="optbx">
          <label htmlFor="men">남성</label>
          <input type="checkbox" className="chkbx" id="men" defaultChecked
          onChange={changeList} />
          <label htmlFor="women">여성</label>
          <input type="checkbox" className="chkbx" id="women" defaultChecked
          onChange={changeList} />
          <label htmlFor="style">스타일</label>
          <input type="checkbox" className="chkbx" id="style" defaultChecked
          onChange={changeList} />
        </div>
        <div className="grid">{makeList()}</div>
      </section>
      {/* 2.5. 상세보기박스 */}
      <div
        className="bgbx"
        style={{
          position: "fixed",
          top: 0,
          paddingTop: "12vh",
          backdropFilter: "blur(8px)",
          height: "100vh",
          zIndex: 9999,
        }}
      >
        <ItemDetail goods={item.current} cat={catName.current} />
      </div>
    </main>
  );
} /////////////// GList 컴포넌트 ///////////
