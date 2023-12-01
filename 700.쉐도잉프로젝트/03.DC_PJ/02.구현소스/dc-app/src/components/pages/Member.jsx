// DC PJ 회원가입 페이지 컴포넌트

// 회원가입 CSS 불러오기
import "../../css/member.css"

export function Member(){
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

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </form>
            </section>

        </div>
    )
} //////////// Member 컴포넌트 ////////////////

