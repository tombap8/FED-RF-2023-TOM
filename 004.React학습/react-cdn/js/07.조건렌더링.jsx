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
                    itit={props.itit} />
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

/********************************************** 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
**********************************************/

// 개발자의 취향을 알아보자!!!

// 2-1. 제목을 찍기위한 타이틀 컴포넌트
function Title(props){ // 컴포넌트 호출시 tit를 셋팅함
    return <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {props.tit}</h1>;
} /////////// Title 컴포넌트 ///////////


// 음식리스트
const foods = ["스파게티","짜파게티","냉면","짜장면","마라탕"];

// 2-2. 반복리스트를 위한 컴포넌트 ////////
function FoodList(props){ // 음식명은 fname에 담아서 전달한다!
    return <li>개발자는 {props.fname} 좋아해!</li>;
} /////// FoodList 컴포넌트 /////////////

// 2-3. 개발자 선호 음식 리스트 출력 컴포넌트 //////
function WishList(props){ // wlist 속성에 담아서 보내준다!
    // 위시리스트 담기
    const myFood = props.wlist;
    // 코드리턴
    return(
        <React.Fragment>
            <Title tit="음식" />
            {/* 음식 위시리스트의 길이가 0보다 클때만 출력 */}

            <div>
                <h2>
                    개발자가 좋아하는 음식은 모두
                    {myFood.length}가지 입니다!
                </h2>
                <ul>
                    {
                        // 배열변수.map() 메서드 사용!
                        // map(변수=>바로리턴컴포넌트)
                        // 리액트 map()은 JS map()과 다름!
                        // 맵쪼잉! 하지 않으니까~~!
                        myFood.map(x=><FoodList fname={x} />)
                    }
                </ul>
            </div>
            
        </React.Fragment>
    );
} ///////// WishList 컴포넌트 ///////////////
