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

    // [3] 에러메시지 상태변수
    const [idMsg, setIdMsg] = useState(msgId[0]);

    /////////////////////////////////////////

    // 




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
                            />
                            
                        </li>
                        <li>
                            {/* 2.비밀번호 */}
                            <label>Password : </label>
                            <input 
                                type="password"
                                maxLength="20"
                                placeholder="Please enter your Password"
                            />

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

