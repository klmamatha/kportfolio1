import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md'; // Import download icon
import myImage from '../assets/images/kranthi.jpg'; // Import your transparent PNG image
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="text-content">
                    <h3>Hello, I am</h3>
                    <h4>Kranthi Kumar Kadinti</h4>
                    <h4>I'm a <span className='text-content3'>Front-End Developer</span></h4>
                    <p className="kkk2">Building bridges between front end and backend, transforming ideas into responsive reality.</p>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/kranthi-kumar-81453113a/" target="_blank" rel="noopener noreferrer" className="social-icons1"><FaLinkedinIn /></a>
                        <a href="https://github.com/klmamatha" target="_blank" rel="noopener noreferrer" className="social-icons1"><FaGithub /></a>
                        <a href="mailto:kranthikuma17@gmail.com" className="social-icons1"><FaEnvelope /></a>
                    </div>
                </div>
                <button className="resume-btn" onClick={() => window.open('/kranthi resume.pdf')}>
                    Download  my Resume <MdDownload />
                </button>

                <div className="floating-image">
                    <img src={myImage} alt="Kranthi Kumar Kadinti" />
                </div>
                <div className="topmate-profile">
                    <button className="topmate-button" href="contact.js">Let's Connect</button>
                </div>
            </div>
        </div>
    );
}

export default Home;