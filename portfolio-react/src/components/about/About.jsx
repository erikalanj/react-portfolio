import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quis, inventore beatae possimus vitae debitis labore placeat, provident accusamus, quam hic rem. Explicabo dolor eaque, consequuntur suscipit repellendus hic sint!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus perspiciatis facilis aperiam ipsum sint delectus omnis nisi incidunt suscipit libero. Dolore quae aut impedit quo corporis delectus cupiditate alias incidunt.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Typescript</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>C</p><hr style={{width:"40%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About