import React from 'react'
import Emporium from '../../images/Emporium.jpg'
import './About.css'


const About = () => {
    return (
        <div className='aboutPage' id='aboutPage'>
            <div className='left content'>
                <p>At Revive Tech Emporium, we're passionate about technology and helping our customers stay connected. We're a locally owned and operated business, and we're proud to be a part of the Emporium community.

                    Our team of skilled technicians has years of experience in repairing all kinds of computers and phones, and we stay up-to-date with the latest industry trends and technologies. We're dedicated to providing our customers with top-quality service and repairs at an affordable price.

                    We understand that technology can be overwhelming, which is why we take the time to explain our repairs in plain language that anyone can understand. We believe in transparency and honesty in all of our dealings, and we're committed to earning your trust.

                    At Revive Tech Emporium, we're not just a repair shop, we're your technology partner. Whether you need a simple repair or advice on upgrading your device, we're here to help. Come visit us today and experience the difference that our personalized service can make.</p>
            </div>
            <div className='center'></div>
            <div className="image">
                <img src={Emporium} alt="" />
            </div>
        </div>
    )
}

export default About