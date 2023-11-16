// 메인페이지 드래그(스와이프) 배너 기능함수

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function dragBanner() {
  // 드래그 기능넣기
  // 대상:
  // 슬라이드
  const slide = $(".slide");
  // 커버
  const cover = $(".cover");
  // 블릿
  const indic = $(".bindic li");
//   console.log(indic);

  // 드래그 기능넣기
  slide.draggable({ axis: "x" });

  // 드래그가 끝났을때 슬라이드 위치
  slide.on("dragstop", () => {
    // 광드래그 막기 커버
    cover.show();

    // 비교를 위한 윈도우 가로값
    let winW = $(window).width();
    // 현재 슬라이드 left값
    let pos = slide.offset().left;
    // 이동차이수 = 슬라이드위치값(양수) - 윈도우가로값
    let diff = Math.abs(pos) - winW;
    // 결과해석: 양수->왼쪽으로 이동/음수->오른쪽으로 이동

    // 기준값 : 화면크기를 기준한 부분
    let gap = winW / 10;
    // console.log("드래그 멈춤!", pos, winW, diff);

    // 왼쪽으로 이동하기
    if (diff > gap) {
      slide.animate({ left: "-200%" }, 800, "easeOutQuint", () => {
        // 맨앞li 맨뒤로 이동
        slide
          .append(slide.find("li").first())
          // left값 -100%(처음값)
          .css({ left: "-100%" });
        // 커버제거
        cover.hide();
      });
    }
    // 오른쪽으로 이동하기
    else if (diff < -gap) {
      slide.animate({ left: "0" }, 800, "easeOutQuint", () => {
        // 맨뒤li 맨앞으로 이동
        slide
          .prepend(slide.find("li").last())
          // left값 -100%(처음값)
          .css({ left: "-100%" });
        // 커버제거
        cover.hide();
      });
    }
    // 제자리로 ////
    else {
      slide.animate({ left: "-100%" }, 300, "easeOutQuint", () => {
        // 커버제거
        cover.hide();
      });
    }

    // 블릿변경함수호출
    chgIndic(diff,gap)
    

  }); /////////// dragstop /////////


  //////// 블릿변경함수 /////////////
  const chgIndic = (diff,gap) => {
    // 블릿변경하기
    // 현재 슬라이드 순번 알아오기
    // -> 클래스명 'ban번호'로 되어 있음
    // 마지막 순번만 잘라서 1을빼면 순번임!
    // 선택순번 : gap값을 기준하여
    let selSeq = (diff > gap ? 2 : (diff < -gap ? 0 : 1));
    // diff가 양수면 2, diff가 음수면 0, 모두아니면 1
    // 선택순번의 클래스
    let selCls = slide.find('li').eq(selSeq).attr('class');
    // console.log('클래스명:',selCls);

    // 해당 슬라이드 순번 : 클래스명의 숫자 - 1
    // -> 슬라이드 순번은 클래스명의 숫자 - 1
    // Number() 숫자형변환 : 문자를 잘라서 문자형숫자임
    // 그런데 요즘 브라우저는 이렇게 안해도 자동형변환하여 계산함!
    let indicSeq = Number(selCls.substr(3)) - 1;
    // console.log('블릿순번:',indicSeq);

    // 해당순번 블릿 클래스 'on'넣기/ 나머지는 빼기
    indic.eq(indicSeq).addClass('on')
    .siblings().removeClass('on');


  }; ////////// chgIndic 함수 ///////



} /////////// dragBanner 함수 //////////////
