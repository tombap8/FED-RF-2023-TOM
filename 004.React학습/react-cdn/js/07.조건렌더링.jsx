// 07.리액트 : 조건 렌더링  + 리스트 렌더링

/**************************************** 
    1. if문을 사용하여 조건부 렌더링하기
    - 리액트에서는 조건부로 구성요소를
    렌더링 할 수 있다!
****************************************/

// 선택적으로 로딩하도록 컴포넌트를 2개 만들기

// 1번 컴포넌트
function MakeDev(){
    return <h1>나는 개발자야!</h1>;
} ////////// MakeDev 컴포넌트 //////////

// 2번 컴포넌트
function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
} ////////// MakeDev 컴포넌트 //////////

// 3번 컴포넌트 : 이미지생성
function MakeImg(props){
    return <img 
        src={props.isrc}
        alt={props.ialt}
        title={props.itit} />;

} ////////// MakeImg 컴포넌트 ////////////

// 출력 메인 컴포넌트 /////
// 셋팅할 변수 : isDev, isrc, ialt, itit
function Developer(props){
    const isNow = props.isDev; //  true / false

    // 조건문
    if(isNow){
        return(
            <React.Fragment>
                {/* MakeDev 컴포는트 선택출력 */}
                <MakeDev />
                <MakeImg
                    isrc={props.isrc}
                    ialt={props.ialt}
                    title={props.itit} />
            </React.Fragment>
        );

    } ////////// if ////////////

    // if문에 걸리면 그 안에서 return됨
    // 안걸리면 else문 없이도 여기 return됨!
    return(
        <React.Fragment>
            {/* MakeDev 컴포는트 선택출력 */}
            <LostDev />
            <MakeImg
                isrc={props.isrc}
                ialt={props.ialt}
                itit={props.itit} />
        </React.Fragment>
    );

} ////////// Developer 컴포넌트 /////////

// 이미지경로 배열
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

// 컴포넌트 호출하기1 : 개발자찍기
ReactDOM.render(
<Developer 
isDev={true}
isrc={devImg[0]}
ialt="개발자 공유"
itit="프론트엔드 개발자 공유입니다!"
/>, document.querySelector('#root1'));

// 컴포넌트 호출하기2 : 비개발자찍기
ReactDOM.render(
<Developer 
isDev={false}
isrc={devImg[1]}
ialt="주먹왕 마동석"
itit="개발자가 뭡니까?"
/>, document.querySelector('#root2'));
