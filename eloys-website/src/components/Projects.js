import React, { useState } from "react";
import materialInfo from "../material.json";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

const Projects = () => {

    const { Projects } = materialInfo;
    const projectsInfo = Projects.Projects_Info;
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveProjectIndex(index);
    };
    
    return(
        <Fade triggerOnce={true}>
            <section className="Projects-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a" id="experience">
                                    {Projects.Section.Header}
                                <div className="line-mf"></div>
                                </h3>
                                <p className="subtitle-a">
                                <ReactMarkdown>
                                    {Projects.Section.Description}
                                </ReactMarkdown>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="wrapper">
                            <Fade triggerOnce={true}>
                                <ul className="indicator">
                                {projectsInfo.map((Projects, index) => (
                                    <li
                                    key={index}
                                    className={index === activeProjectIndex ? "active" : ""}
                                    onClick={() => handleTabClick(index)}
                                    data-target={Projects.Title.split(" ").join("-")}
                                    >
                                    {Projects.Title}
                                    </li>
                                    ))}
                                </ul>
                            </Fade>
                            <div className="content">
                                <h1>
                                    {projectsInfo[activeProjectIndex].Title}
                                </h1>
                                <h2>
                                    {projectsInfo[activeProjectIndex].Skills}
                                </h2>
                                <h4>
                                    {projectsInfo[activeProjectIndex].Start_Date} -{" "}
                                    {projectsInfo[activeProjectIndex].End_Date}
                                </h4>
                                <Fade damping={0.1} triggerOnce={true}>
                                    <ul>
                                        {projectsInfo[activeProjectIndex].Description.map((paragraph, paraIndex) => (
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

export default Projects;