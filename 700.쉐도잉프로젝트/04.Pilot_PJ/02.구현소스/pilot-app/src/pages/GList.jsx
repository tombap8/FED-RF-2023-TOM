// 상품 전체 리스트 페이지

// 상품전체리스트 CSS 불러오기
import "../css/glist.css";

// 상품데이터 불러오기
import gdata from "../data/glist-items";

console.log("전체Data:", gdata);

export function GList() {
  const makeList = () =>
    gdata.map((v, i) => (
      <div key={i}>
        <a href="#">
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

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 리턴 코드 ///////////////////
  return (
    <main id="cont">
      <section>
        <div id="optbx">
          <label htmlFor="men">남성</label>
          <input type="checkbox" id="men" defaultChecked />
          <label htmlFor="women">여성</label>
          <input type="checkbox" id="women" defaultChecked />
          <label htmlFor="style">스타일</label>
          <input type="checkbox" id="style" defaultChecked />
        </div>
        <div className="grid">{makeList()}</div>
      </section>
    </main>
  );
} /////////////// GList 컴포넌트 ///////////
