// OPINION 의견 게시판 컴포넌트

// 게시판용 CSS
import "../../css/board.css";

export function Board() {
    // [ 상태관리 변수 셋팅 ] ////////
    


  // 리턴코드 ////////////////////
  return (
    <>
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
    </>
  );
} //////////// Board 컴포넌트 /////////////
