// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트
import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  return(
    <h1>나는누구?</h1>
  )
}


// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector('#root'));
// render메서드로 출력
root.render(<App />);