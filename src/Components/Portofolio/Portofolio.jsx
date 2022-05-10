import React from 'react'
import './Portofolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Elearning from '../../img/elearning.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
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
                <img src={Elearning} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portofolio