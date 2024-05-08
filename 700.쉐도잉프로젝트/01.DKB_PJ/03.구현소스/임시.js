
// 메인 페이지 스크롤 이동 제이쿼리 구현 ////
$(".spart-menu a").click(e=>{
  e.preventDefault();
  let btnTxt = $(e.target).text();
  console.log(btnTxt);

  let pos;
  switch(btnTxt) {
    case "프로그램 소개": pos = "#intro-area";break;
    case "미리보기": pos = "#preview-area";break;
    case "동영상": pos = "#clip-video-area";break;
  }

  pos = $(pos).offset().top;

  $("html,body").animate({scrollTop:pos+"px"},800,"easeInOutExpo",
  ()=>{
    // 이동후 부드러운 스크롤 위치값 업데이트 해야함!
    // 안하면 스크롤시 원래 저장된 위치로 튐!
    setScrollPos(pos);
  })

})