import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <React.Fragment>
        <section className="hero" data-aos='fade-up'>
            <h1>Hi I'm a Data Enthusiast</h1>
            <p>A Mechanical engineering turned SDET, now transitioning into Data Science. Welcome to my portfolio where I share my journey and work in data analytics and science.</p>
        </section>
        <section id="about" data-aos="fade-right">
            <h2 class="section-title">About Me</h2>
            <p>I’m a Mechanical Engineering graduate currently working as a Software Development Engineer in Test (SDET). With a strong foundation in Python, SQL and analytical thinking, I'm transitioning into a data-driven role. I am currently enrolled in a comprensive data science , sharpening my skills in data analysis, machine learning, and visualisation. My goal is to solve real-world problems using data.</p>
        </section>
    </React.Fragment>
  )
}

export default Hero