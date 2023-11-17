// Pilot PJ - 패션인트로 컴포넌트 ////////

// 패션 인트로 데이터 불러오기
import { fsData } from "../data/fashion_intro";

// 패션 인트로 CSS 불러오기
import "../css/fashion_intro.css";

export function FashionIntro(props) {
  // props.cat - 카테고리 분류명

  // 선택데이터
  const selData = fsData[props.cat];

  return (
    <div id={props.cat} className="fs-page">
      <ul className="pgc">
        <li className="imgc">
          <img src={selData.isrc} alt={selData.ialt} />
        </li>
        <li className="txtc">
          <h2>
            <a href="#">
            {selData.tit.split('^')[0]} <br />
            {selData.tit.split('^')[1]}
            </a>
          </h2>
        </li>
      </ul>
    </div>
  );
} //////////// FashionIntro 컴포넌트 ////////
