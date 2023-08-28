// 영화 초이스 객체 ///// object.js

// 이조은 초이스! //////////////////////
const zoe_obj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
zoe_obj.title = "이터널 션샤인";
// 2. 감독
zoe_obj.director = "미셸 공드리";
// 3. 배우
zoe_obj.actor = "짐캐리, 케이트 윈슬렛";
// 4. 장르
zoe_obj.genre = "로맨스";
// 5. 관람가
zoe_obj.ratings = "12세";

// 6. 예고편
zoe_obj.trailer = function () {
    console.log("예고편:", "07-QBnEkgXU");
    // 플레이어함수 호출!
    playMovie("07-QBnEkgXU");
}; ////// trailer 함수 ////////

// 이동엽 초이스! //////////////////////
const nick_obj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
nick_obj.title = "공조2:인터내셔날";

// 2. 감독
nick_obj.director = "이석훈";

// 3. 배우
nick_obj.actor = "현빈, 유해진, 윤아, 다니엘 헨리, 진선규";

// 4. 장르
nick_obj.genre = "액션,코미디";

// 5. 관람가
nick_obj.ratings = "15세";

// 6. 예고편
nick_obj.trailer = function () {
    console.log("예고편:", "fzUKUfHeIYA");
    // 플레이어함수 호출!
    playMovie("fzUKUfHeIYA");
}; ///////////// trailer 함수 ///////////////

// 신용진 초이스! //////////////////////
const shin_Obj = {};
// 오브젝트 형만 만들고 할당은 아래에서
// 1. 영화제목
shin_Obj.title = "말아톤";
// 2. 감독
shin_Obj.director = "정윤철";
// 3. 배우
shin_Obj.actor = "조승우,김미숙";
// 4. 장르
shin_Obj.genre = "드라마";
// 5. 관람가
shin_Obj.ratings = "전체 관람가";
// 6. 예고편
shin_Obj.trailer = function () {
    console.log("예고편", "mGgYQOiUq4s");
    // 플레이어함수 호출
    playMovie("mGgYQOiUq4s");
}; /////////////trailer함수////////////////

// 최수진 초이스! //////////////////////
const csj_obj = {};

// 오브젝트 형만 만들고 객체내용은 아래에서!
// 1. 영화제목
csj_obj.title = "가디언즈오브갤럭시vol.3";
// 2. 감독
csj_obj.director = "제임스건";
// 3. 배우
csj_obj.actor = "크리스프랫,조샐다나";
// 4. 영화장르
csj_obj.genre = "SF코미디어드벤처";
// 5. 관람가
csj_obj.ratings = "12세";
// 6. 예고편
csj_obj.trailer = function () {
    console.log("예고편:", "XyHr-s3MfCQ");

    // 플레이어함수 호출!!
    playMovie("XyHr-s3MfCQ");
}; ////////////// trailer 함수 ////////////////////
