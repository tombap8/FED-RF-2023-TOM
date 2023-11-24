// DC PJ 검색결과 페이지 컴포넌트

import { useLocation } from "react-router-dom";
import { Searching } from "../modules/Searching";

export function SchPage(){

    // 라우터 전달값 받기
    const loc = useLocation();
    const keyword = loc.state.keyword;
    console.log('검색어:',keyword);
    
    return(
        <>
            <h1 className="tit">Search Result</h1>
            <Searching kword={keyword} />
        </>
    )

} //////////// SchPage 컴포넌트 ///////////