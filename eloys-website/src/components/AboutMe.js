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
                    <Fade damping={0.3} triggerOnce={true}>
                {About.Section.Description.map((sentence,index) => (
                    <p key={index}>
                        {sentence}
                    </p>
                ))}
                    <div className="aboutme-item" >
                        <img src={EloyPicture} alt="EloyPic"/>
                    </div></Fade>
                </div>
            </div>
        </Fade>
    )
}

export default AboutMe;