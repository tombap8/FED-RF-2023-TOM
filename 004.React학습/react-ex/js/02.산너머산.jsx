// 산정보 데이터 불러오기
import { mtInfo } from "./02.sub_com/mountain";

// 컨텍스트 불러오기
import { 누구냐 } from "./02.sub_com/cont_provider";
import { func } from "prop-types";


console.log(mtInfo);

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
    return(
        <누구냐.Provider value={{}}>
            <할아버지 />
            
        </누구냐.Provider>
    );
}

function 할아버지(){
    return(<div></div>);
}