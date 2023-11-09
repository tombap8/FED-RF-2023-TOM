// 무비페이지 메인컨텐츠

import { Banner } from "./Banner";

export function Movies(props){
    return(
        <>
            <h1 style={{textAlign:'center'}}>
                무비 페이지</h1>
            <Banner category={props.cat} />
        </>
    )

} ////////////  Comics 컴포넌트 ///////////