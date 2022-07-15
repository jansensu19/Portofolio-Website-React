import React from 'react'
import './Portofolio.css'
import { Navigation, Pagination } from 'swiper'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { themeContext } from '../../Context';
import { useContext } from "react";

const VideoPortofolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className="portofolio" id='Portofolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
        <span>Video Editing Portofolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className='portofolio-slider'>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2guD23slcBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://www.youtube.com/watch?v=2guD23slcBg&ab_channel=JansenSu" className='web-portofolio'><small>After Effects Editing Background Trick</small></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DIxw4wr-8R8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://www.youtube.com/watch?v=DIxw4wr-8R8&ab_channel=JansenSu" className='web-portofolio'><small>After Effects Editing Scribble Style</small></a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default VideoPortofolio