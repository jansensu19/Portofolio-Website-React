import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Jansen CV.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion'

const Services = () => {

    const transition = {duration : 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span>This is my info and my services that I can provide in your company
            </span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div
            whileInView={{left: '14rem'}}
            initial={{left: '25rem'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Photoshop, After Effects, Premiere Pro"}
                />
            </motion.div>
            {/* second card */}
            <motion.div
            whileInView={{left: '-4rem'}}
            initial={{left: '25rem'}}
            transition={transition}
             style={{top: '12rem', left: '-4rem'}}>
                <Card 
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"HTML, CSS, JavaScript, React, Angular"}
                />
            </motion.div>
            {/* third card */}
            <motion.div
            whileInView={{left: '12rem'}}
            initial={{left: '25rem'}}
            transition={transition}
            style={{top: '19rem', left: '12rem'}}>
                <Card 
                emoji = {Humble}
                heading = {'Others'}
                detail = {"Microsoft Office, Git, SEO, AWS Cloud"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services