// Pilot PJ 상단영역 공통 컴포넌트

// GNB 데이터 가져오기
import { gnbData } from "../data/gnb";
import { TotalMenu } from "../modules/TotalMenu";

// 제이쿼리
import $ from 'jquery';

export function TopArea(props) {
  // props.cat - 카테고리명(메뉴데이터 선택용)


  // GNB 클릭시 변경적용함수 ////
  const clickGnb = (e) => {
    console.log('카테고리:',props.cat);
    // glist일 경우 적용하기
    if(props.cat==="glist"){
      let atxt = $(e.currentTarget).text();
      console.log('메뉴글자:',atxt);


    } //////// if ////////
  }; ///////// clickGnb /////////

  /// GNB메뉴 리스트 만들기 함수
  const makeList = (data) => {
    console.log('GNB리스트:',data);
    return(
      gnbData[data].map((v,i)=>
        <li key={i}
          className={
            props.cat==="glist"&&i===0?'on':''
          }
          onClick={clickGnb}>
          <a href="#">{v}</a>
        </li>
      )
    )

  }; ///////// makeList /////////



  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img src="./images/main_logo.png" alt="파일럿로고" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              {makeList(props.cat)}
            </ul>
          </nav>
          <div className="ham">
            <span></span> <span></span> <span></span>
          </div>
          {/* 전체메뉴 컴포넌트 */}
          <TotalMenu />
        </header>
      </div>
    </>
  );
} //////////////// TopArea 컴포넌트 //////////
