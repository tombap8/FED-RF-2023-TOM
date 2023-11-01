// 컨텍스트 불러오기
import { 누구냐 } from "./cont_provider";

function 이야기(){
    // 컨텍스트를 사용하려면 useContext()사용함!
    const 맘대로 = React.useContext(누구냐);
    // 공유 컨텍스트인 누구냐 를 사용함!

    // 선택된 배열 데이터 거르기
    const selData = 
    맘대로.myData.find(v=>{
        if(v.이름==맘대로.myVal) return true;
    });

    // 현재산 제외 배열 데이터 거르기
    const btnData = 
    맘대로.myData.filter(v=>{
        if(v.이름!=맘대로.myVal) return true;
    });

    console.log('선택데이터:',btnData);

    // 넘어온 데이터 찍기
    // console.log(맘대로.myVal);


    return( 
        <div style={{
            position:'relative',
            padding:'20px',
            border:'10px dotted skyblue',
            borderRadius:'10px',
            width:'60%',
            margin:'20px auto',
            textAlign:'center'
        }}>
            {/* 제목 */}
            <h1>{맘대로.myVal}</h1>
            {/* 이미지 */}
            <img 
                src={selData.이미지} 
                alt={selData.이름} 
                style={{width:'100%'}} />

            {/* 산정보 박스 */}
            <div style={{
                position:'absolute',
                width:'50%',
                bottom: '105px',
                left:'20px',
                padding:'15px',
                fontSize:'16px',
                color:'#fff',
                textShadow:'0 0 5px #000',
                textAlign:'left',
                borderRadius:'20px',
                backgroundColor:'rgb(0 0 0 / .4)'
            }}>
                <ul>
                    <li>이름 : {selData.이름}</li>
                    <li>설명 : {selData.설명}</li>
                    <li>높이 : {selData.높이}</li>
                    <li>융기 : {selData.융기}</li>
                    <li>최초등반 : {selData.최초등반}</li>
                    <li>최초등반가 : {selData.최초등반가}</li>
                    <li>산맥 : {selData.산맥}</li>
                </ul>
            </div>

            {/* 현재산빼고 나머지산 버튼만들기
            이 버튼 클릭시 메인 컴포넌트의 상태훜변수가
            업데이트 되어 전체가 변경됨!
            -> changeMyVal() 메서드를 사용!
            컨텍스트 프로바이더에서 제공함! */}
            <div>
                {
                    btnData.map(v=>
                        <button 
                        onClick={()=>
                        맘대로.changeMyVal(v.이름)} 
                        style={{
                            padding:'15px',
                            fontSize:'20px',
                            margin:'10px'
                        }}>
                            {v.이름}
                        </button>
                        )
                }
            </div>


        </div>
    );

}

export default 이야기;
