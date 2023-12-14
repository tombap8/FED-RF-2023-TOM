// Pilot PJ 장바구니 리스트 컴포넌트

// 장바구니 리스트 CSS 불러오기
import { memo, useCallback, useEffect, useState } from "react";
import "../css/cartlist.css";

// 제이쿼리
import $ from "jquery";

// 전달값이 변경되면 리랜더링하기 위해 메모이제이션을 적용!
export const CartList = memo(({ selData, flag }) => {
  // selData - 현재 반영된 데이터
  // flag - 상태값 체크변수(true/false) -> 업데이트 여부결정!
  console.log("업뎃상태값:", flag.current);

  // 상태관리변수 설정 /////////////
  // 1. 변경 데이터 변수 : 전달된 데이터로 초기셋팅
  const [cartData, setCartData] = useState(selData);

  console.log("받은 데이터", selData, "\n기존 데이터", cartData);

  // 카트 컴포넌트의 데이터가 상태관리되고 있으므로
  // 외부에서 전달되는 데이터와 다를때 업데이트해야
  // 외부에서 들어오는 데이터가 반영되어 리랜더링 된다!
  // 삭제버튼도 작동하게 하려면??? -> 상태변수로 제어한다!!!
  // 외부데이터업데이트는 flag.current값이 true까지 돼야한다!
  if (cartData !== selData && flag.current) {
    setCartData(selData);
    console.log(3333);
  }

  // 선택 데이터 : 로컬스토리지 데이터를 객체변환! -> 주석처리
  // const selData = JSON.parse(localStorage.getItem("cart"));

  // 데이터개수
  const cntData = cartData.length;

  console.log(cartData, cntData + "개");

  // 전체합계 구하기
  let totalCnt = 0;
  cartData.forEach((v) => {
    totalCnt += v.ginfo[3] * v.num;
  }); ////////// forEach ///////////

  console.log("토탈:", totalCnt);

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 랜더링후 실행구역 /////////////
  useEffect(() => {
    // 카트버튼 나타나기
    $("#mycart")
      .removeClass("on")
      .fadeIn(300, function () {
        // 페이드 애니후
        $(this).addClass("on");
      }); ////// fadeIn ////////

    console.log("나야나");
  }, []); /// useEffect ///////////////

  // 리스트 보이기 함수 //////////
  const showList = () => {
    console.log("열려라!!");
    $("#cartlist").animate({ right: "0" }, 600);
  }; //////////// showList ////////////

  // 리스트 숨기기 함수 //////////
  const hideList = (e) => {
    e.preventDefault();
    $("#cartlist").animate({ right: "-60%" }, 600);
  }; //////////// hideList ////////////

  // 리스트 삭제 함수 ////////////////
  const deleteItem = (e) => {
    // 삭제기능만 작동하기 하기 위해 부모의 useRef값인 flag값을
    // false로 변경하면 상단의 조건업데이트값이 작동하지 않는다!
    // 삭제기능만 작동한다!
    flag.current = false;

    let confMsg = "정말정말정말로 지우시겠습니까? 할인도하는데?";
    // 지울지 여부를 사용자에게 물어본다!
    // confirm() 대화창에
    // '확인'->true, '취소'->false 리턴함!
    // confirm은 alert과 유사하게 window객체에 있음!
    if (window.confirm(confMsg)) {
      const selIdx = $(e.target).attr("data-idx");
      console.log("지울아이:", selIdx);

      // 해당 데이터 순번 알아내기
      const newData = cartData.filter((v) => {
        if (v.idx !== selIdx) return true;
      });

      console.log("제거후리스트:", newData);

      // 로컬스 데이터 업데이트!!!
      localStorage.setItem("cart", JSON.stringify(newData));

      // 전체 데이터 업데이트 하면 모두 리랜더링되게 하자!
      setCartData(newData);
    } ////// if /////////
  }; ////////// deleteItem 함수 //////////

  // 증감 반영함수 ////////////
  const chgNum = dir => { // 0-감소,1-증가
    console.log('증감반영:',dir);
    $('#item-cnt').focus();

  }; ///////// chgNum 함수 ///////////

  /// 리턴 코드 ///////////////////////
  return (
    <>
      <section id="cartlist">
        <a href="#" className="cbtn cbtn2" onClick={hideList}>
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

            {cartData.map((v, i) => (
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
                <td className="cnt-part">
                  <div>
                    <span>
                      <input type="text" 
                      className="item-cnt" 
                      defaultValue={v.num} />
                      <button className="btn-insert">반영</button>
                      <b className="btn-cnt">
                        <img src="./images/cnt_up.png" alt="증가" onClick={chgNum} />
                        <img src="./images/cnt_down.png" alt="감소" onClick={chgNum} />
                      </b>
                    </span>
                    
                  </div>
                </td>
                {/* 상품가격 총합계 */}
                <td>{addComma(v.ginfo[3] * v.num)}원</td>
                {/* 삭제버튼 */}
                <td>
                  <button className="cfn" data-idx={v.idx} onClick={deleteItem}>
                    ×
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="6">총합계 :</td>
              <td>{addComma(totalCnt)}원</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* 카트버튼이미지 박스 */}
      <div id="mycart" onClick={showList}>
        {/* 카트이미지 */}
        <img src="./images/mycart.gif" title="개의 상품이 있습니다" />
        {/* 카트상품개수 출력박스 */}
        <div className="cntBx">{cntData}</div>
      </div>
    </>
  );
}); ////////////// CartList 컴포넌트 /////////
