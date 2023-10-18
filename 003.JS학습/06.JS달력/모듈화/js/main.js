// 달력 컴포넌트를 부르는 메인 JS - main.js


// 달력 컴포넌트 불러오기
import DalCom from "./calendar.js";

// 달력 컴포넌트 함수 호출하여 달력 셋팅하기!
// 대상: .dalcom1, .dalcom2
new DalCom('.dalcom1');

const dc2 = new DalCom('.dalcom2');
// 요구사항: 두번째 달력은 다음달 달력이 처음에 출력되게함!
// 다음달 달력을 쓸 수 있게 이전/다음달 달력변경 내부함수를
// 생성자함수에 this키워드로 등록하여 노출해야한다!!!
dc2.chgCalendar(1);