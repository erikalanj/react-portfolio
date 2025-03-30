import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pfp.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> I am Erik Jensen a junior software developer based in Connecticut, USA.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis accusantium beatae facere exercitationem qui corporis. Suscipit soluta quibusdam voluptates natus debitis! Iure laudantium quaerat voluptatibus odit modi. Possimus, eaque.</p>
        <div className="hero-action">
            <div className="hero-connect">connect with me</div>
            <div className="hero-resume">my resume</div>
        </div>
    </div>
  )
}

export default Hero