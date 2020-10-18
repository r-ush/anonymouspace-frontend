/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ppt1 from "../../assets/ppt1.png";

const Slideshow = () => {
    return (
        <div className="slideshow">
            <Carousel showArrows autoPlay infiniteLoop dynamicHeight swipeable>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt1} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slideshow;
