// 01.컴포넌트 연습1 JS

// 뷰JS 인스턴스 생성용 함수 : x 는 대상요소
const makeVue = x => new Vue({el:x});

// 1. 제목에 넣을 전역 컴포넌트 만들기
// Vue.component(캐밥케이스컴포넌트태그명,{옵션})
// 이것으로 생성함!
Vue.component("tit-comp",{
    template:`
        <strong>
            <span>
                😊Vue JS😜 컴포넌트 : 
            </span>
            쇼핑모~~~올 갤러리 리스트
        </strong>
    `
}); //////// 전역 컴포넌트1 ///////

// 컴포넌트를 먼저 만들고나서 뷰인스턴스 생성함!

// 뷰인스턴스 생성하기!!!
makeVue(".tit");

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기
Vue.component("list-comp",{
    // 2-1. template 옵션 : 태그구성
    template:`
    <div data-num="1">
        <img src="img_gallery/1.jpg" alt="dress"> 
        <aside>
            <h2>상품명1</h2> 
            <h3>상품가격1</h3>
        </aside>
    </div>
    `,
    // 2-2. data 옵션 : 컴포넌트 내부 변수셋팅
    data:function(){
        // 템플릿에서 사용할 변수는 반드시 리턴함!
        // 속성:값으로 구성된 객체를 리턴한다!
        return{
            // 이미지 src
            gsrc : ``,
            // 상품명
            gname : ``,
            // 상품가격
            gprice : ``,
        }
    },
}); ////////// 전역컴포넌트2 /////////////

