// 신상품 컴포넌트 ////////

import { useEffect } from "react";

import $ from 'jquery';

export function SinSang(props) {
  // props.cat - 카테고리 분류명

  const makeList = () => {
    // 코드 담을 배열
    let temp = [];
    // 원하는 반복수 만큼 for문실행하여 배열에 JSX태그 담기
    for (let x = 0; x < 9; x++) {
      temp[x] = (
        <li className={"m" + (x + 1)} key={x}>
          <a href="#">
            <img
              src={"./images/goods/" + props.cat + "/m" + (x + 1) + ".png"}
              alt="신상품"
            />
          </a>
        </li>
      );
    } ///// for /////
    // JSX태그를 담은 배열을 리턴->자동태그변환!
    return temp;
  }; ///////// makeList 함수 ///////////

  // 신상품 리스트 이동함수 사용변수 ///
  // 위치값변수(left값)
  let lpos = 0;
  // 재귀호출 상태값(1-호출,0-멈춤)
  let callSts = 1;
  

  // 신상품 리스트 이동함수 //////
  const flowList = (ele) => { // ele-움직일대상
    // console.log(ele);
    // 대상의 left값을 1씩 감소함
    lpos--;
    
    // 이미지박스 한개가 나가면 잘라서 맨뒤로 보냄
    if(lpos < -300){
      // 위치값 초기화!(-301일때 0으로 변경!)
      lpos = 0;
      // 첫번째 li 맨뒤로 이동
      ele.append(ele.find('li').first());
    } ///// if //////
    
    // 적용함
    ele.css({left:lpos+'px'})

    // 재귀호출
    if(callSts)
      setTimeout(()=>flowList(ele),40)

  }; ////////// flowList ////////////

  // 오버/아웃시 이동제어함수 ///
  const flowOut = () => {
    

  }; /////////


  // 랜더링 후 실행구역 //////
  useEffect(()=>{
    // 대상선정: .flist

    // 신상리스트이동함수 호출!
    flowList($('.flist'))


  }); ////////// useEffect ////////



  // 리턴 코드 /////////////////////
  return (
    <>
      <h2 className="c1tit">
        NEW MEN'S ARRIVAL
        <button>전체리스트</button>
      </h2>
      <div className="flowbx"
      onMouseOver={()=>callSts=0} 
      onMouseOut={()=>{
        callSts=1;flowList($('.flist'));}}>
        <ul className="flist">{makeList()}</ul>
      </div>
    </>
  );
} ////////////// SinSang 컴포넌트 //////////
