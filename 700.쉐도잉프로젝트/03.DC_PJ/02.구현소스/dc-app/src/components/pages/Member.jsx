// DC PJ 회원가입 페이지 컴포넌트

// 회원가입 CSS 불러오기
import { Link } from "react-router-dom"
import "../../css/member.css"
import { useState } from "react"

export function Member(){
    // [ 회원가입 페이지 요구사항 ]
    // -> 각 입력항목별로 유효성검사를 실행함
    // -> 특이사항: 글자를 입력할때 마다 검사
    //             +submit버튼작동시 검사

    // [ 상태관리변수 ] /////////
    // [1] 입력요소 상태변수 /////////
    // 1. 아이디변수
    const [userId,setUserId] = useState("");
    // 2. 비밀번호변수
    const [pwd,setPwd] = useState("");
    // 3. 비밀번호확인변수
    const [chkPwd,setChkPwd] = useState("");
    // 4. 사용자이름변수
    const [userName,setUserName] = useState("");
    // 5. 이메일변수
    const [email,setEmail] = useState("");

    // [2] 에러상태관리 변수
    // -> 에러상태값 초기값은 에러아님(false)
    // 1. 아이디변수
    const [userIdError,setUserIdError] = useState(false);
    // 2. 비밀번호변수
    const [pwdError,setPwdError] = useState(false);
    // 3. 비밀번호확인변수
    const [chkPwdError,setChkPwdError] = useState(false);
    // 4. 사용자이름변수
    const [userNameError,setUserNameError] = useState(false);
    // 5. 이메일변수
    const [emailError,setEmailError] = useState(false);

    // [ 아이디관련 메시지 프리셋 ] ////
    const msgId = [
        "User ID must contain a minimum of 5 characters",
        "This ID is already in use!",
        "That's a great ID!",
    ];

    // [ 기타 메시지 프리셋 ]
    const msgEtc = {
        // 비밀번호
        pwd:"5 to 15 digits in the form of special characters, characters, and numbers",
        // 비밀번호확인
        confPwd:"Password verification does not match",
        // 필수입력
        req:"This is a required entry",
        // 이메일
        email:"Please enter a valid email format"
    }; ///// msgEtc ///////

    // [3] 에러메시지 상태변수
    const [idMsg, setIdMsg] = useState(msgId[0]);

    /////////////////////////////////////////

    // [ 유효성 검사 함수 ] ///////
    // 1. 아이디 유효성 검사 ///////////
    const changeUserId = e => {
        // 1. 아이디 유효성 검사식(따옴표로 싸지 말것!)
        const valid = /^[A-Za-z0-9+]{5,}$/;

        // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
        // console.log(e.target.value);

        // 3. 에러아님 상태 if문
        // 조건 : 유효성 검사 결과가 true인가? 에러상태아니면 false
        // 검사방법 : 정규식.test() -> 정규식 검사결과 리턴메서드
        // 결과 : true이면 에러상태값 false 
        //       (false이면 에러상태값 true)
        if(valid.test(e.target.value)){

            // 1.사용중 아이디인지 검사(로컬쓰 셋팅후 추가!)

            // 2. 결과반영하기
            setUserIdError(false);
        } //////////////// if ////////////////
        // 에러일때 ////////////
        else { 
            setUserIdError(true);
        } /////////////// else ///////////////

        // 4. 실제 userId 상태변수값이 업데이트 되어야만 화면에 출력됨
        setUserId(e.target.value);

    }; ///////// changeUserId 함수 //////////


    // 2. 비밀번호 유효성 검사 ///////////
    const changePwd = e => {
        // 1. 비밀번호 유효성 검사식(따옴표로 싸지 말것!)
        const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
        // console.log(e.target.value);

        // 3. 에러에 따른 상태값 변경
        if(valid.test(e.target.value)) setPwdError(false);else setPwdError(true);

        // 4. 기존입력값 반영하기 
        setPwd(e.target.value);

    }; ///////// changeUserId 함수 //////////

    // 3. 비밀번호확인 유효성 검사 ///////////
    const changeChkPwd = e => {
        // 1. 비밀번호 입력내용과 일치여부 확인
        if(pwd===e.target.value) setPwdError(false);
        else setPwdError(true);

        // 2. 기존입력값 반영하기 
        setPwd(e.target.value);
    }; ///////// changeUserId 함수 //////////




    // 리턴 코드 ///////////////////
    return(
        <div className="outbx">
            {/* 회원가입 모듈코드 */}
            <section className="membx">
                <h2>Join Us</h2>
                <form action="process.php" method="post">
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
                                userIdError &&
                                <div className="msg">
                                    <small
                                    style={{
                                        color:'red',
                                        fontSize:'10px'
                                    }}>
                                        {idMsg}
                                    </small>
                                </div>
                            }

                            {
                                // 통과시 메시지출력
                                // 조건문 && 요소
                                // 조건추가 : userId가 입력전일때 안보임처리
                                // userId가 입력전엔 false로 리턴됨!
                                !userIdError && userId &&
                                <div className="msg">
                                    <small
                                    style={{
                                        color:'green',
                                        fontSize:'10px'
                                    }}>
                                        {msgId[2]}
                                    </small>
                                </div>
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
                                pwdError &&
                                <div className="msg">
                                    <small
                                    style={{
                                        color:'red',
                                        fontSize:'10px'
                                    }}>
                                        {msgEtc.pwd}
                                    </small>
                                </div>
                            }

                        </li>
                        <li>
                            {/* 3.비밀번호확인 */}
                            <label>Confirm Password : </label>
                            <input 
                                type="password"
                                maxLength="20"
                                placeholder="Please enter your Confirm Password"
                            />


                        </li>
                        <li>
                            {/* 4.이름 */}
                            <label>User Name : </label>
                            <input 
                                type="text"
                                maxLength="20"
                                placeholder="Please enter your Name"
                            />

                        </li>
                        <li>
                            {/* 5.이메일 */}
                            <label>Email : </label>
                            <input 
                                type="text"
                                maxLength="50"
                                placeholder="Please enter your Email"
                            />

                        </li>
                        <li style={{overflow:'hidden'}}>
                            {/* 6.버튼 */}
                            <button className="sbtn">
                                Submit
                            </button>
                        </li>
                        <li>
                            {/* 7. 로그인 페이지링크 */}
                            Are you already a Member?
                            <Link to="/login">Log In</Link>
                        </li>
                    </ul>
                </form>
            </section>

        </div>
    )
} //////////// Member 컴포넌트 ////////////////

