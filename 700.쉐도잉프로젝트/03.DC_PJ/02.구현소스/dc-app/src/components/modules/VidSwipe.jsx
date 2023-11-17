// DC PJ 비디오스와이프 컴포넌트

/* 
[ 구조정의 ]
Root>
section.vidswbox >
    ( h2.tit + <SwiperVid />) +
    ( section.vidbx > 
        div.playvid >
            h2.ifrtit + iframe + button.cbtn )
*/

// 비디오스와이프 CSS 불러오기
import "../../css/vid_swipe.css"

export function VidSwipe(){

    // 리턴코드 //////////////////
    return(
        <>
        {/* 모듈코드 */}
        <section className="vidswbox">
            {/* 1. 모듈타이틀 */}
            <h2 className="tit">비디오스와이프</h2>
            {/* 2. 스와퍼 컴포넌트 */}

            {/* 3. 비디오 재생창 */}
            <section className="vidbx">
                {/* 비디오 중앙박스 */}
                <div className="playvid">
                    {/* 비디오타이틀 */}
                    <h2 className="ifrtit"></h2>
                    {/* 아이프레임 */}
                    <iframe src="" allow="autoplay"></iframe>
                    {/* 닫기버튼 */}
                    <button className="cbtn"></button>
                </div>
            </section>
        </section>
        </>
    );

} /////////// VidSwipe 컴포넌트 ////////////