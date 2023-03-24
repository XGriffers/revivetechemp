import React from 'react';
import './Home.css';
import computerRepair from '../../images/computerRepair.jpg'

const Home = () => {
    return (
        <div className='homepage' id='homePage'>
            <div className='content'>
                <p>Welcome to Revive Tech Emporium, your trusted local source for quality computer and phone repair services in Emporium, Pennsylvania!

                    We know how frustrating it can be when your devices stop working, which is why we're here to help. Our experienced technicians are dedicated to providing fast and affordable repair services for all types of computers and phones. Whether you have a cracked screen, a virus, or any other issue, we have the skills and expertise to fix it.

                    At Revive Tech Emporium, we pride ourselves on providing excellent customer service. We're committed to making sure you're satisfied with our work, which is why we offer a 100% satisfaction guarantee on all of our repairs. When you bring your device to us, you can trust that it's in good hands.

                    We're located right here in Emporium, so you can stop by our convenient location to drop off your device for repair. You can also contact us via our website or our social media pages to schedule an appointment or ask any questions you may have.

                    Don't forget to sign up for our newsletter to stay up-to-date on the latest news and special offers from Revive Tech Emporium. Thank you for choosing us for all your computer and phone repair needs!</p>
            </div>
            <div className="center"></div>
            <div className='image'>
                <img src={computerRepair} alt="" />
            </div>
        </div>

    );
};

export default Home;
