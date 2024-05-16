// 빈배열을 만들고 개수만큼 배열값을 할당한다!
// 아래 표현식에서 이 배열로 이미지를 반복생성한다!
let icnt = [];
for (let i = 0; i < selData.imgName[1]; i++) icnt[i] = "";

// 2.현장포토 출력
db == "liveData"
  ? `
<button class="cbtn">×</button>
  <div class="sub-inbox inbox">
      <h1>현장포토 : ${selData.title}</h1>
      <div class="sub-item">
      ${icnt
        .map(
          (v, i) => `
        <img 
          src="./images/live_photo/${selData.imgName[0]}/${i + 1}.jpg" 
          alt="${selData.title}" />
        
        `
        )
        .join("")}
      </div>
  </div>
`
  : ``;
