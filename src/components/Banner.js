import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute h-32 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}  interval={5000}>
                <div>
                    <img loading="lazy" src="/images/valorantImage.jpg" alt="images" />
                </div>
                <div >
                    <img loading="lazy" src="/images/circleimage.jpg" alt="circleimage" />
                </div>
                <div>
                    <img loading="lazy" src="/images/darkocean.jpg" alt="darkocean" />
                </div>   
                <div>
                    <img loading="lazy" src="/images/samuraiimage.jpg" alt="lighttraffic" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner;
