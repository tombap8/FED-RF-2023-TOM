// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";

export function Layout(){

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수
  const chgPage = (txt) => goNav(txt); 

    return(
    <dcCon.Provider value={{chgPage}}>
      <TopArea />
      <MainArea />
      <FooterArea />
    </dcCon.Provider>

    );

} /////////// Layout 컴포넌트 ///////////