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
            <h1>{맘대로.myVal}
            {
                // 제목이 '백두산'또는'후지산'이면 이미지출력
                (맘대로.myVal=='백두산'||
                맘대로.myVal=='후지산') && <MyImg />
            }
            </h1>
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

} /////////// 이야기 컴포넌트 //////////////
// 컴포넌트 소멸(unmounting)을 알아보기위한 이미지 컴포넌트
function MyImg(){
    // 랜더링 후 후크관리구역
    React.useEffect(()=>{
        console.log('산이미지가 랜더링되었소?');
        
        // 현재 해당컴포넌트가 제거될 경우 관리구역
        return(()=>{
            console.log('나는 소멸한다~!ㅠ.ㅠ');
            // 소멸하여 이미지가 안나오는 산은 
            // '에베레스트'이므로 메시지를 띄움!
            alert('에베레스트는 세계에서 가장 높은산이다~!');
        }); /////////// return /////////
    
        // 한번만 실행되도록 옵션[] 빈 대괄호해줌!
    },[]); //////// useEffect ////////////

    const isrc = 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybl9tb3VudGFpbl9pY29uX3NpbGhvdWV0dGVfbW9ub3RvbmVfc2ltcGxlX2Flc3RoZXRpY184MDFlMzliNy00MmMwLTQzZjYtYWQyNS04N2IyNjkxYTM3NTgucG5n.png';

    return(
        <img src={isrc} alt='산이미지'
        style={{width:'100px'}} />
    ); ////////// return /////////

} /////////// MyImg 컴포넌트 /////////////////

export default 이야기;
