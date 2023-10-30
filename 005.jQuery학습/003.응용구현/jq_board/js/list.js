// 리스트 페이지 JS - list.js

// 게시판 데이터 불러오기
import bData from './data.json' assert {type:'json'};

// console.log(bData);

// 데이터 idx의 내림차순으로 정렬변경하기!
bData.sort((a,b)=>
Number(a.idx)==Number(b.idx)?
0:Number(a.idx)>Number(b.idx)?-1:1);
// idx는 숫자데이터로 형변환 비교하여
// a.idx>b.idx 즉 앞에것이 크면 그대로 -1, 작으면 바꾸기 1

// 데이터를 화면 리스트 코드로 변환하여 적용한다!
// 대상: #board tbody
const board = $('#board tbody');

// 데이터 태그 생성후 태그넣기
board.html(
    bData.map(v=>`
        <tr>
            <td>${v.idx}</td>
            <td>${v.tit}</td>
            <td>${v.writer}</td>
            <td>${v.date}</td>
            <td>${v.cnt}</td>
        </tr>
    `).join('')
); ///////// html //////////

// 데이터를 태그로 구성함
// 태그 구조: <tr><td></td>...</tr>
/* 
    [ 매칭 데이터 ]
    <tr>
        <td>번호 - idx</td>
        <td>글 제목 - tit</td>
        <td>글 쓴이 - writer</td>
        <td>등록일자 - date</td>
        <td>조회수 - cnt</td>
    </tr>
*/
