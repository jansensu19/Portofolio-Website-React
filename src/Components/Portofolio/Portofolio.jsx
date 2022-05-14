import React from 'react'
import './Portofolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from "react";

const Portofolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className="portofolio" id='Portofolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
        <span>Portofolio</span>

        {/* slider */}
        <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portofolio-slider'>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gv5otXNd_M0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="" className='web-portofolio'><small>Elearning</small></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4MsqvUcUqW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://cgs-ecommerce-web.netlify.app/" className='web-portofolio'></a><small>E-Commerce</small>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/epWWrK_EGMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <small>Basic Web</small>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RMMQD1TUJAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <small>Dashboard ToDo with API (Angular)</small>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aNe5zdJ-O-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <small>BookSelft DOM</small>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cRxkeUUkcPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://jansen-portofolio-frontend-website.netlify.app/" className='web-portofolio'><small>Portofolio Web with React</small></a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portofolio