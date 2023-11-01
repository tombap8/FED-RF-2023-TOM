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

    console.log('선택데이터:',selData);

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
            


        </div>
    );

}

export default 이야기;
