// OPINION 의견 게시판 컴포넌트

// 게시판용 CSS
import { useState } from "react";
import "../../css/board.css";

// 기본 데이터 제이슨 불러오기
import baseData from "../data/board.json";

// 초기데이터 셋업하기
let org;
// 로컬스가 있으면 그것 넣기
if (localStorage.getItem("bdata"))
  org = JSON.parse(localStorage.getItem("bdata"));
// 로컬스 없으면 제이슨 데이터 넣기
else org = baseData;

// console.log(org);

export function Board() {
  // [ 상태관리 변수 셋팅 ] ////////
  // 1. 데이터 변경변수 : 초기데이터로 셋팅함
  const [jsn, setJsn] = useState(org);
  // 2. 게시판 모드관리변수
  const [bdMode, setBdMode] = useState("L");
  // 모드구분값 : CRUD (Create/Read/Update/Delete)
  // C - 글쓰기 / R - 글읽기 / U - 글수정 / D - 글삭제(U에포함!)
  // 상태추가 : L - 글목록
  // 전체 5가지 상태값 : CRUD+L

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
            <tbody>
              <tr>
                <td colSpan="5">There is no data.</td>
              </tr>
            </tbody>

            {/* 하단 페이징 표시부분 */}
            <tfoot>
              <tr>
                <td colSpan="5" className="paging">
                  {/* 페이징번호 위치  */}
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
                  <input type="text" className="name" size="20" readOnly />
                </td>
              </tr>
              <tr>
                <td>Title</td>
                <td>
                  <input type="text" className="subject" size="60" readOnly />
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
                  <input type="text" className="name" size="20" readOnly />
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

      <br />
      {/* 5. 버튼 그룹박스 */}
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              {
                // 리스트 모드(L)
                bdMode === "L" && (
                  <button>
                    <a href="#">Write</a>
                  </button>
                )
              }
              {
                // 글쓰기 모드(C)
                bdMode === "C" && (
                  <>
                    <button>
                      <a href="#">Submit</a>
                    </button>
                    <button>
                      <a href="#">List</a>
                    </button>
                  </>
                )
              }
              {
                // 읽기 모드(R)
                bdMode === "R" && (
                  <button>
                    <a href="#">List</a>
                  </button>
                )
              }
              {
                // 수정 모드(U)
                bdMode === "U" && (
                  <>
                    <button>
                      <a href="#">Submit</a>
                    </button>
                    <button>
                      <a href="#">Delete</a>
                    </button>
                    <button>
                      <a href="#">List</a>
                    </button>
                  </>
                )
              }
              {/* <button>
                <a href="#">Modify</a>
              </button> */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
} //////////// Board 컴포넌트 /////////////
