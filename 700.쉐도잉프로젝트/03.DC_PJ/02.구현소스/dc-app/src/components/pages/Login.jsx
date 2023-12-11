// 로그인 페이지 컴포넌트 - Login.jsx

// 디자인은 회원가입과 동일!
import { useState } from "react";
import "../../css/member.css";

// 로컬스 데이터 초기화 함수
import { initData } from "../func/mem_fn";

// 제이쿼리
import $ from "jquery";

export function Login() {
  // [ 상태관리변수 ] /////////
  // [1] 입력요소 상태변수 /////////
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    "This is a required entry", //필수입력
    "ID does not exist", //아이디가 존재하지 않습니다
    "Password doesn't match", //비밀번호가 일치하지 않습니다
  ];
  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "This is a required entry", //필수입력
  }; ///// msgEtc ///////
  // [3] 에러메시지 상태변수
  const [idMsg, setIdMsg] = useState(msgId[0]);

  // [ 유효성 검사 함수 ] ///////
  // 1. 아이디 유효성 검사 ///////////
  const changeUserId = (e) => {
    // 1-1. 빈값 체크
    if (e.target.value !== "") setUserIdError(false);
    else {
      // 빈값일 경우
      // 메시지 띄우기 : "This is a required entry"
      setIdMsg(msgEtc.req);
      // 에러상태값 변경하기
      setUserIdError(true);
    } ///// else ////
    // 1-2. 입력값 반영하기
    setUserId(e.target.value);
  }; ///////// changeUserId 함수 //////////

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 2-1. 빈값 체크
    if (e.target.value !== "") setPwdError(false);
    else {
      // 빈값일 경우
      // 메시지 띄우기 : "This is a required entry"
      setIdMsg(msgEtc.req);
      // 에러상태값 변경하기
      setPwdError(true);
    } ///// else ////
    // 2-2. 입력값 반영하기
    setPwd(e.target.value);
  }; ///////// changePwd 함수 //////////

  // 3. 전체 유효성검사 함수 ////////////
  const totalValid = () => {
    // 3-1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);

    // 3-2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (userId && pwd) return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ////////

  // 4. 서브밋 기능함수 ///////////////
  const onSubmit = (e) => {
    // 4-1.기본 서브밋 이동막기
    e.preventDefault();

    // 4-2. 유효성검사 전체 통과시 ////
    if (totalValid()) {
      console.log("통과!");
        // DB역할의 로컬스에 데이터를 비교한다!

        // 만약 로컬스에 'mem-data'가 없으면
        // 초기화! -> 함수내에 이미 걸러내고 있음!
        initData();

        // 로컬스 'mem-data' 확인하기
        let memData = localStorage.getItem('mem-data');

        // 로컬스 데이터 객체화하기
        memData = JSON.parse(memData);
        console.log(memData);

        // 같은 아이디 검사 상태변수
        let isOK = true;

        // 입력데이터 중 아이디값 비교하기
        


    } ///// if ///////
    // 4-3. 유효성검사 불통과시 /////
    else {
      console.log("실패!");
    } ////// else ///////
  }; //////////// onSubmit 함수 ///////////

  // 리턴코드 ///////////////////////////
  return (
    <div className="outbx">
      {/* 모듈코드 */}
      <section className="membx" style={{ minHeight: "300px" }}>
        <h2>LOG IN</h2>
        <form method="post" action="process.php">
          <ul>
            <li>
              {/* 1.아이디 */}
              <label>ID : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="Please enter your ID"
                value={userId}
                onChange={changeUserId}
              />
              {
                // 에러일 경우 메시지출력
                // 조건문 && 요소
                userIdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {idMsg}
                    </small>
                  </div>
                )
              }

            </li>
            <li>
              {/* 2.비밀번호 */}
              <label>Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Password"
                value={pwd}
                onChange={changePwd}
              />
              {
                // 에러시 메시지출력
                pwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.pwd}
                    </small>
                  </div>
                )
              }
            </li>
            {/* 3.서브밋버튼 */}
            <li>
              <button className="sbtn" onClick={onSubmit}>
                Submit
              </button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}
