import React from "react";
import materialInfo from "../material.json";
import { Fade } from "react-awesome-reveal";
import EloyPicture from './media/EloyPic.jpg';

const AboutMe = () => {
    const { About } = materialInfo;

    return(
        <Fade triggerOnce={true}>
            <div className="aboutmeHeader">
                {About.Section.Header}
                <div className="aboutme">
                {About.Section.Description}
                    <div className="aboutme-item" >
                        <a>
                        <img src={EloyPicture} />
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default AboutMe;