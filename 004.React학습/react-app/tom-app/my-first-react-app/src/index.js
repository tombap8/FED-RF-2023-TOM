// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { TopArea } from './dc/TopArea';
// css 도 불러온다!
import './css/index.css';
import { MainArea } from './dc/MainArea';

function App(){
  return(
    <>
    <TopArea />
    <MainArea />
    </>
  )
}


// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector('#root'));
// render메서드로 출력
root.render(<App />);