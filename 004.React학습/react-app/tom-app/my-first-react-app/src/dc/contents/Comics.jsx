// 코믹스페이지 메인컨텐츠

import { Banner } from "./Banner";

export function Comics(props){
    return(
        <>
            <h1 style={{textAlign:'center'}}>
                코믹스 페이지</h1>
            <Banner category={props.cat} />
        </>
    )

} ////////////  Comics 컴포넌트 ///////////