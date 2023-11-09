// DC.com 배너 컴포넌트

// 배너데이터
import { banData } from "./data/banner";

// 배너CSS
import "../css/banner.css";

// 배너 컴포넌트 //
export function Banner() {
  // 리스트만들기 함수
  const makeList = (data) => {
    console.log(data);
    return data.map((v, i) => (
      <li key={i}>
        <img src={v.src} alt="ㅎㅎ" />
      </li>
    ));
  };

  // 코드리턴 ////////////////
  return (
    <div className="banner">
      {/* 이동슬라이드 */}
      <ul className="slider">{makeList(banData.main)}</ul>
    </div>
  );
} ////////// Banner 컴포넌트 //////////
