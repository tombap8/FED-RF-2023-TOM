// OPINION 의견 게시판 컴포넌트

// 게시판용 CSS
import { Fragment, useCallback, useContext, useRef, useState } from "react";
import "../../css/board.css";

// 컨텍스트 API 불러오기
import { dcCon } from "../modules/dcContext";

// 로컬스토리지 사용자정보 생성 JS
import { initData } from "../func/mem_fn";

// 제이쿼리
import $ from "jquery";

// 기본 데이터 제이슨 불러오기
import baseData from "../data/board.json";

// 기본 데이터 역순정렬
baseData.sort((a, b) => {
  return Number(a.idx) === Number(b.idx)
    ? 0
    : Number(a.idx) > Number(b.idx)
    ? -1
    : 1;
});

// 초기데이터 셋업하기(원본데이터 담기)
let orgData;
// 로컬스가 있으면 그것 넣기
if (localStorage.getItem("bdata"))
  orgData = JSON.parse(localStorage.getItem("bdata"));
// 로컬스 없으면 제이슨 데이터 넣기
else orgData = baseData;
// else orgData = [];

// // console.log(org);

// ******* Borad 컴포넌트 ******* //
export function Board() {

  // 기본사용자 정보 셋업 함수 호출
  initData();

  // 컨텍스트 API 사용하기
  const myCon = useContext(dcCon);

  console.log("로그인상태:", myCon.logSts);

  // [컴포넌트 전체 공통변수] /////////////
  // 1. 페이지 단위수 : 한 페이지 당 레코드수
  const pgBlock = 7;
  // 2. 전체 레코드수 : 배열데이터 총개수
  const totNum = orgData.length;
  // console.log("페이지단위수:", pgBlock, "\n전체 레코드수:", totNum);

  // [ 상태관리 변수 셋팅 ] ////////

  // 1. 현재 페이지 번호 : 가장중요한 리스트 바인딩의 핵심!
  const [pgNum, setPgNum] = useState(1);
  // 1. 데이터 변경변수 : 리스트에 표시되는 실제 데이터셋
  const [currData, setCurrData] = useState(null);
  // 2. 게시판 모드관리변수
  const [bdMode, setBdMode] = useState("L");
  // 모드구분값 : CRUD (Create/Read/Update/Delete)
  // C - 글쓰기 / R - 글읽기 / U - 글수정 / D - 글삭제(U에포함!)
  // 상태추가 : L - 글목록
  // 전체 5가지 상태값 : CRUD+L

  /************************************* 
    함수명 : bindList
    기능 : 페이지별 리스트를 생성하여 바인딩함
  *************************************/
  const bindList = () => {
    // console.log("다시바인딩!", pgNum);
    // 데이터 선별하기
    const tempData = [];

    // 시작값 : (페이지번호-1)*블록단위수
    let initNum = (pgNum - 1) * pgBlock;
    // 한계값 : 블록단위수*페이지번호
    let limitNum = pgBlock * pgNum;

    // 블록단위가 7일 경우 첫페이지는 0~7, 7~14,...
    // console.log("시작값:", initNum, "\n한계값:", limitNum);

    // 데이터 선별용 for문 : 원본데이터(orgData)로부터 생성
    for (let i = initNum; i < limitNum; i++) {
      // 마지막 페이지 한계수체크
      if (i >= totNum) break;
      // 코드 푸시
      tempData.push(orgData[i]);
    } ///// for /////

    // console.log("결과셋:", tempData);

    // 데이터가 없는 경우 출력 ///
    if (orgData.length === 0) {
      return (
        <tr>
          <td colSpan="5">There is no data.</td>
        </tr>
      );
    } ////// if /////////

    // if문에 들어가지 않으면 여기를 리턴함!
    return tempData.map((v, i) => (
      <tr key={i}>
        {/* 1. 일련번호 */}
        <td>{i + 1 + initNum}</td>
        {/* 2. 글제목 */}
        <td>
          <a href="#" data-idx={v.idx} onClick={chgMode}>
            {v.tit}
          </a>
        </td>
        {/* 3. 글쓴이 */}
        <td>{v.writer}</td>
        {/* 4. 쓴날짜 */}
        <td>{v.date}</td>
        {/* 5. 조회수 */}
        <td>{v.cnt}</td>
      </tr>
    ));
  }; /////////// bindList 함수 ////////////

  /************************************* 
    함수명 : pagingLink
    기능 : 리스트 페이징 링크를 생성한다!
  *************************************/
  const pagingLink = () => {
    // 페이징 블록만들기 ////
    // 1. 블록개수 계산하기
    const blockCnt = Math.floor(totNum / pgBlock);
    // 전체레코드수 / 페이지단위수 (나머지가 있으면 +1)
    // 전체레코드수 : pgBlock변수에 할당됨!
    // 2. 블록 나머지수
    const blockPad = totNum % pgBlock;

    // 최종 한계수 -> 여분레코드 존재에 따라 1더하기
    const limit = blockCnt + (blockPad === 0 ? 0 : 1);

    // console.log(
    //   "블록개수:",
    //   blockCnt,
    //   "\n블록나머지:",
    //   blockPad,
    //   "\n최종한계수:",
    //   limit
    // );

    // 리액트에서는 jsx문법 코드를 배열에 넣고
    // 출력하면 바로 코드로 변환된다!!!
    let pgCode = [];
    // 리턴 코드 //////////
    // 만약 빈태그 묶음에 key를 심어야할 경우
    // 불가하므로 Fragment 조각 가상태그를 사용한다!
    for (let i = 0; i < limit; i++) {
      pgCode[i] = (
        <Fragment key={i}>
          {pgNum - 1 === i ? (
            <b>{i + 1}</b>
          ) : (
            <a href="#" onClick={chgList}>
              {i + 1}
            </a>
          )}

          {i < limit - 1 ? " | " : ""}
        </Fragment>
      );
    } ////// for /////

    return pgCode;
  }; /////////// pagingLink 함수 ////////

  /************************************* 
    함수명 : chgList
    기능 : 페이지 링크 클릭시 리스트변경
  *************************************/
  const chgList = (e) => {
    let currNum = e.target.innerText;
    // console.log("번호:", currNum);
    // 현재 페이지번호 업데이트! -> 리스트 업데이트됨!
    setPgNum(currNum);
    // 바인드 리스트 호출 불필요!!!
    // 왜? pgNum을 bindList()에서 사용하기때문에
    // 리랜더링이 자동으로 일어남!!!
  }; ///////// chgList 함수 //////////////

  // 선택된 데이터 셋팅을 위한 참조변수
  const cData = useRef(null);

  /************************************* 
    함수명 : chgMode
    기능 : 게시판 옵션 모드를 변경함
  *************************************/
  const chgMode = (e) => {
    // 기본막기
    e.preventDefault();

    // 1. 해당 버튼의 텍스트 읽어오기
    let btxt = $(e.target).text();
    console.log(btxt);

    // 2. 텍스트별 모드 연결하기
    let modeTxt;

    switch (btxt) {
      case "List":
        modeTxt = "L";
        break;
      case "Write":
        modeTxt = "C";
        break;
      case "Modify":
        modeTxt = "U";
        break;
      case "Submit":
        modeTxt = "S";
        break;
      case "Delete":
        modeTxt = "D";
        break;
      default:
        modeTxt = "R";
    }

    console.log("버튼명:", btxt, "모드명:", modeTxt);

    // 3. 모드별 분기하기 //////
    // 3-1. 읽기 모드
    if (modeTxt === "R") {
      // 1. a링크의 'data-idx'값 읽어오기
      let cidx = $(e.target).attr("data-idx");
      console.log("읽기처리", cidx);

      // 2. 해당정보 가져오기 : orgData에서 조회함
      // 전역 참조변수에 저장하여 리랜더링시 리턴코드에
      // 이값이 적용되게 해준다!!!
      cData.current = orgData.find((v) => {
        if (v.idx === cidx) return true;
      });

      console.log("현재Data:", cData.current);

      setBdMode("R");

      // -> 아래의 방식은 스크립트로 DOM에 셋팅하는 방법
      // ->>> 리액트는 가상돔에 데이터를 셋팅하도록 해야함!
      // cData를 참조변수로 만들어서 미리 데이터를 셋팅했음!

      // 3. 읽기모드 입력창에 데이터 매칭하여 넣기
      // $(()=>{ // DOM그린후 실행함!
      //   // (1) 글쓴이
      //   $(".readone .name").val(cData.writer);
      //   // (2) 글제목
      //   $(".readone .subject").val(cData.tit);
      //   // (3) 글내용
      //   $(".readone .content").val(cData.cont);
      // });
    } ////// if ///////

    // 3-2. 리스트 이동하기 ///////
    else if (modeTxt === "L") {
      setBdMode("L");
    } ////// else if ///////

    // 3-3. 쓰기 모드 //////////////
    else if (modeTxt === "C") {
      setBdMode("C");

      // 1. 글쓴이와 이메일은 로그인상태값에서 읽어와서
      // 본 읽기전용 입력창에 넣어준다!
      // 지금은 임시로 tomtom / tom@gmail.com
      $(() => {
        // DOM 그려진 후 실행
        // (1) 글쓴이
        $(".writeone .name").val("tomtom");
        // (2) 이메일
        $(".writeone .email").val("tom@gmail.com");
      });
    } ////// else if ///////

    // 3-4. 글쓰기 서브밋 /////////
    else if (modeTxt === "S" && bdMode === "C") {
      console.log("글쓰기 서브밋");

      // 1. 제목, 내용 필수입력 체크
    } ////// else if ///////

    // 3-5. 수정모드 /////////
    else if (modeTxt === "U") {
      console.log("수정모드");

      setBdMode("U");
    } ////// else if ///////

    // 4-2. 쓰기 모드 : 모드변경없이 처리후 리스트보내기
    // else if(modeTxt==="C" && btxt==="Submit"){
    //   console.log("쓰기처리");
    // } ////// else if ///////
    // 4-3. 수정하기 모드 : 모드변경없이 처리후 리스트보내기
    // else if(modeTxt==="U" && btxt==="Submit"){
    //   console.log("수정처리");
    // } ////// else if ///////
    // 4-4. 삭제하기 모드 : 모드변경없이 처리후 리스트보내기
    // else if(modeTxt==="U" && btxt==="Delete"){
    //   console.log("삭제처리");
    // } ////// else if ///////
  }; //////// chgMode 함수 ///////////

  // 사용자 정보 변환함수 //////////
  const chgUsrInfo = usr => {
    // 사용자 정보조회 로컬스(mem-info)
    // 보드 상단에서 null일경우 생성함수 이미 호출!
    // null을 고려하지 말고 코드작성!

    // 1. 로컬스 원본 데이터 조회
    const info = JSON.parse(
      localStorage.getItem('mem-data'));
    console.log(info);

    // 2. 원본으로 부터 해당 사용자 정보 조회
    const cUser = info.find(v=>{
      if(v.uid===usr) return true;
    })

    console.log(cUser);


    

  }; ///////// chgUsrInfo 함수 ////////

  // 리턴코드 ////////////////////
  return (
    <>
      {
        /* 1. 게시판 리스트 : 게시판 모드 'L'일때 출력 */
        bdMode === "L" && (
          <table className="dtbl" id="board">
            <caption>OPINION</caption>
            {/* 상단 컬럼명 표시영역 */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Writer</th>
                <th>Date</th>
                <th>Hits</th>
              </tr>
            </thead>

            {/* 중앙 레코드 표시부분 */}
            <tbody>{bindList()}</tbody>

            {/* 하단 페이징 표시부분 */}
            <tfoot>
              <tr>
                <td colSpan="5" className="paging">
                  {/* 페이징번호 위치  */}
                  {pagingLink()}
                </td>
              </tr>
            </tfoot>
          </table>
        )
      }
      {
        /* 2. 글쓰기 테이블 : 게시판 모드 'C'일때 출력 */
        bdMode === "C" && (
          <table className="dtblview writeone">
            <caption>OPINION : Write</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input type="text" className="name" size="20" readOnly />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="text" className="email" size="40" readOnly />
                </td>
              </tr>
              <tr>
                <td>Title</td>
                <td>
                  <input type="text" className="subject" size="60" />
                </td>
              </tr>
              <tr>
                <td>Content</td>
                <td>
                  <textarea className="content" cols="60" rows="10"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        )
      }
      {
        /* 3. 읽기 테이블 : 게시판 모드 'R'일때 출력 */
        bdMode === "R" && (
          <table className="dtblview readone">
            <caption>OPINION : Read</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    className="name"
                    size="20"
                    readOnly
                    value={chgUsrInfo(cData.current.uid)}
                  />
                </td>
              </tr>
              <tr>
                <td>Title</td>
                <td>
                  <input
                    type="text"
                    className="subject"
                    size="60"
                    readOnly
                    value={cData.current.tit}
                  />
                </td>
              </tr>
              <tr>
                <td>Content</td>
                <td>
                  <textarea
                    className="content"
                    cols="60"
                    rows="10"
                    readOnly
                    value={cData.current.cont}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        )
      }
      {
        /* 4. 수정(삭제) 테이블 : 게시판 모드 'U'일때 출력 */
        bdMode === "U" && (
          <table className="dtblview updateone">
            <caption>OPINION : Modify</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    className="name"
                    size="20"
                    readOnly
                    value={cData.current.writer}
                  />
                  {/* value는 수정불가! */}
                </td>
              </tr>
              <tr>
                <td>Title</td>
                <td>
                  <input
                    type="text"
                    className="subject"
                    size="60"
                    defaultValue={cData.current.tit}
                  />
                  {/* defaultValue로 써야 수정가능! */}
                </td>
              </tr>
              <tr>
                <td>Content</td>
                <td>
                  <textarea
                    className="content"
                    cols="60"
                    rows="10"
                    defaultValue={cData.current.cont}
                  ></textarea>
                  {/* defaultValue로 써야 수정가능! */}
                </td>
              </tr>
            </tbody>
          </table>
        )
      }

      <br />
      {/* 5. 버튼 그룹박스 */}
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              {
                // 리스트 모드(L)
                bdMode === "L" && myCon.logSts !== null && (
                  <button onClick={chgMode}>
                    <a href="#">Write</a>
                  </button>
                )
              }
              {
                // 글쓰기 모드(C)
                bdMode === "C" && (
                  <>
                    <button onClick={chgMode}>
                      <a href="#">Submit</a>
                    </button>
                    <button onClick={chgMode}>
                      <a href="#">List</a>
                    </button>
                  </>
                )
              }
              {
                // 읽기 모드(R)
                bdMode === "R" && (
                  <>
                    <button onClick={chgMode}>
                      <a href="#">List</a>
                    </button>
                    <button onClick={chgMode}>
                      <a href="#">Modify</a>
                    </button>
                  </>
                )
              }
              {
                // 수정 모드(U)
                bdMode === "U" && (
                  <>
                    <button onClick={chgMode}>
                      <a href="#">Submit</a>
                    </button>
                    <button onClick={chgMode}>
                      <a href="#">Delete</a>
                    </button>
                    <button onClick={chgMode}>
                      <a href="#">List</a>
                    </button>
                  </>
                )
              }
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
} //////////// Board 컴포넌트 /////////////
