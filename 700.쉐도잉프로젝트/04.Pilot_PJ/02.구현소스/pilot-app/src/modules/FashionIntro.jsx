// Pilot PJ - 패션인트로 컴포넌트 ////////

// 패션 인트로 CSS 불러오기
import "../css/fashion_intro.css";

export function FashionIntro(props) {
  // props.cat - 카테고리 분류명

  return (
    <div id={props.cat} className="fs-page">
      <ul className="pgc">
        <li className="imgc">
          <img src="" alt="" />
        </li>
        <li className="txtc">
          <h2>
            <a href="#">
              
            </a>
          </h2>
        </li>
      </ul>
    </div>
  );
} //////////// FashionIntro 컴포넌트 ////////
