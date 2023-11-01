// 산정보 데이터 불러오기
import { mtInfo } from "./02.sub_com/mountain";

// 컨텍스트 불러오기
import { 누구냐 } from "./02.sub_com/cont_provider";

// 서브 컴포넌트 불러오기
import 이야기 from "./02.sub_com/sub_com";


// console.log(mtInfo);

/********************************************** 
    1. props로 데이터를 전달하여 제목출력하기 
    -> props Down으로 데이터를 하위 컴포넌트에 전달
**********************************************/

// 메인 컴포넌트 ////////////
function MyHome(){
    return <MyRoom aa="세계의 산" bb="🌄" />;
}
// 일반적으로 props down할때 props변수 하나를 써서
// 하위 (점찍어서) 속성으로 접근했으나 중괄호구역 즉,
// 리액트 코드구역을 쓰면 변수명을 개수만큼 직접사용가능함!
function MyRoom({aa,bb}){
    return <MyBag ee={aa} ff={bb} />
}

function MyBag({ee,ff}){
    return <MyEnd ii={ee} jj={ff} />
}

function MyEnd({ii,jj}){
    return <div style={{
        padding: '20px',
        borderRadius:'10px',
        width:'60%',
        margin:'20px auto',
        textAlign:'center',
        fontSize:'40px',
        color:'#fff',
        backgroundImage:'linear-gradient(to bottom,skyblue,navy)'
    }}>🌞{ii + jj}</div>
}

// 화면출력 //////////////
ReactDOM.render(<MyHome />,
document.querySelector('#root1'));





/********************************************** 
    2. 컨텍스트 프로바이더를 사용하여 산정보 셋팅하기
**********************************************/

function 큰집(){

    // 데이터 전달 : 산정보를 할당!
    const myData = mtInfo;
    // console.log(myData);
    // 상태정보 useState를 사용하여 후크기능사용
    // 데이터가 업데이트 되면 그것을 사용하는
    // 컴포넌트도 업데이트 된다!!!!
    // 산이름을 상태변수 후크로 설정!
    const [myVal,setMyVal] = React.useState('백두산');

    // 상태변수를 업데이트하는 함수를 생성!
    const changeMyVal = (val) => {
        setMyVal(val);
        console.log(val);
    }; /////// changeMyVal 함수 /////

    // Provider 의 value속성명은 정해진것!
    // 여기에 할당하여 메인 컴포넌트의 변수를
    // 공유한다!
    return(
        <누구냐.Provider value={{myVal,changeMyVal,myData}}>
            <할아버지 />            
        </누구냐.Provider>
    );
}

function 할아버지(){
    return<아버지 />;
}
function 아버지(){
    return<아들 />;
}
function 아들(){
    return<손녀 />;
}
function 손녀(){
    return<이야기 />;
}

//// 산정보 내용 출력하기 ////////
ReactDOM.render(<큰집 />,
document.querySelector('#root2'));