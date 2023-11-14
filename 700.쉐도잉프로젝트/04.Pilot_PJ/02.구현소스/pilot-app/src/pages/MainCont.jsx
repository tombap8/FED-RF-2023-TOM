// 메인 페이지 컨텐츠 컴포넌트

import { Banner } from "../modules/Banner";

export function MainCont(){

    return(
        <>
            {/* 1. 배너페이지 */}
            <section className="page" 
            style={{background:'lightblue'}}>
                <Banner />
            </section>
            <section className="page" 
            style={{background:'lightcoral'}}>
                
            </section>
            <section className="page" 
            style={{background:'lightgreen'}}>
                
            </section>
            <section className="page" 
            style={{background:'lightseagreen'}}>
                
            </section>
            <section className="page" 
            style={{background:'lightpink'}}>
                
            </section>
        </>
    )

} //////// MainCont 컴포넌트 ///////