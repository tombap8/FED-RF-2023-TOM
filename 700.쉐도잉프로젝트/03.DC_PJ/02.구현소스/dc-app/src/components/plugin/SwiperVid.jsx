// 비디오스와이프 하위 스와이퍼 플러그인 컴포넌트

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리 넣기 */
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
// 양쪽 이동버튼만 필요함!
import 'swiper/css/navigation';

/* 폰트어썸 임포트 */
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 스와이퍼 CSS
import "./css/swiper_vid.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션,네비게이션,자동넘김)
import { Navigation } from "swiper/modules";

export function SwiperApp() {
  

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}
        className="mySwiper"
      >
        {
            selData.map((v,i)=>
            <SwiperSlide key={i}>
                <section className="sw-inbox">
                  {/* 동영상이미지박스 */}
                  <div className="vid-img">
                    <img src={v.src} alt={v.tit} />
                    {/* 폰트어썸 아이콘 */}
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{
                        poisition:'absolute',
                        bottom: '55%',
                        left:'10%',
                        color:'#fff',
                        fontSize:'50px'
                      }} />
                  </div>
                </section>
            </SwiperSlide>)
        }        
       
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////
