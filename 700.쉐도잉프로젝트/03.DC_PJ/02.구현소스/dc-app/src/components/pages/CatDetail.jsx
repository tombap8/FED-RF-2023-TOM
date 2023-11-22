// DC PJ 캐릭터 상세페이지
// -> 캐릭터 리스트로 부터 라우팅 이동하여 보이는 페이지

import { Banner } from "../modules/Banner";
import { useLocation } from "react-router-dom";

// 캐릭터 상세 페이지 CSS불러오기
import "../../css/cat_detail.css";

export function CatDetail(){
    // 라우터 호출시 전달한 값을 받는다!
    // 라우터 전달값을 받기위해 useLocation 생성하기!
    const loc = useLocation();

    // 구체적으로 state속성 하위 전달된 객체속성명으로 받는다!
    // 1. 캐릭터 이름
    const cname= loc.state.cname;
    // 2. 캐릭터 설명
    const cdesc= loc.state.cdesc;
    // 3. 캐릭터 명세
    const facts= loc.state.facts;

    // console.log(cname,cdesc,facts);

    return(
        <>
            {/* 1. 배너 컴포넌트 */}
            <Banner category={cname} />
            {/* 2. 상세정보박스 */}
            <div className="detail">
                {/* 2-1. 캐릭터 설명박스 */}
                <div className="desc-box">
                    <h2>{cname}</h2>
                    <div className="cdesc">
                        <p>{cdesc}</p>
                    </div>
                </div>
                {/* 2-2. 캐릭터 명세 */}
                <div className="facts">
                    <div>
                        <h3>CHARACTER FACTS</h3>
                        <p>{facts}</p>
                    </div>
                </div>
            </div>
        
        </>
    )

} /////////// CatDetail 컴포넌트 ////////////////