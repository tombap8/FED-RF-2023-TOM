// 상단, 하단 공통 모듈 html코드
export default {
    topArea:`
    <!-- 1-1.상단메뉴 -->
    <div class="tmenu">
        <!-- 1-1-1.sns박스 -->
        <div class="sns">
            <a href="#" class="fi fi-instagram">
                <span class="ir">인스타그램</span>
            </a>
            <a href="#" class="fi fi-facebook">
                <span class="ir">페이스북</span>
            </a>
            <a href="#" class="fi fi-twitter">
                <span class="ir">트위터</span>
            </a>
            <a href="#" class="fi fi-youtube-play">
                <span class="ir">유튜브</span>
            </a>
            <a href="#" class="fi cas">
                <span class="ir">카카오스토리</span>
            </a>
        </div>
        <!-- 1-1-2.사이드메뉴 -->
        <div class="sideMenu">
            <ul class="smbx">
                <li>
                    <a href="#">SIDE MENU</a>
                    <!-- 서브메뉴 -->
                    <ol class="smsub">
                        <li>
                            <a href="#">회사 소개</a>
                        </li>
                        <li>
                            <a href="#">광고 및 제휴</a>
                        </li>
                        <li>
                            <a href="#">개인정보 처리방침</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <a href="#">SUBSCRIBE</a>
                </li>
            </ul>
        </div>
    </div>
    <!-- 1-2.로고박스 -->
    <h1 class="logo">
        <a href="#">
            <img src="./images/mlogo.png" alt="메인로고" />
        </a>
    </h1>
    <!-- 1-3.GNB박스 -->
    <nav class="gnb">
        <ul>
            <li>
                <a href="#">FASHION</a>
            </li>
            <li>
                <a href="#">BEAUTY</a>
            </li>
            <li>
                <a href="#">LIVING</a>
            </li>
            <li>
                <a href="#">PEOPLE</a>
            </li>
            <li>
                <a href="#">VIDEO</a>
            </li>
            <li>
                <a href="#">RUNWAY</a>
            </li>
            <li>
                <a href="#">TIME &amp; GEM</a>
            </li>
            <li>
                <a href="#">SHOPPING</a>
            </li>
            <li>
                <!-- 돋보기 검색버튼 -->
                <i href="#" class="fi fi-search">
                    <span class="ir">search</span>
                </i>
            </li>
        </ul>
    </nav>

    `,
    footerArea:`
    <!-- 3-1.하단로고 -->
    <div class="blogo">
        <img src="./images/footer_logo.png" alt="하단로고">
    </div>
    <!-- 3-2.회사주소 -->
    <address class="addr">
        WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. 
        ALL RIGHTS RESERVED. VOGUE.COM KOREA IS OPERATED 
        BY DOOSAN MAGAZINE.
    </address>
    <!-- 3-3.하단링크 -->
    <ul class="blink">
        <li>
            <a href="#">정기구독</a>
        </li>
        <li>
            <a href="#">회사소개</a>
        </li>
        <li>
            <a href="#">광고 및 제휴</a>
        </li>
        <li>
            <a href="#">개인정보 처리방침</a>
        </li>
    </ul>

    `,
}