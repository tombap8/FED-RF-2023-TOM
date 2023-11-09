// MainArea 컴포넌트

import { Character } from "../contents/Charactor";
import { Comics } from "../contents/Comics";
import { Games } from "../contents/Games";
import { Main } from "../contents/Main";
import { Movies } from "../contents/Movies";
import { News } from "../contents/News";
import { Video } from "../contents/Video";

export function MainArea(props) {
  // cat 속성으로 메뉴분류 전달

  return (
    <main className="cont">
      {props.cat == "main" && 
      <Main cat={props.cat} />}
      {props.cat == "CHARACTERS" && 
      <Character cat={props.cat} />}
      {props.cat == "COMICS" && 
      <Comics cat={props.cat} />}
      {props.cat == "MOVIES" && 
      <Movies cat={props.cat} />}
      {props.cat == "GAMES" && 
      <Games cat={props.cat} />}
      {props.cat == "NEWS" && 
      <News cat={props.cat} />}
      {props.cat == "VIDEO" && 
      <Video />}
    </main>
  );
} ///////// MainArea 컴포넌트 ////////////
