// 쇼핑몰 갤러리 템플릿 데이터 JS - hcode.js

const hcode = {
  // 1. 타이틀
  tit: `
        <strong>
            <span>👩‍🦰다이아나 쇼핑몰💕</span><br>
            👗Diana Shopping Mall🥻
        </strong>
    `,

  // 2. 리스트
  list: `
  <div>
        <img 
          v-bind:src="gsrc" 
          v-on:click="goPapa('나는 공유다!')"
          alt="의류아이템"> 
          <aside>
          <h2 
            v-text="gname"
            v-on:mouseover="goMama({이름:'김고은',나이:'34살'})"
            ></h2> 
            <h3 
            v-text="gprice"
            v-on:click="goPapa('나는 김수현이다!')"
            ></h3>
        </aside>
    </div>
`,
  // 3. 큰이미지
  big: `
`,
    // 4. 아이프레임 동영상
    ifr:`
    
    `,
}; ////////////// hcode객체 //////////////

// 객체 내보내기
export default hcode;
