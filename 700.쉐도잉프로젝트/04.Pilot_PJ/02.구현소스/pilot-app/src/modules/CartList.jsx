// Pilot PJ 장바구니 리스트 컴포넌트

// 장바구니 리스트 CSS 불러오기
import { useEffect } from "react";
import "../css/cartlist.css";

// 제이쿼리
import $ from "jquery";

export function CartList() {
  // 선택 데이터 : 로컬스토리지 데이터를 객체변환!
  const selData = JSON.parse(localStorage.getItem("cart"));

  console.log(selData);

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 랜더링후 실행구역 /////////////
  useEffect(() => {
    // 카트버튼 나타나기
    $("#mycart").fadeIn(300, function () {
      // 페이드 애니후
      $(this).addClass('on');
    }); ////// fadeIn ////////

    console.log("나야나");
  }, []); /// useEffect ///////////////

  /// 리턴 코드 ///////////////////////
  return (
    <>
      <section id="cartlist">
        <a href="#" className="cbtn cbtn2">
          <span>닫기버튼</span>
        </a>
        <table>
          <caption>
            <h1> 카트 리스트</h1>
          </caption>
          <tbody>
            <tr>
              <th>상품</th>
              <th>번호</th>
              <th>상품명</th>
              <th>상품코드</th>
              <th>단가</th>
              <th>수량</th>
              <th>합계</th>
              <th>삭제</th>
            </tr>

            {selData.map((v, i) => (
              <tr key={i}>
                {/* 상품이미지 */}
                <td>
                  <img
                    src={"images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"}
                    alt="item"
                  />
                </td>
                {/* 리스트순번 */}
                <td>{i + 1}</td>
                {/* 상품명 */}
                <td>{v.ginfo[1]}</td>
                {/* 상품코드 */}
                <td>{v.ginfo[2]}</td>
                {/* 상품가격 */}
                <td>{addComma(v.ginfo[3])}원</td>
                {/* 상품수량 */}
                <td>{v.num}</td>
                {/* 상품가격 총합계 */}
                <td>{addComma(v.ginfo[3] * v.num)}원</td>
                {/* 삭제버튼 */}
                <td>
                  <button className="cfn" data-idx={v.idx}>
                    ×
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="6">총합계 :</td>
              <td>999,000원</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* 카트버튼이미지 박스 */}
      <div id="mycart">
        {/* 카트이미지 */}
        <img src="./images/mycart.gif" title="개의 상품이 있습니다" />
        {/* 카트상품개수 출력박스 */}
        <div className="cntBx">8</div>
      </div>
    </>
  );
} ////////////// CartList 컴포넌트 /////////
