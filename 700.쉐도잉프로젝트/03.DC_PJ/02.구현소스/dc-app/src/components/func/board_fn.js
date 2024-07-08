// 게시판을 위한 로컬스토리지 생성 JS
/************************************ 
    [ 게시판 기본 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 제목 : tit
    3. 내용 : cont
    4. 첨부파일 : att
    5. 입력날짜 : date
    6. 작성자아이디 : uid
    7. 작성자이름 : unm
    8. 조회수 : cnt
************************************/

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬쓰 클리어!");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initData = () => {
  // 만약 로컬스 "mem-data"가 null이면 만들어준다!
  if (localStorage.getItem("board-data") === null) {
    localStorage.setItem(
      "board-data",
      `
        [
            {
                "idx": "1",
                "uid":"admin",
                "pwd":"1111",
                "unm":"Administrator",
                "eml":"admin@dc.com"
            },
            {
                "idx": "2",
                "uid":"tomtom",
                "pwd":"1111",
                "unm":"Tom",
                "eml":"tom@gmail.com"
            }
        ]
    `
    );
  }
}; ///////////// initData /////////////////

export { clearData, initData };
