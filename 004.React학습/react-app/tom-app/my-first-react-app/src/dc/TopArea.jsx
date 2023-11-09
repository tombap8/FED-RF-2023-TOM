// 상단영역 컴포넌트
// GNB 데이터
import { Logo } from "./Logo";
import { menu } from "./data/gnb";

export function TopArea(){
    return(
        <>
        {/* 1.상단영역 */}
        <header className="top-area">
            {/* 네비게이션 GNB파트 */}
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo />
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}