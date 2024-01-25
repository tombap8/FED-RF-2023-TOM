// 뷰엑스 스토아 구현 JS 

// 스토아 JS 불러오기 ////
import store from "./store.js";
// default로 내보내기 후 기본이름은 store임!

// [ 중요!!! ]
// 뷰인스턴스에 스토아를 사용할 수 있게 등록해줘야함!
// 등록방법: new Vue({el:"",store,methods:{}})
// -> 스토아 변수를 그대로 써주면 된다!!!

// [1] 컴포넌트 셋팅하기 //////////////
// 1. 상단영역 컴포넌트 셋팅
Vue.component('top-area',{
    // (1) 템플릿 설정
    template:`
        <header>
            <ul>
                <li>
                    <a href="#"
                    v-on:click="changeData('서울')"
                    >서울</a>
                </li>
                <li>
                    <a href="#"
                    v-on:click="changeData('부산')"
                    >부산</a>
                </li>
                <li>
                    <a href="#"
                    v-on:click="changeData('제주')"
                    >제주</a>
                </li>
            </ul>

        </header>
    `,
    // (2) 리턴데이터 설정
    data(){
        return{};
    },
    // (3) 메서드 설정
    methods:{
        // 스토아 변수 업데이트 메서드
        changeData(pm){
            console.log('업데이트:',pm);
        }, ////// changeData 메서드 //////
    }
});

// 2. 메인영역 컴포넌트 셋팅
Vue.component("main-area",{
    /* 
        컴포넌트 영역은 뷰JS에서 해석되는 부분이므로
        뷰엑스 스토어의 변수 store를 
        전역 표시 $store
        라고 표기해야 유효하다!(에러없음)
        더 정확한 문법은 this.$store 라고 써야하지만
        이 파일이 일반 JS에서 실행되므로 변수할당된
        뷰JS 인스턴스 영역안에서 실행되므로
        뷰인스턴스 자신인 this를 쓰지 않아도
        자동적으로 this로 처리된다!
    */
    template:`
        <main>
            <img 
            v-bind:src="$store.state.imgSrc" 
            alt="지역이미지">
            <p
            v-text="$store.state.desc"
            ></p>
        </main>
    `,
    data(){
        return{
        }
    },
    methods:{

    }
});
// 3. 하단영역 컴포넌트 셋팅
Vue.component("info-area",{
    template:`
        <footer>
            <address>
                서울시 강남구 역삼동 119 뷰엑스B
            </address>
        </footer>
    `,
    data(){
        return{}
    },
    methods:{

    }
});



// [2] 뷰 인스턴스 생성하기 /////////////
// 대상요소: #app
new Vue({
    // 대상선정
    el:"#app",
    store, // 중요!!! 뷰엑스 스토아 등록!
    data:{
        // 변수:값
    },
    methods:{
        // 메서드(){}
    },
    // 데이터 셋팅구역 : 인스턴스 생성직후(created)
    created(){
        /* 
        스토어에 있는 initSet 메서드는 어떻게 호출하지?
        스토어 호출 메서드가 따로 있음!
        store.commit("메서드명",파라미터값)
        1. 메서드명은 반드시 문자형으로 입력한다!
        2. 파라미터는 단일값 또는 객체형식을 보낼 수 있음
        인스턴스 내부구역 코딩시 store에 $없음!
        */
       store.commit('initSet',{
        url:"https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg",
        txt:"도시소개에 오신것을 환영합니다!",
       })

    }, //// created ////
    // DOM 생성후 실행구역(mounted) : 제이쿼리(JS) 코드
    mounted(){

    }, //// mounted /////


});