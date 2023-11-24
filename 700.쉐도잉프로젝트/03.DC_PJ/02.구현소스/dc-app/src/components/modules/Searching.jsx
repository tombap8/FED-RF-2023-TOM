// DC PJ 검색모듈 컴포넌트

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Searching(props) {
  // props.kword - 검색어전달
  console.log("전달검색어:", props.kword);

  // 검색리스트 만들기 함수
  const schList = () => {};

  // 엔터키 반응 함수
  const enterKey = () => {};

  // 체크박스검색 함수 ////////
  const chkSearch = () => {};

  // 리턴 코드 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
              onClick={schList}
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              onKeyUp={enterKey}
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="hero" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="hero"
                    className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="hero" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="hero"
                    className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="hero" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="hero"
                    className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx"></div>
      </section>
    </>
  );
} ////////////// Searching 컴포넌트 //////////
