import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from './programming1.png'
import slider2 from './programming2.jpeg'
import slider3 from './programming3.jpeg'
import Partners from './partners.png'


const Home = () => {

    return (
        <div>
            <Carousel className='mt-3 mb-3'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel'>
                        <h3>Amazing BootCamp</h3>
                        <p>As a student you can enjoy many bootcamps like this to strengthen your knowledge.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carousel'>
                        <h3>Group Work</h3>
                        <p>Group work is a proven way of better learning and understanding. You will have some group works to do.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carousel'>
                        <h3>Personal Project</h3>
                        <p>Our motto is "Learning by doing" and that's why all of our courses are project based.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <h4>About Us</h4>
                <p>Learn programming with our online courses from real college courses from Harvard, MIT, and more of the world's leading universities. Pick up essential coding skills needed for frontend and/or backend web development, machine learning, IOS, Android, and much more.</p>
                <p>We believe every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential. Yet, access to high-quality education has been a privilege of the few. Back in 2020, we realized it was a time for a seismic shift in learning. From the tried and true to the leading edge. From “for some” to “for all.” By opening the classroom through online learning, we empowered millions of learners to unlock their potential and become changemakers.</p>
            </div>
            <div>
                <h4>Learn skills taught by our world's leading experts from more than 100 companies.</h4>
                <img src={Partners} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default Home;