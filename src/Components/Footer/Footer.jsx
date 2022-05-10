import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <span>Jansen.zix@gmail.com</span>
            <div className="f-icons">
            <a href="https://github.com/jansensu19"><Github color='white' size='3rem'/></a>
            <a href="https://www.linkedin.com/in/jansen-su-4a7471193/"><LinkedIn color='white' size='3rem'/></a>
            <a href="https://www.instagram.com/jansen_zx19/"><Insta color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer