// 06.Event : 리액트 이벤트

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/

/////////// 전체 이벤트 적용할 컴포넌트 구성하기 /////////////////
function EventShow(){

    // 1. 컴포넌트에서 사용하는 내부용 함수 작성
    // (1) 소원이 무엇이냐 실행 함수 //////
    const aladin = lamp => { // lamp - 알라딘 주인공 이미지경로
        console.log('aladin함수:',lamp);
        // (1-1) #tbox 인 요소의 내부에 h1요소 넣기
        document.querySelector('#tbox').innerHTML +=
        `<h1 class="tit">소원이 무엇이냐?</h1>`;

        // (1-2) 소원이 무엇이냐 타이틀박스 CSS구성하기
        let tit = document.querySelector('.tit');
        tit.style.cssText = `
            width: 50%;
            padding: 50px 0;
            margin: 0 auto;
            border: 2px solid lime;
            transition: all 2s 1s;
            opacity: 0;
        `;

        // (1-3) 0.5초후 CSS변경으로 타이틀 등장하기
        setTimeout(()=>{
            tit.style.cssText = `
                width: 50%;
                padding: 50px 0;
                margin: 0 auto;
                border: 2px solid lime;
                transition: all 2s 1s;
                opacity: 1;

                border-radius: 50%;
                transform: translateY(-200px);
                font-size: 40px;
                color: white;
                background-color: rgba(0,0,0,.5);
            `;
        }, 500); //////// 타임아웃 /////////




    }; //////// aladin 함수 ////////////////

    // 2. 컴포넌트 리턴은 가장 아랫쪽에서 함!
    return(
        <React.Fragment>
            <div id="tbox" style={{textAlign:"center"}}>
                {/* 소원을 말해봐 이미지 출력 : 
                onmouseover 이벤트적용 */}
                <img src="https://images.chosun.com/resizer/SFIqPKffr3HQHoHFOxKvnN-L2YU=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NVMCI5M33KHBCY4JVHDPWRCBYY.jpg" alt="지니"
                onMouseOver={()=>{
                    aladin('./images/ala4.jpg')}} />
            </div>
            {/* 램프가 들어갈 요소 */}
            <div className="lamp"></div>
            {/* 버튼들 */}
            <button onClick={getLamp}>램프가져오기~!</button>
            <br />
            <button onClick={getFerrari}>
                소원빌기~! 페라리주세요~!!!
            </button>
        </React.Fragment>
    );

} /////////// EventShow 컴포넌트 /////////////////////


// 최초 컴포넌트 출력하기 ///////////
ReactDOM.render(<EventShow />,document.querySelector('#root'));
// ReactDOM.render(어쩌구,저쩌구)
// 어쩌구를 저쩌구에 출력!