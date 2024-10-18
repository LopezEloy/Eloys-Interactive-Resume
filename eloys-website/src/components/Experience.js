import React, { useState } from "react";
import materialInfo from "../material.json";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

const Experience = () => {

    const { Experience } = materialInfo;
    const experienceInfo = Experience.Experience_Info;
    const [activeWorkIndex, setActiveWorkIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveWorkIndex(index);
    };
    
    return(
        <Fade triggerOnce={true}>
            <section className="Experience-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a" id="experience">
                                    {Experience.Section.Header}
                                <div className="line-mf"></div>
                                </h3>
                                <p className="subtitle-a">
                                <ReactMarkdown>
                                    {Experience.Section.Description}
                                </ReactMarkdown>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="wrapper">
                            <Fade triggerOnce={true}>
                                <ul className="indicator">
                                {experienceInfo.map((job, index) => (
                                    <li
                                    key={index}
                                    className={index === activeWorkIndex ? "active" : ""}
                                    onClick={() => handleTabClick(index)}
                                    data-target={job.Company.split(" ").join("-")}
                                    >
                                    {job.Company}
                                    </li>
                                    ))}
                                </ul>
                            </Fade>
                            <div className="content">
                                <h1>
                                    {experienceInfo[activeWorkIndex].Role} @{" "}
                                    {experienceInfo[activeWorkIndex].Company}
                                </h1>
                                <h4>
                                    {experienceInfo[activeWorkIndex].Start_Date} -{" "}
                                    {experienceInfo[activeWorkIndex].End_Date}
                                </h4>
                                <Fade damping={0.1} triggerOnce={true}>
                                    <ul>
                                        {experienceInfo[activeWorkIndex].Description.map((paragraph, paraIndex) => (
                                        <li className="active"
                                            key={paraIndex}>
                                            {paragraph}
                                        </li>
                                        ))}
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default Experience;