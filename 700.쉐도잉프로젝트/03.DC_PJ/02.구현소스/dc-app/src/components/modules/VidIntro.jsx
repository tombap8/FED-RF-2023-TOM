// DC PJ 비디오소개 컴포넌트

/* 구조정의: 
Root> section.vidbox > div 
> video box(>video+img) 
+ title box(>heading+p tag) */

export function VidIntro() {
  return (
    <section className="vidbox">
      <div>
        {/* 1. 비디오파트 */}
        <div className="vb1">
          <iframe src="" title=""></iframe>
        </div>
        {/* 2. 타이틀/설명파트 */}
        <div className="vb2">
          {/* 작은제목 */}
          <h3></h3>
          {/* 큰제목 */}
          <h2></h2>
          {/* 요약소개 */}
          <p></p>
          {/* 설명(링크포함) */}
          <p></p>
        </div>
      </div>
    </section>
  );
} //////////// VidIntro 컴포넌트 ///////////
