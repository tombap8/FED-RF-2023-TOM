// 컨텍스트 불러오기
import { 누구냐 } from "./cont_provider";

function 이야기(){
    // 컨텍스트를 사용하려면 useContext()사용함!
    const 맘대로 = React.useContext(누구냐);
    // 공유 컨텍스트인 누구냐 를 사용함!

    // 넘어온 데이터 찍기
    console.log(맘대로.myData);


    return <div>

    </div>

}

export default 이야기;
