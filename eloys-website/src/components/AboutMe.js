import React from "react";
import EloyPicture from './media/EloyPic.jpg';

const AboutMe = () => {
    return(
        <div>
            <div className="aboutmeHeader">
                About
            </div>

            <div className="aboutme">
                I graduated from the University of North Texas Spring, 2023
                with a major in Mechanical and Energy Engineering and a
                minor in Computer Science.<br /><br />
                I am currently a Contract Deployment Engineer for Amazon Robotics
                through TEKsystems. There I perform quality checks, troubleshoot, and document
                Amazon technology to ensure safety and proper functionality for associates.<br /><br />
                I always enjoyed coding. I've always been fascinated by what one can do with programming.
                On my free time I am actively acquiring new skills such as React and JavaScript.
                Creating this portfolio was the first big project I began doing post-graduation and honestly
                I'm enjoying it.

            </div>

            <div className="aboutme-item" >
                <a>
                    <img src={EloyPicture} />
                </a>
            </div>
        </div>
    )
}

export default AboutMe;