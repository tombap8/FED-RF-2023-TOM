// 뷰엑스 스토아 - 전역뷰데이터 저장소!!!

////// 뷰엑스 스토아를 활용한 변수 셋팅하기 ///////
// [뷰엑스 스토어 인스턴스를 생성한다!!!] //////

export const store = new Vuex.Store({
    // 1. 데이터 셋팅구역
    state:{
        // 도시 데이터 셋업
        cityData:{
            "서울":{
                이미지:`https://www.shutterstock.com/image-photo/songpagu-seoul-south-korea-september-260nw-2094838786.jpg`,
                설명:`대한민국의 수도인 서울을 지방자치단체인 특별시로 부르는 명칭이다. 한반도 중앙에 있으며, 한강을 사이에 두고 남북으로 펼쳐져 있다. 북쪽 끝은 도봉구 도봉동, 동쪽 끝은 강동구 상일동, 남쪽 끝은 서초구 원지동, 서쪽 끝은 강서구 오곡동이다. 시청은 중구 을지로1가(태평로1가 31)에 있다.`
            },
            "부산":{
                이미지:`https://imagescdn.gettyimagesbank.com/500/201901/jv11336724.jpg`,
                설명:`대한민국 제2의 도시이자, 제1의 무역항이다. 동쪽과 남쪽은 바다에 면하고, 서쪽은 김해시 장유동과 창원시 진해구, 북쪽은 양산시 물금읍과 김해시 대동면, 동쪽은 울산광역시 서생면·온양읍에 접한다. 대한민국 남동단의 관문으로 서울특별시에서 남동쪽으로 약 450km, 대한해협을 끼고 일본 시모노세키[下關]와 약 250km 떨어져 있다. 1군 15구로 이루어져 있으며, 면적은 765.94㎢이다. 시청 소재지는 부산광역시 연제구 연산5동 1000번지이다.`
            },
            "제주":{
                이미지:`https://www.jejusori.net/news/photo/202211/409902_416608_4312.jpg`,
                설명:`한국·중국·일본 등 극동 지역의 중앙부에 있어 지정학적으로도 중요하며, 도 전체가 바다로 둘러싸였다. 수리적(數理的)으로는 동경 126°08'∼126°58', 북위 33°06'∼34°00'에 위치한다. 북단은 북위 34°00'의 제주시 추자면 대서리이며, 남단은 북위 33°06'의 서귀포시 대정읍 마라도다. 한국 최남단에 있는 도로서, 제주도를 포함해 9개의 유인도와 55개의 무인도로 이루어졌다. 이 가운데 유인도는 우도·상추자도·하추자도·비양도·횡간도·추포도·가파도·마라도이다. 남북 간의 거리가 약 31㎞, 동서간의 거리가 약 73㎞로 동서로 가로놓인 모양이다. 러시아·중국 등의 대륙과 일본·동남아 등지를 연결하는 요충지이며, 천혜의 자연경관이 수려한 세계적인 휴양관광지다.`
            },
        },// cityData
        // 이미지정보 셋업변수 : 화면에 반영될 이미지
        imgSrc : '',
        // 도시설명정보 셋업변수 : 화면에 반영될 설명
        desc: '',

    },
    // 2. 데이터 변경 메서드 구역
    // -> 컴포넌트에서 호출시 commit() 사용!
    mutations:{
        // 초기 데이터 셋업 메서드
        initSet(헐,파람){
            console.log('데이터변경!초기화!',헐);
        }, ////// initSet 메서드 /////

    },
    // 3. 비동기처리 메서드 구역
    // -> 컴포넌트에서 호출시 dispatch() 사용!
    actions:{
        myAct(헝,벙){
            console.log('나의액숀~!',헝,벙);
        }, /////// myAct 메서드 ///////

    },

}); /////////// Vuex.Store ///////////////