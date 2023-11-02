// 리스트 업데이트 JS - update_list.js

// 게시판 데이터 불러오기
import bData from './data.json' assert {type:'json'};

// console.log(bData);

// 데이터 idx의 내림차순으로 정렬변경하기!
bData.sort((a,b)=>
Number(a.idx)==Number(b.idx)?
0:Number(a.idx)>Number(b.idx)?-1:1);
// idx는 숫자데이터로 형변환 비교하여
// a.idx>b.idx 즉 앞에것이 크면 그대로 -1, 작으면 바꾸기 1

console.log(Array.isArray(bData));

// let aaa = JSON.parse(bData);
// 원본 배열데이터를 문자형 데이터로 변경!
let myData = JSON.stringify(bData)
// console.log(myData);



////////////////////////////////////////
// 로컬 스토리지 생성하기 /////////
// 이름 : boardData
if(!localStorage.getItem('boardData')){
    localStorage.setItem('boardData',myData)
}

// console.log(localStorage.getItem('boardData'));




////////////////////////////////////////

let useData = JSON.parse(localStorage.getItem('boardData'));

console.log("변환후:",useData);




// 데이터를 화면 리스트 코드로 변환하여 적용한다!
// 대상: #board tbody
const board = $('#board tbody');

// 리스트 번호변수
let listNum = 0;

// 숫자1씩증가 함수
const addNum = () => ++listNum;

// console.log('증가수:',addNum());


// 페이징 되는 리스트 만들기 //////////////
// 페이징의 기본 원리:
// 1. 한페이지당 리스트수를 정하여 전체 페이지 개수 구하기
// 2. 개수만큼 리스트에 데이터를 반복문으로 생성함
// 3. 페이지 번호에 따라 시작번호를 업데이트 한다 

// 페이징 관련 변수들 /////
// [1] 한페이지당 리스트수 : pgBlock
const pgBlock = 9;
// [2] 페이지 순번 : pgNum -> 증감예정!
let pgNum = 1;
// [3] 전체 레코드 수 : totalCnt
const totalCnt = bData.length;
// [4] 페이징 블록 계산하기
let pagingBlock = Math.floor(totalCnt/pgBlock);
// [5] 나머지 리스트 여부 : 0이면 다음 페이지 없음!
let addOver = totalCnt % pgBlock;

///// 여기서 부터 업데이트가 페이지별로 반복됨! ////////


export const updateList = (newPgNum) => { 
    // newPgNum - 새롭게 전달되는 현재 페이지번호
    pgNum = newPgNum; // 기존 페이지번호를 업데이트함!

// [6] 시작번호 업데이트
listNum = (pgNum-1)*pgBlock;

let hcode = '';
// 리스트 블록으로 리스트 소스 만들기
for(let i = (pgNum-1)*pgBlock; i < pgBlock*pgNum; i++){
    // i가 전체 개수보다 같거나 크면 break (for문 나가기!)
    console.log(i);
    if(i >= totalCnt) break;

    hcode +=
        `
            <tr>
                <td>${addNum()}</td>
                <td>${bData[i].tit}</td>
                <td>${bData[i].writer}</td>
                <td>${bData[i].date}</td>
                <td>${bData[i].cnt}</td>
            </tr>
        `;
} //////// for //////////

// 코드 반영하기 ///
board.html(hcode);

console.log(`pgBlock:${pgBlock
}\npgNum:${pgNum}\ntotalCnt:${totalCnt
}\npagingBlock:${pagingBlock}\naddOver:${addOver}`);



/////// 페이지 이동 링크 페이징 만들기 //////
// 대상: .paging
// 링크생성 원리: 블록개수만큼 숫자로 만든다
// 사용데이터 : pagingBlock - 기본 페이지수 / 
//              addOver - 추가 페이지여부
const pNumBlock = $('.paging');
let pNumCode = '';

// 새로운 블록을 위한 변수
let newPagingBlock;
// 추가 리스트가 있을경우 나머지가 0아니므로 다음페이지추가!
if(addOver!=0) newPagingBlock = pagingBlock+1;

// 페이지 링크 a요소 만들기 /////
for(let x=0; x< newPagingBlock; x++){
    // 현재페이지만 b태그/ 나머지는 a태그사용
    // 현재페이지는  pgNum 이므로( x+1 == pgNum )
    pNumCode += 
        x+1 == pgNum?
        `<b>${x+1}</b>`:
        `<a href="#">${x+1}</a>`;
    // 마지막 뒤에 바 안생김
    if(x < newPagingBlock-1) pNumCode += ' | ';
} /////////// for ///////////////////

pNumBlock.html(pNumCode);

// 새로생성된 a링크에 click이벤트 함수로
// 리스트 업데이트 함수 호출하기!
$('.paging a').click(function(e){
    // 기본이동막기
    e.preventDefault();
    // 클릭된 a요소의 숫자 읽어오기
    let atxt = $(this).text();
    // console.log('숫자:',atxt);
    // 리스트업데이트 함수 호출!
    updateList(atxt);
}); ////////// click //////////////


}; /////////// updateList 함수 ///////////////