import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './styleslider.css'

const Slideshow = () => {
    const images = [
        "https://ntu.edu.pk/uploaded_images/slider/2022/Interloop%20Scholarship%20Award4.jpg",
        "https://ntu.edu.pk/uploaded_images/slider/slider04.jpg",
        "https://ntu.edu.pk/uploaded_images/slider/slider01.jpg",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div className='image' style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
    );
};

export { Slideshow };