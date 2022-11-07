import React from 'react'
import './Portofolio.css'
import { Navigation, Pagination } from 'swiper'
import Github from '@iconscout/react-unicons/icons/uil-github'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { themeContext } from '../../Context';
import { useContext } from "react";

const Portofolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className="portofolio" id='Portofolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
        <span>Front-End Portofolio</span>

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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cRxkeUUkcPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://jansen-portofolio-frontend-website.netlify.app/" className='web-portofolio'><small>Portofolio Web with React</small></a> <a href="https://github.com/jansensu19/Portofolio-Website-React"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/uG7PZf5ZnCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://kincir-tech.netlify.app/" className='web-portofolio'><small>Kincir Tech React with Tailwind</small></a> <a href="https://github.com/jansensu19/Kincir-Tech-With-Tailwind"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hZQzjHCNdSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a href="https://superfinti.netlify.app/" className='web-portofolio'><small>Super Finti Dashboard With React</small></a> <a href="https://github.com/jansensu19/Dashboard-Super-Finti"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ahoI_mN-30E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a href="https://smartspace-eduaction.netlify.app/" className='web-portofolio'><small>Smart Space with React</small></a> <a href="https://github.com/jansensu19/SmartSpace"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gv5otXNd_M0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://elearning-cuda.netlify.app/" className='web-portofolio'><small>Elearning With React</small></a> <a href="https://github.com/jansensu19/E-Learning-Web-React-"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RMMQD1TUJAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://github.com/jansensu19/Dashboard" className='web-portofolio'><small>Dashboard ToDo with API (Angular)</small></a> <a href="https://github.com/jansensu19/Dashboard"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4MsqvUcUqW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://cgs-ecommerce-web.netlify.app/" className='web-portofolio'><small>E-Commerce With Basic Web</small></a> <a href="https://github.com/jansensu19/CGS"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/epWWrK_EGMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://slit.netlify.app/" className='web-portofolio'><small>Basic Web DiCoding Course</small></a> <a href="https://github.com/jansensu19/DiCoding-Basic-Web"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide> 
            <SwiperSlide>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aNe5zdJ-O-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://bookself-dom.netlify.app/" className='web-portofolio'><small>BookSelf DOM Front-End DiCoding Course</small></a> <a href="https://github.com/jansensu19/DiCodingFrontEnd"><Github color='black' size='2rem' className="git"/></a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portofolio