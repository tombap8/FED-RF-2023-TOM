// DC PJ 비디오소개 컴포넌트

// 비디오소개 데이터 가져오기
import { vidIntroData } from "../data/vid_intro";

/* 구조정의: 
Root> section.vidbox > div 
> video box(>video+img) 
+ title box(>heading+p tag) */

export function VidIntro(props) {
    // props.cat - 페이지 분류명
    // props.cls - 디자인적용 클래스('on')

    // 선택데이터 : 페이지 분류명으로 선택
    const selData = vidIntroData[props.cat];

  return (
    /* props.cls로 전달되는 값이 'on'/'off'임 */
    <section className={"vidbox"+' '+props.cls}>
      <div>
        {/* 1. 비디오파트 */}
        <div className="vb1">
          <iframe src={selData.vsrc} title={selData.btit}></iframe>
        </div>
        {/* 2. 타이틀/설명파트 */}
        <div className="vb2">
          {/* 작은제목 */}
          <h3>{selData.stit}</h3>
          {/* 큰제목 */}
          <h2>{selData.btit}</h2>
          {/* 요약소개 */}
          <p>{selData.sum}</p>
          {/* 설명(링크포함) */}
          <p>{selData.desc}</p>
        </div>
      </div>
    </section>
  );
} //////////// VidIntro 컴포넌트 ///////////
