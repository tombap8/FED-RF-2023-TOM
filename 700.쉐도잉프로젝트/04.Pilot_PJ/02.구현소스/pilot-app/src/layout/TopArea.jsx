// Pilot PJ 상단영역 공통 컴포넌트

export function TopArea() {
  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img src="./images/main_logo.png" alt="파일럿로고" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              <li>
                <a href="#men">MEN</a>
              </li>
              <li>
                <a href="#women">WOMEN</a>
              </li>
              <li>
                <a href="#style">STYLE</a>
              </li>
            </ul>
          </nav>
          <div className="ham">
            <span></span> <span></span> <span></span>
          </div>
          <div className="mbox">
            <video
              src="images/disc2018.mp4"
              loop="loop"
              muted="muted"
              className="bgm"
            ></video>
            <nav className="mlist">
              <dl>
                <dt>
                  <a href="sub.html?cat=남성">MEN</a>
                </dt>
                <dd>
                  <a href="#">T-SHIRT</a>
                </dd>
                <dd>
                  <a href="#">JACKET</a>
                </dd>
                <dd>
                  <a href="#">TRAINING WARE</a>
                </dd>
                <dd>
                  <a href="#">BEACH WARE</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="sub.html?cat=여성">WOMEN</a>
                </dt>
                <dd>
                  <a href="#">T-SHIRT</a>
                </dd>
                <dd>
                  <a href="#">JACKET</a>
                </dd>
                <dd>
                  <a href="#">TRAINING WARE</a>
                </dd>
                <dd>
                  <a href="#">BEACH WARE</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="sub.html?cat=스타일">STYLE</a>
                </dt>
                <dd>
                  <a href="#">COLLECTION</a>
                </dd>
                <dd>
                  <a href="#">SEASON AD</a>
                </dd>
                <dd>
                  <a href="#">STAR &amp; NEWS</a>
                </dd>
                <dd>
                  <a href="#">MAIN ITEM</a>
                </dd>
              </dl>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
} //////////////// TopArea 컴포넌트 //////////
