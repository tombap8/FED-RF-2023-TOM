// 메인 페이지 JS - index.js
import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { TopArea } from './layout/TopArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

// 제이쿼리 
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';


// 페이지 공통 CSS
import './css/common.css';

// 최상위 Root 컴포넌트 ///////
function App(){

  // 후크상태변수 설정 : 페이지변경
  const [pgName,setPgName] = useState('main');

  // 페이지변경 상태변수 업데이트 함수
  const chgPgName = (txt) => {
    setPgName(txt);
  }; ///////// chgPgName 함수 //////

  // 랜더링 후 실행구역 ////////////
  useEffect(()=>{
    $('.gnb li, .indic li').click(function(){
      // 순번변수
      let idx = $(this).index();
      console.log('나야나~!',idx);

      // 페이지 이동
      $("html,body").animate({
        scrollTop:
        ($(window).height()*idx)+"px"
      },800,"easeInOutQuint")
      ////// animate /////

      // 클릭된 메뉴에 class 'on' 넣기
      $('.gnb li').eq(idx).addClass('on')
      .siblings().removeClass('on');
      
      $('.indic li').eq(idx).addClass('on')
      .siblings().removeClass('on');
    }); ///// click //////////



  }); ////////// useEffect //////////////


  // 리턴코드 //////////////////////////
  return(
      <>
        <TopArea cat={pgName} />        
        <MainArea page={pgName} />
        <FooterArea />
      </>
  )

} ///////////// App 컴포넌트 /////////////

/* 
<button onClick={()=>chgPgName('main')}>
  메인페이지
</button>
<button onClick={()=>chgPgName('men')}>
  남성페이지
</button>
<button onClick={()=>chgPgName('women')}>
  여성페이지
</button>
<button onClick={()=>chgPgName('style')}>
  스타일페이지
</button>
*/

// 출력하기 ///////
const root = createRoot(document.querySelector('#root'));
root.render(<App />)