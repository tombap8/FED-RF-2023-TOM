// Pilot PJ 메인 페이지 배너 컴포넌트

// 배너용 CSS 불러오기
import '../css/banner.css'

export function Banner() {
  return (
    <>
      <ul class="slide">
        <li class="ban6">
          <span class="ir">배너6</span>
        </li>
        <li class="ban1">
          <span class="ir">배너1</span>
        </li>
        <li class="ban2">
          <span class="ir">배너2</span>
        </li>
        <li class="ban3">
          <span class="ir">배너3</span>
        </li>
        <li class="ban4">
          <span class="ir">배너4</span>
        </li>
        <li class="ban5">
          <span class="ir">배너5</span>
        </li>
      </ul>
      <ol class="bindic">
        <li class="on">
          <a href="#">
            <span class="bld">블릿</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="bld">블릿</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="bld">블릿</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="bld">블릿</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="bld">블릿</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="bld">블릿</span>
          </a>
        </li>
      </ol>
      <div class="cover"></div>
    </>
  );
} //////////// Banner 컴포넌트 ///////////
