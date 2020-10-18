/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ppt1 from "../../assets/ppt1.png";
import ppt2 from "../../assets/ppt2.png";
import ppt3 from "../../assets/ppt3.png";
import ppt4 from "../../assets/ppt4.png";
import ppt5 from "../../assets/ppt5.png";
import ppt6 from "../../assets/ppt6.png";
import ppt7 from "../../assets/ppt7.png";
import ppt8 from "../../assets/ppt8.png";

const Slideshow = () => {
    return (
        <div className="slideshow">
            <Carousel showArrows autoPlay infiniteLoop dynamicHeight swipeable>
                <div>
                    <img src={ppt1} />
                </div>
                <div>
                    <img src={ppt2} />
                </div>
                <div>
                    <img src={ppt3} />
                </div>
                <div>
                    <img src={ppt4} />
                </div>
                <div>
                    <img src={ppt5} />
                </div>
                <div>
                    <img src={ppt6} />
                </div>
                <div>
                    <img src={ppt7} />
                </div>
                <div>
                    <img src={ppt8} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slideshow;
